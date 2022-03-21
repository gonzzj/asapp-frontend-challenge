/* eslint-disable react/display-name */
import { SyntheticEvent, useState } from 'react';
import { matchSorter } from 'match-sorter';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CitiesSelectList from './CitiesSelectList';
import { City } from '../../types/city';
import { getCaption } from '../../helpers/cities';

const CITIES_SELECT_PLACEHOLDER = "Type to filter by city name or country";

interface CitiesSelectProps {
  cities: City[]
}

const CitiesSelect: React.FC<CitiesSelectProps> = ({ cities }) => {
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
      id="cities-select"
      sx={{ m: 4, width: 860 }}
      filterOptions={filterOptions}
      value={value}
      onChange={handleValueChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      disableCloseOnSelect
      options={cities}
      getOptionLabel={({ name, subcountry, country}) => `${name} (${getCaption(country, subcountry)})`}
      disableListWrap
      ListboxComponent={CitiesSelectList}
      renderOption={(props, option, { selected }) => [props, option, selected]}
      renderInput={(params) => (
        <TextField {...params} placeholder={CITIES_SELECT_PLACEHOLDER} />
      )}
    />
  );
};

export default CitiesSelect;
