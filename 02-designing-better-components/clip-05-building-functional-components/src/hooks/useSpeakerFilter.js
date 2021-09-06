import { useState } from 'react';

export const useSpeakeFilter = (startingShowSessions) => {
    const [showSessions, setShowSessions] = useState(startingShowSessions);

    return {
        showSessions,
        setShowSessions
    }
}
