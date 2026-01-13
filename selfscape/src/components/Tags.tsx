import { useContext, useState } from "react";
import { TagsContext } from "../providers/TagsContext";
import type { ActivationMode } from "../models/signals";

export default function Tags() {

    const { tags, setTags } = useContext(TagsContext);
  const [selectedOption, setSelectedOption] = useState<ActivationMode>("AT_LEAST_ONE_TAG");
    const { sendSignal } = useContext(TagsContext);

    const [selectedTags, setSelectedTags] = useState<string[]>(tags);


    const clickTag = (tag:string) => {
        console.log('hsajdgvajdva', tag)
        sendSignal({ tagName: tag , signalType:selectedTags.includes(tag) ? "ACTIVATED":"DISACTIVATED", mode:selectedOption});
        setSelectedTags(selectedTags => selectedTags.includes(tag) ? selectedTags.filter(t => t !== tag) : [...selectedTags, tag]);
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
 <div>
      <h3>Wybierz opcję:</h3>

      <label>
        <input type="radio" value="AT_LEAST_ONE_TAG" checked={selectedOption === "AT_LEAST_ONE_TAG"} onChange={(e) => setSelectedOption(e.target.value)}
        />
        AT_LEAST_ONE_TAG
      </label>

      <label>
        <input type="radio" value="ALL_TAGS" checked={selectedOption === "ALL_TAGS"} onChange={(e) => setSelectedOption(e.target.value)}
        />
        ALL_TAGS
      </label>

      <p>Wybrano: {selectedOption}</p>
    </div>
        </div>
    )
}