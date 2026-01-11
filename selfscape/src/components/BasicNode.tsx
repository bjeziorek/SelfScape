import { useCallback, useContext, useEffect, useState } from "react";
import { TagsContext } from "../providers/TagsContext";

export function BasicNode(props) {

  const { signal } = useContext(TagsContext); useEffect(() => { if (!signal) return; 
    // warunek: np. tylko komponenty z danym tagiem 
  //if (props.tag === signal.payload.tag) { 
    // wykonaj akcję 
    console.log("Odebrałem sygnał:", signal.payload); 
    // TODO: na sygnał ma sprawdzić czy jego tagi pasują
    // a jak pasują to ukryć/pokazać node
  //}
   }, [signal]);

  const onChange = useCallback((evt: { target: { value: any; }; }) => {
    console.log(evt.target.value);
  }, []);

  const { tags, setTags } = useContext(TagsContext);
  const [inputValue, setInputValue] = useState("");

  // TODO przeniesc addtag do menu
  const addTag=(inputValue:string)=>{
     setTags((tags:string[]) => {
      const updated = [...tags, inputValue]
      console.log(updated)
      return updated    
  })
     console.log(tags)
  }

// TODO dodac liste tagow do wyboru 

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