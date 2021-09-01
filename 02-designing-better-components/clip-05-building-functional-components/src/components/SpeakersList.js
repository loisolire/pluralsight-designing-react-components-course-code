import { useState, useEffect } from 'react';
import Speaker from './Speaker';
import { data } from '../../SpeakerData';

function SpeakersList({ showSessions }) {
    const [speakerData, setSpeakerData] = useState([]);

    const delay = (ms) => new Promise(resolve => setTimeout(() => resolve(data), ms));

    useEffect(() => {
        async function delayResponse() {
            await delay(500);
            setSpeakerData(data);
        }
        delayResponse();
    }, [])

    const onFavoriteToggle = (id) => {
        setSpeakerData(speakerData.map(speaker => {
            return speaker.id === id ? { ...speaker, favorite: !speaker.favorite } : speaker;
        }))
    }

    return (
        <div className="container speakers-list">
            <div className="row">
                {speakerData.map(function (speaker) {
                    return (
                        <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} onFavoriteToggle={() => onFavoriteToggle(speaker.id)} />
                    );
                })}
            </div>
        </div>
    );
}

export default SpeakersList;
