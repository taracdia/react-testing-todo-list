import { screen } from '@testing-library/react';
import App from './App';
// import { render } from "./custom-render";
import { render } from '@testing-library/react';


describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Getting started with React testing library/i)).toBeInTheDocument();
  });
});