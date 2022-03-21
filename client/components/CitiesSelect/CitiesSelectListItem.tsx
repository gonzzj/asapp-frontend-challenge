import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { City } from '../../types/city';
import { getCaption } from '../../helpers/cities';

interface CitiesSelectListItemProps {
  selected: boolean,
  option: City
}

const CitiesSelectListItem: React.FC<CitiesSelectListItemProps> = ({ selected, option, ...props }) => {
  const { name, subcountry, country } = option;
  const caption = getCaption(country, subcountry);

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
