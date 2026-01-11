import { useState } from "react";
import { TagsContext } from "./TagsContext";

export function TagsProvider({ children }) {
    const [tags, setTags] = useState<string[]>(['a','b']);

const [signal, setSignal] = useState(null); 
const sendSignal = (payload) => { 
    setSignal({ id: crypto.randomUUID(), payload }); 
};

  return (
    <TagsContext.Provider value={{ tags, setTags, signal, sendSignal }}>
      {children}
    </TagsContext.Provider>
  );
}
