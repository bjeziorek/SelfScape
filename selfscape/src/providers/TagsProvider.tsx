import { useState, type ReactNode } from "react";
import { TagsContext } from "./TagsContext";
import type { TagSignal, TagSignalPayload } from "../models/signals";

export function TagsProvider({ children }: { children: ReactNode }) {
    const [tags, setTags] = useState<string[]>(['a','b']);

const [signal, setSignal] = useState<TagSignal | null>(null); 
const sendSignal = (payload : TagSignalPayload) => { 
    setSignal({ id: crypto.randomUUID(), payload }); 
};

  return (
    <TagsContext.Provider value={{ tags, setTags, signal, sendSignal }}>
      {children}
    </TagsContext.Provider>
  );
}
