"use client";

import { Provider } from "react-redux";
import store, { persistor } from "./main";
import { PersistGate } from "redux-persist/integration/react";

type Props = {
  children: React.ReactNode;
};

export default function StoreProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
