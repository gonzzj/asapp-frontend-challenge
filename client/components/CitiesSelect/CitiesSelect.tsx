import { useCallback, useState, SyntheticEvent, useMemo } from 'react';
import FuzzySearch from 'fuzzy-search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CitiesSelectList from './CitiesSelectList/CitiesSelectList';
import { City } from '../../types/city';
import { getCaption } from '../../helpers/cities';

const CITIES_SELECT_PLACEHOLDER = "Type to filter by city name or country";

interface CitiesSelectProps {
  cities: City[]
}

const CitiesSelect: React.FC<CitiesSelectProps> = ({ cities }) => {
  const [value, setValue] = useState<City[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const searcher = useMemo(() => new FuzzySearch(cities, ['name', 'subcountry', 'country']), [cities]);

  const filterOptions = useCallback(() => searcher.search(inputValue), [cities, inputValue]);

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
      renderOption={(props, option, { selected, inputValue }) => [props, option, selected, inputValue]}
      renderInput={(params) => (
        <TextField {...params} placeholder={CITIES_SELECT_PLACEHOLDER} />
      )}
    />
  );
};

export default CitiesSelect;
