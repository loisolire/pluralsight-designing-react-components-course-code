import { useState } from 'react';

export const useSpeakerFilter = (startingShowSessions) => {
    const [showSessions, setShowSessions] = useState(startingShowSessions);

    return {
        showSessions,
        setShowSessions
    }
}
