import { data } from '../../../SpeakerData';
import path from 'path';

import { promisify } from 'util';
import fs from 'fs';

const readFile = promisify(fs.readFile);

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const jsonFile = path.resolve('./', 'db.json');

export default async function handler(req, res) {
    try {
        const readFileData = await readFile(jsonFile);
        await delay(1000);
        const speakers = JSON.parse(readFileData).speakers;

        if (speakers) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(speakers, null, 2));
            console.log(`Get api/peakers ok !`);
        }
    } catch (e) {
        console.error(`Get api/speakers ko`, e);
        res.status(404).send('response not found !')
    }
}