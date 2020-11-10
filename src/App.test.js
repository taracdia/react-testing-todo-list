import { render, screen } from '@testing-library/react';
import App from './App';


describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    render(<App />);
    const h2Element = screen.getByText(/Getting started with react testing library/i);
    expect(h2Element).toBeInTheDocument();
  });
});