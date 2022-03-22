import { render } from '@testing-library/react'
import CitiesSelectListItemHighlight from './CitiesSelectListItemHighlight';

const parts = [
  {
    highlight: true,
    text: 'Hello'
  },
  {
    highlight: false,
    text: 'World!'
  }
];

const parts2 = [
  {
    highlight: false,
    text: 'New'
  },
  {
    highlight: false,
    text: ' test '
  },
  {
    highlight: true,
    text: 'word'
  },
  {
    highlight: false,
    text: '!'
  }
];

describe('Components: CitiesSelectListItemHighlight', () => {
  it('renders a city list item highlighted correctly', () => {
    const { container } = render(<CitiesSelectListItemHighlight parts={parts} />);
    const texts = container.querySelectorAll('span');
    expect(texts.length).toBe(2);
    expect(texts[0].getAttribute('style')).toBe('font-weight: 700;');
    expect(texts[1].getAttribute('style')).toBe('font-weight: 400;');
  })

  it('renders a city list item highlighted correctly with more parts', () => {
    const { container } = render(<CitiesSelectListItemHighlight parts={parts2} />);
    const texts = container.querySelectorAll('span');
    expect(texts.length).toBe(4);
    expect(texts[0].getAttribute('style')).toBe('font-weight: 400;');
    expect(texts[1].getAttribute('style')).toBe('font-weight: 400;');
    expect(texts[2].getAttribute('style')).toBe('font-weight: 700;');
    expect(texts[3].getAttribute('style')).toBe('font-weight: 400;');
  })
});
