import { useState } from 'react';

export const useSpeakerFilter = (startingShowSessions, startingEventYear) => {
    const [showSessions, setShowSessions] = useState(startingShowSessions);
    const [searchQuery, setSearchQuery] = useState("");
    const [eventYear, setEventYear] = useState(startingEventYear);
    const EVENT_YEARS = [
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019"
    ]

    return {
        showSessions,
        setShowSessions,
        searchQuery,
        setSearchQuery,
        eventYear,
        setEventYear,
        EVENT_YEARS
    }
}
