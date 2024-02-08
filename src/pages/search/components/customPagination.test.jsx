import React from "react";
import { render } from "@testing-library/react";
import { CustomPagination } from "./customPagination";

jest.mock("@mui/material", () => ({
  Box: () => <div data-testid="mock-box" />,
  TablePagination: () => <div data-testid="mock-table-pagination" />,
}));

describe("<CustomPagination>", () => {
  it("should render component", () => {
    const pageInfo = { pageNum: 1, pageSize: 10 };
    const { container } = render(<CustomPagination pageInfo={pageInfo} />);
    expect(container).toMatchSnapshot();
  });
});
