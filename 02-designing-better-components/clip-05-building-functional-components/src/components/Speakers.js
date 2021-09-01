import React, { useState } from 'react';
import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';

const Speakers = ({ theme, setTheme }) => {
    const [showSessions, setShowSessions] = useState(true);

    return (
        <div>
            <SpeakersToolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions} />
            <SpeakersList showSessions={showSessions} />
        </div>
    );
}

export default Speakers;
