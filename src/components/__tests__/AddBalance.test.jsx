import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AddBalance } from "../AddBalance";

describe("AddBalance", () => {
  test("Should  return page to add new balance", () => {
    render(
        <Router>
          <AddBalance />
        </Router>
    );
  });
});