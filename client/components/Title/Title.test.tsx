import { render } from '@testing-library/react'
import Title from './Title';

describe('Components: Title', () => {
  it('renders a title correctly', () => {
    const { container } = render(<Title label={'Test title world'} />);
    const title = container.querySelector('h1');
    expect(title).toBeDefined();
    expect(title?.textContent).toBe('Test title world');
    expect(title?.textContent).not.toBe('Error Test title');
  })
});
