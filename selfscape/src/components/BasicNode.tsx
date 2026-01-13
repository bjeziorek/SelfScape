import { useCallback, useContext, useEffect, useState } from "react";
import { TagsContext } from "../providers/TagsContext";

interface CardTag {
  tag: string,
  isActive: boolean,
  id: `${string}-${string}-${string}-${string}-${string}`;
}

export function BasicNode(props) {
    const { tags, setTags } = useContext(TagsContext);
    const [ isVisible, setIsVisible ] = useState<boolean>(true); // docelowo sobie wczyta stan 
  const [selectedTags, setSelectedTags] = useState(tags.map(item => { return { tag: item, isActive: false, id: crypto.randomUUID() } }));
  const { signal, sendSignal } = useContext(TagsContext); 

  
  useEffect(() => {
    if (!signal) return;
    // warunek: np. tylko komponenty z danym tagiem 
    //if (props.tag === signal.payload.tag) { 
    // wykonaj akcję 
    console.log("Odebrałem sygnał:", signal.payload);

    if(signal.payload.signalType==="ACTIVATED"){
      if(signal.payload.mode==="AT_LEAST_ONE_TAG"){
        const item:CardTag[]=selectedTags.filter(item=>item.tag===signal.payload.tagName)
        if(item.length && item[0].isActive){
          //jeśli istnieje choć jeden tag to pokaż okno
          setIsVisible(true)
       console.log('vis')
        } else{
          //uktyj okno
       //   setIsVisible(false)
        }
      }
       if(signal.payload.mode==="ALL_TAGS"){
        // todo
      }
    }

      if(signal.payload.signalType==="DISACTIVATED"){
      if(signal.payload.mode==="AT_LEAST_ONE_TAG"){
         const item:CardTag[]=selectedTags.filter(item=>item.tag===signal.payload.tagName)
        if(item.length && item[0].isActive){
          //jeśli istnieje choć jeden tag to pokaż okno
          setIsVisible(false)
       console.log('inv')
        } else{
          //uktyj okno
       //   setIsVisible(false)
        }
      }
       if(signal.payload.mode==="ALL_TAGS"){
        // todo
      }
    }

    if(signal.payload.signalType==="ADDED"){
      setSelectedTags([...selectedTags,{
        id:crypto.randomUUID(),
        tag:signal.payload.tagName,
        isActive:false
      }])
    }
    // TODO: na sygnał ma sprawdzić czy jego tagi pasują
    // a jak pasują to ukryć/pokazać node
    //}
  }, [signal]);

  const onChange = useCallback((evt: { target: { value: any; }; }) => {
    console.log(evt.target.value);
  }, []);


  const [inputValue, setInputValue] = useState("");

  // TODO przeniesc addtag do menu
  const addTag = (inputValue: string) => {
    setTags((tags: string[]) => {
      const updated = [...tags, inputValue]
      console.log(updated)
      sendSignal({
        signalType: "ADDED",
        tagName: inputValue
      })
      return updated
    })
    console.log(tags)
  }




  const toggleTag = (tag) => {
    const updated = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(updated);
    // onTagsChange(cardData.id, updated); // wysyłasz do rodzica
  };

  // TODO dodac liste tagow do wyboru 
  // useEffect(() => {
  //   setSelectedTags((prev) => prev.filter((t) => tags.includes(t)));
  // }, [tags]);

  return (
    <div className={isVisible ? "" : "hidden"}>
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="card-actions justify-start">
          <button
            className="btn"
            onClick={() => addTag(inputValue)}>add tag
          </button>
        </div>
        {/* <div className="dropdown"> */}
          {/* <div tabIndex={0} role="button" className="btn m-1">Choose tags</div>
          <div
            tabIndex={0}
            >
            <div className="card-body">

              {tags.map((item, i) => (
                <div className="flex"><label key={i} className="label ">
                  <input type="checkbox" className="checkbox checkbox border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800" />
                  {item}
                </label><button className="btn btn-active btn-error size-[1em]">X</button></div>
              ))}

              {/* <label className="label">
                <input type="checkbox" defaultChecked className="checkbox" />
                Remember me
              </label>
               <label className="label">
                <input type="checkbox" defaultChecked className="checkbox" />
                Remember me
              </label> */}

            {/* </div> */}
          {/* </div> */} 
        {/* </div> */}
        <p>selected tags:</p>
        {selectedTags.map((tag, i) => (
          <label key={i} className="label">
            <input
              type="checkbox"
              checked={tag.isActive}
              onChange={(e) => setSelectedTags(selectedTags.map(item => {
                //  e.target.checked
                console.log('e', e)
                return {
                  id:item.id,
                  tag: item.tag,
                  isActive: item.id===tag.id?!item.isActive:item.isActive
                }
              }))
          }
              className="checkbox checkbox border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800" />
            {tag.tag}
            <span>{tag.tag} - {tag.isActive ? "T" : "F"}</span><button className="btn btn-active btn-error size-[1em]">X</button>
          </label>
        ))}
        
      </div>
     
    </div>
    </div>
  );
}