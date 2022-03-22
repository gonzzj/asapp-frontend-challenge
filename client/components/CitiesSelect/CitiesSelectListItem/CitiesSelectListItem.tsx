import { useMemo } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { City } from '../../../types/city';
import { getMatchParts } from '../../../helpers/cities';
import CitiesSelectListItemHighlight from '../CitiesSelectListItemHighlight';

interface CitiesSelectListItemProps {
  selected: boolean,
  option: City,
  inputValue?: string,
}

const CitiesSelectListItem: React.FC<CitiesSelectListItemProps> = ({ selected, option, inputValue, ...props }) => {
  const { name, subcountry, country } = option;
  const [cityNameParts, citySubCountryParts, cityCountryParts] = useMemo(() => {
    const cityNameParts = getMatchParts(inputValue, name);
    const citySubCountryParts = getMatchParts(inputValue, subcountry);
    const cityCountryParts = getMatchParts(inputValue, country);

    return [cityNameParts, citySubCountryParts, cityCountryParts];
  }, [inputValue]);

  return (
    <li {...props}>
      <Checkbox
        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
        checkedIcon={<CheckBoxIcon fontSize="small" />}
        style={{ marginRight: 8 }}
        checked={selected}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1">
          <CitiesSelectListItemHighlight parts={cityNameParts} />
        </Typography>
        <Typography variant="caption" style={{ color: '#888' }}>
          <CitiesSelectListItemHighlight parts={citySubCountryParts} />
          {subcountry ? ' - ' : ''}
          <CitiesSelectListItemHighlight parts={cityCountryParts} />
        </Typography>
      </div>
    </li>
  )
};

CitiesSelectListItem.defaultProps = {
  inputValue: ''
}

export default CitiesSelectListItem;
