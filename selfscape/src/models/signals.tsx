type TagSignalType = 
"ACTIVATED" | 
"DISACTIVATED" |
"ADDED" |
"REMOVED"


export type ActivationMode = "AT_LEAST_ONE_TAG" | "ALL_TAGS"

export interface TagSignalPayload {
    signalType: TagSignalType,
    tagName: string,
    mode?:ActivationMode
}

export interface TagSignal {
    id: `${string}-${string}-${string}-${string}-${string}`,
    payload: TagSignalPayload
}

export interface TagsContextType {
    tags: string[]; 
    setTags: React.Dispatch<React.SetStateAction<string[]>>; signal: TagSignal | null; 
    sendSignal: (payload: TagSignalPayload) => void; 
}