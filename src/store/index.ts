import { createContext } from "react";

import { todos } from "./todos";

export const StoreCtx = createContext(todos);
