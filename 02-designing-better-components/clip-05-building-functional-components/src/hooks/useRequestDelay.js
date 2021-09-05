import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  SUCCESS: "success",
  FAILURE: "failure",
  LOADING: "loading"
}

export const useRequestDelay = (delayInMs, initialData = []) => {

  const [data, setData] = useState(initialData);
  const [requestStatus, setRequeststatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayResponse() {
      try {
        await delay(delayInMs);
        setData(data);
        setRequeststatus(REQUEST_STATUS.SUCCESS);
      } catch (e) {
        setRequeststatus(REQUEST_STATUS.FAILURE);
        setError(`Message error : ${e}`);
      }
    }
    delayResponse();
  }, []);

  const updateRecord = (updatedRecord, doneCallback) => {
    const initialRecords = [...data];
    const newRecords = data.map(record => record.id === updatedRecord.id ? updatedRecord : record);

    async function reqWithDelay() {
      try {
        setData(newRecords);
        await delay(delayInMs);
        if (doneCallback) {
          doneCallback();
        }
      } catch (e) {
        setData(initialRecords);
        console.error(`Throw new error while loading !!` + e)
      }
    }

    reqWithDelay();
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord,
  };
}
