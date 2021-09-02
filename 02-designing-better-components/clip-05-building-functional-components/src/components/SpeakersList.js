import { useState, useEffect } from 'react';
import Speaker from './Speaker';
import { data } from '../../SpeakerData';
import ReactPlaceHolder from 'react-placeholder';

function SpeakersList({ showSessions }) {
    const [speakerData, setSpeakerData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayResponse() {
            try {
                await delay(500);
                setSpeakerData(data);
            } catch (e) {
                setHasErrored(true);
                setError(e);
            } finally {
                setIsLoading(false);
            }
        }
        delayResponse();
    }, [])

    const onFavoriteToggle = (id) => {
        setSpeakerData(speakerData.map(speaker => {
            return speaker.id === id ? { ...speaker, favorite: !speaker.favorite } : speaker;
        }))
    }

    if (hasErrored) {
        return (
            <div className="text-danger" style={{ textAlign: 'center' }}>
                ERROR <b>Loading data {error}</b>
            </div>
        )
    }

    return (
        <div className="container speakers-list">
            <ReactPlaceHolder
                type="media"
                rows={15}
                className="speaker-list-placeholder"
                ready={!isLoading}
                style={{ marginTop: '50px' }}
            >
                <div className="row">
                    {speakerData.map(function (speaker) {
                        return (
                            <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} onFavoriteToggle={() => onFavoriteToggle(speaker.id)} />
                        );
                    })}
                </div>
            </ReactPlaceHolder>
        </div>
    );
}

export default SpeakersList;
