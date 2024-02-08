import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import SearchResultItem from "./searchResultItem";

const mockData = {
  href: "https://images-assets.nasa.gov/image/PIA18906/collection.json",
  data: [
    {
      center: "JPL",
      title: "Sun Shines in High-Energy X-rays",
      nasa_id: "PIA18906",
      date_created: "2014-12-22T18:53:13Z",
      keywords: ["Sun", "NuSTAR"],
      media_type: "image",
      description_508:
        "X-rays stream off the sun in this first picture of the sun, overlaid on a picture taken by NASA Solar Dynamics Observatory SDO, taken by NASA NuSTAR. The field of view covers the west limb of the sun.",
      secondary_creator: "NASA/JPL-Caltech/GSFC",
      description:
        "X-rays stream off the sun in this first picture of the sun, overlaid on a picture taken by NASA Solar Dynamics Observatory SDO, taken by NASA NuSTAR. The field of view covers the west limb of the sun.",
    },
  ],
  links: [
    {
      href: "https://images-assets.nasa.gov/image/PIA18906/PIA18906~thumb.jpg",
      rel: "preview",
      render: "image",
    },
  ],
};
describe("SearchResultItem component", () => {
  it("renders correctly", () => {
    render(
      <Router>
        <SearchResultItem item={mockData} />
      </Router>
    );

    expect(
      screen.getByText("Sun Shines in High-Energy X-rays")
    ).toBeInTheDocument();
  });

  it("navigates on click", () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <SearchResultItem item={mockData} />
      </Router>
    );
    const link = container.querySelector(".MuiCardActionArea-root");
    userEvent.click(link);
  });
});
