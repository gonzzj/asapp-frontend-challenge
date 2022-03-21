import { createContext, forwardRef, useContext, useRef, useEffect } from 'react';
import { VariableSizeList, ListChildComponentProps } from "react-window";
import CitiesSelectListItem from './CitiesSelectListItem';

const renderListItem = ({ data, index, style }: ListChildComponentProps) => {
  const [listItemProps, option, selected, inputValue] = data[index];

  return (
    <CitiesSelectListItem {...listItemProps} selected={selected} option={option} inputValue={inputValue} key={listItemProps.id} style={{...style}} />
  );
}

const OuterElementContext = createContext({});

const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

const useResetCache = (dataLength: number) => {
  const ref = useRef<VariableSizeList>(null);

  useEffect(() => {
    ref.current != null && ref.current.resetAfterIndex(0, true);
  }, [dataLength]);

  return ref;
}

const CitiesSelectList: React.FC = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const { children, ...others } = props;
  const itemData: React.ReactChild[] = [];
  (children as React.ReactChild[]).forEach((item: React.ReactChild & { children?: React.ReactChild[] }) => {
    itemData.push(item);
    itemData.push(...(item.children || []));
  });

  const itemCount = itemData.length;
  const itemSize = 48;
  const listHeight = 400;

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={others}>
        <VariableSizeList
          itemData={itemData}
          height={listHeight}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={() => itemSize}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderListItem}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

export default CitiesSelectList;