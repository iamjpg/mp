import { render } from '@testing-library/react';
import Home from '../pages/index';
import companies from './mocks/companyData';

describe('Companies List', () => {
  it('renders a heading', () => {
    render(<Home companies={companies} />);

    const heading = document.querySelector('h1');

    expect(heading).toBeInTheDocument();
  });

  it('renders a correct number of nodes equal to the company count', () => {
    render(<Home companies={companies} />);

    const nodeCount = document.querySelectorAll(
      '[data-testid="company-node"]'
    ).length;

    expect(nodeCount).toEqual(companies.length);
  });

  it('renders a company name on randomly picked node', () => {
    render(<Home companies={companies} />);

    // Pull random array element to test.
    const randomNum = Math.floor(Math.random() * companies.length);

    const randomNodeText = document.querySelectorAll(
      '[data-testid="company-name"]'
    )[randomNum].textContent;

    expect(randomNodeText).not.toBe('');
  });
});
