import { useCallback, useContext, useState } from "react";
import { TagsContext } from "../providers/TagsContext";

export function BasicNode(props) {
  const onChange = useCallback((evt: { target: { value: any; }; }) => {
    console.log(evt.target.value);
  }, []);

  const { tags, setTags } = useContext(TagsContext);
  const [inputValue, setInputValue] = useState("");

  const addTag=(inputValue:string)=>{
     setTags((tags:string[]) => [...tags, inputValue])
     console.log(tags)
  }

  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="card-actions justify-end">
          <button 
          className="btn" 
          onClick={() =>addTag(inputValue)}>add tag</button>
        </div>
      </div>
    </div>
  );
}