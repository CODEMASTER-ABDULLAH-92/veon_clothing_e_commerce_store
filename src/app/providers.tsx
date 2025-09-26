"use client";

import { Provider } from "react-redux";
import { makeStore } from "../app/lib/store";

const store = makeStore(); // ✅ Create a single store instance

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}