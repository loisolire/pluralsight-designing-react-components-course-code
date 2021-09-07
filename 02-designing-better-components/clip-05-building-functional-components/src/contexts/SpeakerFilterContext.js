import React, { createContext } from "react";
import { useSpeakerFilter } from "../hooks/useSpeakerFilter";

export const SpeakerFilterContext = createContext();

export const SpeakerFilterProvider = ({ startingShowSession, children }) => {

    const { showSessions, setShowSessions } = useSpeakerFilter(startingShowSession);

    return (
        <SpeakerFilterContext.Provider value={{ showSessions, setShowSessions }} >
            {children}
        </SpeakerFilterContext.Provider>
    )

}
