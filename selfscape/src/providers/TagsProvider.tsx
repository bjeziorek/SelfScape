import { useState } from "react";
import { TagsContext } from "./TagsContext";

export function TagsProvider({ children }) {
    const [tags, setTags] = useState<string[]>(['a','b']);

  return (
    <TagsContext.Provider value={{ tags, setTags }}>
      {children}
    </TagsContext.Provider>
  );
}
