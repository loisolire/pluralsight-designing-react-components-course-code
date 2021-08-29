import React from 'react';
import { data } from '../../SpeakerData';
import SpeakersList from './SpeakersList';
import Header from './Header';
import SpeakersToolbar from './SpeakersToolbar';

const Speakers = () => {
    return (
        <>
            <Header />
            <SpeakersToolbar />
            <SpeakersList data={data} />
        </>
    );
}

export default Speakers;
