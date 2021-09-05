import React, { useState } from 'react';
import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';
import { useContext } from 'react';
import { ThemeContext } from './Layout';

const Speakers = () => {
    const [showSessions, setShowSessions] = useState(true);

    return (
        <div>
            <SpeakersToolbar showSessions={showSessions} setShowSessions={setShowSessions} />
            <SpeakersList showSessions={showSessions} />
        </div>
    );
}

export default Speakers;
