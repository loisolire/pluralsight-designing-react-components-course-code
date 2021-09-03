import { useState, useEffect } from "react";
import { data } from '../../SpeakerData';

export const REQUEST_STATUS = {
  SUCCESS: "success",
  FAILURE: "failure",
  LOADING: "loading"
}

export const useRequestSpeakers = (delayInMs) => {

  const [speakerData, setSpeakerData] = useState([]);
  const [requestStatus, setRequeststatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayResponse() {
      try {
        await delay(delayInMs);
        setSpeakerData(data);
        setRequeststatus(REQUEST_STATUS.SUCCESS);
      } catch (e) {
        setRequeststatus(REQUEST_STATUS.FAILURE);
        setError(`Message error : ${e}`);
      } 
    }
    delayResponse();
  }, []);

  const onFavoriteToggle = (id) => {
    setSpeakerData(
      speakerData.map((speaker) => {
        return speaker.id === id
          ? { ...speaker, favorite: !speaker.favorite }
          : speaker;
      })
    );
  };
  return {
    speakerData,
    requestStatus,
    error,
    onFavoriteToggle,
  };
}
