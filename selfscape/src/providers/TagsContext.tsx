import { createContext } from "react";
import type { TagsContextType } from "../models/signals";

export const TagsContext = createContext<TagsContextType>({} as TagsContextType);
