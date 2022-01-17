import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 高效ToDo", () => {
  render(<App />);
  const linkElement = screen.getByText(/高效ToDo/i);
  expect(linkElement).toBeInTheDocument();
});
