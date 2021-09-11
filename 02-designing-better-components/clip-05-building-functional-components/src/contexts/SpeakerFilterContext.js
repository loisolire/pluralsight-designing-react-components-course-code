import React, { createContext } from "react";
import { useSpeakerFilter } from "../hooks/useSpeakerFilter";

export const SpeakerFilterContext = createContext();

export const SpeakerFilterProvider = ({ startingShowSession, startingEventYear, children }) => {
    const {
        showSessions,
        setShowSessions,
        searchQuery,
        setSearchQuery,
        eventYear,
        setEventYear,
        EVENT_YEARS
    } = useSpeakerFilter(startingShowSession, startingEventYear);

    return (
        <SpeakerFilterContext.Provider value={{ showSessions, setShowSessions, searchQuery, setSearchQuery, eventYear, setEventYear, eventYears: EVENT_YEARS }} >
            {children}
        </SpeakerFilterContext.Provider>
    )

}
