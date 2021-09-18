import React, { useContext } from 'react';
import { SpeakerContext } from '../contexts/SpeakerContext';

const SpeakerDelete = () => {
    const { speaker, deleteRecord } = useContext(SpeakerContext);
    return (
        <a href="#" className="remSes">
            <i onClick={(e) => {
                e.preventDefault();
                if (window.confirm(`Do you really want to delete this record (${speaker.first + ' ' + speaker.last}) ?`)) {
                    deleteRecord(speaker);
                }
            }}></i>
        </a >
    );
}

export default SpeakerDelete;
