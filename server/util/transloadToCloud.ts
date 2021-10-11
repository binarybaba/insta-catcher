import fs from 'fs'
import path from "path";
import { Storage } from "@google-cloud/storage";
import { BUCKET_ID } from "../config";

const storage = new Storage({ keyFilename: 'service_account.json' })
const bucket = storage.bucket(BUCKET_ID)

export const transloadToCloud = async (fileName: string) => {
    const gcloudResponse = await bucket.upload(path.join(__dirname, '/..', fileName), {
        destination: fileName,
    })
    fs.unlinkSync(path.join(__dirname, '/..', fileName))
    return gcloudResponse[1].mediaLink
}