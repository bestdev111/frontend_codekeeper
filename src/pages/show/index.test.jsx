import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import ShowPage from "./index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    nasaId: "testNasaId",
  }),
  useNavigate: () => jest.fn(),
}));

jest.mock("../../modules/query", () => ({
  useShowItemQuery: (nasaId) => ({
    data: {
      collection: {
        items: [
          {
            data: [
              {
                title: "Test title",
                description: "Test description",
                location: "Test location",
                photographer: "Test photographer",
                secondary_creator: "Test secondary photographer",
                keywords: ["Test keyword 1", "Test keyword 2"],
                date_created: "Test date",
              },
            ],
            links: [{ href: "testImage1" }, { href: "testImage2" }],
          },
        ],
      },
    },
    error: null,
    isLoading: false,
  }),
}));

describe("ShowPage", () => {
  it("should render correctly", async () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<ShowPage />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText(/Test title/i)).toBeInTheDocument();
    expect(screen.getByText(/Test description/i)).toBeInTheDocument();
    expect(screen.getByText(/Test location/i)).toBeInTheDocument();
    expect(screen.getByText(/Test photographer/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Test keyword 1, Test keyword 2/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Test date/i)).toBeInTheDocument();
  });
});
