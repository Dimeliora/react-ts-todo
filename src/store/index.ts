import { createContext } from "react";

import { Todos } from "./todos";

export const store = new Todos();

export const StoreCtx = createContext(store);
