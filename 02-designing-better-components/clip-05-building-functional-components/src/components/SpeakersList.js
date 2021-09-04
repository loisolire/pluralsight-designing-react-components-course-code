import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import { data } from '../../SpeakerData';
import { useRequestDelay, REQUEST_STATUS } from "../hooks/useRequestDelay";

function SpeakersList({ showSessions }) {
  const { data: speakerData, requestStatus, error, updateRecord } =
    useRequestDelay(500, data);
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
                onFavoriteToggle={(doneCallBack) => updateRecord({ ...speaker, favorite: !speaker.favorite }, doneCallBack)}
              />
            );
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default SpeakersList;
