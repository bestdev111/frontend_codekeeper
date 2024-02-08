import React from "react";
import { render, screen } from "@testing-library/react";
import SearchPage from "./index";
import { useForm } from "../../modules/validation";
import userEvent from "@testing-library/user-event";
jest.mock("../../modules/validation", () => ({
  useForm: jest.fn(),
}));

describe("searchPage Component", () => {
  test("renders SearchPage component", () => {
    const formDetails = {
      formik: {
        handleSubmit: jest.fn(),
        getFieldProps: jest.fn(),
        touched: { query: false, yearStart: false, yearEnd: false },
        errors: {},
      },
      updatePagination: jest.fn(),
      searchResults: [],
      isLoading: false,
      isError: false,
      pageInfo: {},
    };

    useForm.mockImplementation(() => formDetails);

    render(<SearchPage />);
    const queryInput = screen.getByPlaceholderText("What do you want?");
    const searchButton = screen.getByText(/Search/i);
    const startYearInput = screen.getByLabelText("Year Start");
    const endYearInput = screen.getByLabelText("Year End");
    expect(queryInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    userEvent.type(queryInput, "sun");
    userEvent.type(startYearInput, "2010");
    userEvent.type(endYearInput, "2011");
    userEvent.click(searchButton);
  });

  test("checks isError condition", () => {
    const formDetails = {
      formik: {
        handleSubmit: jest.fn(),
        getFieldProps: jest.fn(),
        touched: { query: false, yearStart: false, yearEnd: false },
        errors: {},
      },
      updatePagination: jest.fn(),
      searchResults: [],
      isLoading: false,
      isError: true,
      pageInfo: {},
    };

    useForm.mockImplementation(() => formDetails);
    render(<SearchPage />);
  });
});
