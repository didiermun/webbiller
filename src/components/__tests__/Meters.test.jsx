import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Meters } from "../Meters";

describe("MetersList", () => {
  test("should list all meters", () => {
    render(
        <Router>
          <Meters />
        </Router>
    );
  });
});