import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from ".";
test("renders Layout component", () => {
  render(
    <BrowserRouter>
      <Layout>
        <div>Child</div>
      </Layout>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/NASA Media Library/i);
  const childElement = screen.getByText(/Child/i);
  expect(linkElement).toBeInTheDocument();
  expect(childElement).toBeInTheDocument();
});
