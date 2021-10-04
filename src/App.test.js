import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";

test("renders my name", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Sean Dougherty/i);
  expect(linkElement).toBeInTheDocument();
});
