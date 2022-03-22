import { render } from '@testing-library/react'
import CitiesSelectListItem from './CitiesSelectListItem';

const city = {
  geonameid: 213321,
  name: 'Manhattan',
  country: 'United States',
  subcountry: 'New York',
};

const city2 = {
  geonameid: 213321,
  name: 'Manhattan',
  country: 'United States',
};

describe('Components: CitiesSelectListItem', () => {
  it('renders a city list item correctly', () => {
    const { container } = render(<CitiesSelectListItem selected={true} option={city} />);
    const input = container.querySelector('input');
    expect(input?.getAttribute('type')).toBe('checkbox');
    const cityName = container.querySelector('div')?.firstChild;
    expect(cityName?.textContent).toBe('Manhattan');
    const cityCaption = container.querySelector('div')?.lastChild;
    expect(cityCaption?.textContent).toBe('New York - United States');
  })

  it('renders a city list item correctly without subcountry', () => {
    const { container } = render(<CitiesSelectListItem selected={false} option={city2} />);
    const input = container.querySelector('input');
    expect(input?.getAttribute('type')).toBe('checkbox');
    const cityName = container.querySelector('div')?.firstChild;
    expect(cityName?.textContent).toBe('Manhattan');
    const cityCaption = container.querySelector('div')?.lastChild;
    expect(cityCaption?.textContent).toBe('United States');
  })
});
