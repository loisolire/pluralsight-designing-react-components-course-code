import React, { useState } from 'react';
import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';
import { useContext } from 'react';
import { ThemeContext } from './App';

const Speakers = () => {
    const [showSessions, setShowSessions] = useState(true);
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <SpeakersToolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions} />
            <SpeakersList showSessions={showSessions} />
        </div>
    );
}

export default Speakers;
