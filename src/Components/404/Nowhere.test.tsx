import { render, screen } from "@testing-library/react";
import Nowhere from "./Nowhere";
import React from "react";

test("该页面应该渲染 404", () => {
  render(<Nowhere></Nowhere>);
  const linkElement = screen.getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});
