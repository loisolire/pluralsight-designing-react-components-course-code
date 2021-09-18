import React from 'react';

const SpeakerAdd = ({ eventYear, insertRecord }) => {
    return (
        <a href="#" className="addSes">
            <i onClick={
                (e) => {
                    e.preventDefault();
                    const firstLast = window.prompt('Enter first and last name');
                    const firstLastArray = firstLast.split(' ');
                    insertRecord({
                        id: '9999999',
                        first: firstLastArray[0],
                        last: firstLastArray[1],
                        bio: `Bio not entered here`,
                        sessions: [{
                            id: '88888',
                            title: `New session extra for ${firstLastArray[0]} !!`,
                            room: {
                                name: `Main bal room`
                            },
                            eventYear: eventYear
                        }]
                    })

                }
            }></i>
        </a>
    );
}

export default SpeakerAdd;
