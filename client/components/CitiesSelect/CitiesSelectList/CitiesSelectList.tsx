import { createContext, forwardRef, useContext, memo } from 'react';
import { VariableSizeList, ListChildComponentProps } from "react-window";
import CitiesSelectListItem from '../CitiesSelectListItem';
import useResetCache from '../../../hooks/useResetCache';

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

const CitiesSelectList: React.FC = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const { children, ...others } = props;
  const itemData: React.ReactChild[] = [];
  (children as React.ReactChild[]).forEach((item: React.ReactChild & { children?: React.ReactChild[] }) => {
    itemData.push(item);
    itemData.push(...(item.children || []));
  });

  const itemCount = itemData.length;
  const itemSize = 64;

  const getHeight = (): number => {
    if (itemCount > 8) return 8 * itemSize;
    return itemData.map(() => itemSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={others}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight()}
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