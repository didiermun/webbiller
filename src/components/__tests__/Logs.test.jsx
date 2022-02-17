import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Logs} from '../Logs';

describe("Logs", () => {
  test("should list all transactions made", () => {
    render(
        <Router>
          <Logs />
        </Router>
    );
  });
});