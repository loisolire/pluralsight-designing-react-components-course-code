import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import {useRequestSpeakers, REQUEST_STATUS} from "../hooks/useRequestSpeakers";

function SpeakersList({ showSessions }) {
  const { speakerData, requestStatus, error, onFavoriteToggle } =
    useRequestSpeakers(2000);

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
          {speakerData.map(function (speaker) {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={() => onFavoriteToggle(speaker.id)}
              />
            );
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default SpeakersList;
