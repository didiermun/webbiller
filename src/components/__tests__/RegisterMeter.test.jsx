import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { RegisterMeter } from "../RegisterMeter";

describe("RegisterMeter", () => {
  test("should register a new meter", () => {
    render(
        <Router>
          <RegisterMeter />
        </Router>
    );
  });
});