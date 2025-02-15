import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to My App/i);
  expect(headingElement).toBeInTheDocument();
});