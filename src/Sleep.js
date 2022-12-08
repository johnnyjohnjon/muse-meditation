import "./App.css";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./containers/SleepTracker";
import SleepTracker from "./containers/SleepTracker";

function Sleep() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SleepTracker />
      </PersistGate>
    </Provider>
  );
}

export default Sleep;
