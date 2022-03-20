import { SyntheticEvent, useState } from 'react';
import { matchSorter } from 'match-sorter';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CitiesSelectListItem from './CitiesSelectListItem';
import { City } from '../../types/city';

const CITIES_SELECT_PLACEHOLDER = "Type to filter by city name or country";

interface CitiesSelectProps {
  cities: City[]
}

const CitiesSelect = ({ cities }: CitiesSelectProps) => {
  const [value, setValue] = useState<City[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const filterOptions = (options: City[], { inputValue }: { inputValue: string }) => (
    matchSorter(options, inputValue, { keys: ['name', 'subcountry', 'country'] })
  );

  const handleValueChange = (_event: SyntheticEvent, newValue: City[]) => {
    setValue(newValue);
  };

  const handleInputChange = (_event: SyntheticEvent, newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <Autocomplete
      multiple
      sx={{ m: 1, width: 1024 }}
      filterOptions={filterOptions}
      value={value}
      onChange={handleValueChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      id="cities-select"
      options={cities}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <CitiesSelectListItem selected={selected} option={option} {...props} />
      )}
      renderInput={(params) => (
        <TextField {...params} placeholder={CITIES_SELECT_PLACEHOLDER} />
      )}
    />
  );
};

export default CitiesSelect;
