import { Body } from "./components";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}
