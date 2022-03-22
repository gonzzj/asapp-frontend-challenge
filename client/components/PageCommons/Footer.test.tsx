import { render } from '@testing-library/react'
import Footer from './Footer';

describe('Components: Footer', () => {
  it('renders a footer correctly', () => {
    const { container } = render(<Footer />);
    const footerLink = container.querySelector('a');
    expect(footerLink).toBeDefined();
    expect(footerLink?.textContent).toBe('Created by Gonzalo Jusid');
  })
});
