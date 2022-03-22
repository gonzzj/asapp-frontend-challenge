import { fireEvent, screen, render } from '@testing-library/react'
import CitiesSelect from './CitiesSelect';

const cities = [
  {
    geonameid: 213321,
    name: 'Manhattan',
    country: 'United States',
    subcountry: 'New York',
  },
  {
    geonameid: 32432,
    name: 'Alkmaar',
    country: 'Netherlands',
    subcountry: 'North Holland',
  },
  {
    geonameid: 4324243,
    name: 'Manhattan',
    country: 'United States',
    subcountry: 'Kansas',
  },
  {
    geonameid: 45354,
    name: 'Abashiri',
    country: 'Japan',
    subcountry: 'Hokkaido',
  },
  {
    geonameid: 54365,
    name: 'Abidos',
    country: 'Brazil',
    subcountry: 'Para',
  }
];

describe('Components: CitiesSelect', () => {
  it('renders a cities select correctly', () => {
    const { container, getByText, getByRole } = render(<CitiesSelect cities={cities} />);
    const inputSelect = container.querySelector('input');
    expect(inputSelect?.getAttribute('placeholder')).toBe('Type to filter by city name or country');
    expect(inputSelect?.getAttribute('role')).toBe('combobox');

    fireEvent.click(screen.getByTitle(/Open/i));
    const popper = getByRole('presentation');
    const listItems = popper.querySelectorAll('li');
    expect(listItems.length).toBe(5);
  })
});
