import path from "path";

import { promisify } from "util";
import fs from "fs";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const jsonFile = path.resolve("./", "db.json");

export default async function handler(req, res) {
  const method = req?.method;
  const id = parseInt(req?.query.id);
  const bodyRecord = req?.body;

  switch (method) {
    case "PUT":
      putHandler();
      break;
    case "POST":
      postHandler();
      break;
    case "DELETE":
      deleteHandler();
      break;
    default:
      res.status(500).send("No method indicated in request !");
  }

  function putHandler() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        res.status(404).send("Request failed with code 404 ");
      } else {
        const updatedSpeakers = speakers.map((rec) =>
          rec.id == id ? bodyRecord : rec
        );
        writeFile(jsonFile, JSON.stringify(updatedSpeakers));
        res.setHeader({ "Content-Type": "application/json" });
        res
          .status(200)
          .send(JSON.stringify({ speakers: updatedSpeakers }, null, 2));
        console.log(`PUT api/peakers ok !`);
      }
    } catch (e) {
      res.status(500).send(`Request PUT /api/${id} failed`, e);
      console.error(`Get api/speakers ko`, e);
    }
  }

  function postHandler() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        res.status(404).send("Request failed with code 404 ");
      } else {
        const newId = speakers.reduce((acc, cur) => (parseInt(cur.id) > acc ? parseInt(cur.id) : acc), 0) + 1;
        const newSpeaker = {...speaker, id: newId.toString() };
        const newSpeakers = [newSpeaker, ...speakers];
        writeFile(jsonFile, JSON.stringify(newSpeakers));
        res.setHeader({ "Content-Type": "application/json" });
        res
          .status(200)
          .send(JSON.stringify({ speaker: newSpeaker }, null, 2));
        console.log(`POST api/peakers ok !`);
      }
    } catch (e) {
      res.status(500).send(`Request POST /api/${id} failed`, e);
      console.error(`Post api/speakers ko`, e);
    }
  }

  function deleteHandler() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        res.status(404).send("Request failed with code 404 ");
      } else {
        const newSpeakers = speakers.filter(speaker=>speaker.id != id);
        writeFile(jsonFile, JSON.stringify(newSpeakers));
        res.setHeader({ "Content-Type": "application/json" });
        res
          .status(200)
          .send(JSON.stringify({ speaker: speakers.find(rec=>rec.id == id) }, null, 2));
        console.log(`POST api/peakers ok !`);
      }
    } catch (e) {
      res.status(500).send(`Request POST /api/${id} failed`, e);
      console.error(`Post api/speakers ko`, e);
    }
  }
}
