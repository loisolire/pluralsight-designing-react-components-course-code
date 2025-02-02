import React, { useState } from 'react';
import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';
import { SpeakerFilterProvider } from '../contexts/SpeakerFilterContext';

const Speakers = () => {
    return (
        <SpeakerFilterProvider startingShowSession={true} startingEventYear="2019">
            <SpeakersToolbar />
            <SpeakersList />
        </SpeakerFilterProvider>
    );
}

export default Speakers;
