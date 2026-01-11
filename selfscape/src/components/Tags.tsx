import { useContext } from "react";
import { TagsContext } from "../providers/TagsContext";

export default function Tags() {

    const { tags, setTags } = useContext(TagsContext);

    const clickTag=x=>{
        console.log('hsajdgvajdva', x)
    }

    return (
        <div
            style={{
                background: 'pink'
            }}
        >
             {tags.map((tag, index) => (
        <button 
        className="badge badge-primary" 
        key={index}
        onClick={() => clickTag(tag)}
        >{tag}</button>
      ))}
           
        </div>
    )
}