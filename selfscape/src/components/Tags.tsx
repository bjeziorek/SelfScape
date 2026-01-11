import { useContext, useState } from "react";
import { TagsContext } from "../providers/TagsContext";

export default function Tags() {

    const { tags, setTags } = useContext(TagsContext);

    const { sendSignal } = useContext(TagsContext); 
    
    const [selectedTags, setSelectedTags] = useState<string[]>(tags);


    const clickTag=tag=>{
        console.log('hsajdgvajdva', tag)
        sendSignal({ tag: "urgent" });
        setSelectedTags(selectedTags => selectedTags.includes(tag) ? selectedTags.filter(t => t !== tag) : [...selectedTags, tag] );
    }

    return (
        <div
            style={{
                background: 'pink'
            }}
        >
             {tags.map((tag, index) => (
        <button 
        className={`badge badge-primary ${selectedTags.includes(tag) ? "line-through" : ""}`}
       
        key={index}
        onClick={() => clickTag(tag)}
        >{tag}</button>
      ))}
           
        </div>
    )
}