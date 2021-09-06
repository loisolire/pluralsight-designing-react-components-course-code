import React, { useState } from 'react';
import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';

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
