import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import { data } from '../../SpeakerData';
import { useRequestDelay, REQUEST_STATUS } from "../hooks/useRequestDelay";
import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { SpeakerProvider } from "../contexts/SpeakerContext";

function SpeakersList() {
  const { data: speakerData, requestStatus, error, updateRecord } =
    useRequestDelay(500, data);
  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger" style={{ textAlign: "center" }}>
        ERROR <b>{error}</b>
      </div>
    );
  }

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder
        type="media"
        rows={15}
        className="speaker-list-placeholder"
        ready={requestStatus !== REQUEST_STATUS.LOADING}
        style={{ marginTop: "50px" }}
      >
        <div className="row">
          {speakerData.filter(dat => {
            return dat.first.toLocaleLowerCase().includes(searchQuery)
              || dat.last.toLocaleLowerCase().includes(searchQuery);
          })
            .filter(dat => (
              dat.sessions.find(session => (
                !eventYear || session.eventYear === eventYear
              ))
            ))
            .map(function (speaker) {
              return (
                <SpeakerProvider speaker={speaker} updateRecord={updateRecord}>
                  <Speaker
                    key={speaker.id}
                  />
                </SpeakerProvider>
              );
            })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default SpeakersList;
