import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { City } from '../../types/city';

interface CitiesSelectListItemProps {
  selected: boolean,
  option: City
}

const CitiesSelectListItem = ({ selected, option, ...props }: CitiesSelectListItemProps) => {
  const { name, subcountry, country } = option;
  const caption = subcountry ? `${subcountry} - ${country}` : country;

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
          {name}
        </Typography>
        <Typography variant="caption" style={{ color: '#888' }}>
          {caption}
        </Typography>
      </div>
    </li>
  )
};

export default CitiesSelectListItem;
