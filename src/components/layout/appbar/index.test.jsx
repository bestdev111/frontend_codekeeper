import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainAppBar from ".";
test("renders MainAppBar component", () => {
  render(
    <BrowserRouter>
      <MainAppBar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/NASA Media Library/i);
  expect(linkElement).toBeInTheDocument();
});

test("MainAppBar navigates to /search on click", () => {
  const { getByText } = render(
    <BrowserRouter>
      <MainAppBar />
    </BrowserRouter>
  );
  const typographyElement = getByText(/NASA Media Library/i);
  fireEvent.click(typographyElement);
  expect(window.location.href).toBe("http://localhost/search");
});
