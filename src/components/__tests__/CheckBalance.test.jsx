import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CheckBalance } from "../CheckBalance";

describe("CheckBalance", () => {
  test("Should  return page to check balance", () => {
    render(
        <Router>
          <CheckBalance />
        </Router>
    );
  });
});