import express, { Request, Response } from 'express'
import path from 'path'
import { PORT } from './config'
import { RequestType, ResponseSuccessType } from './types'
import { ensureInstaLinkExists } from './middleware/ensureInstaLinkExists'
import { parsePage } from "./util/parsePage";
import { saveFile } from './util/downloadFile'

import { transloadToCloud } from "./util/transloadToCloud";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/scrape-instagram-post', ensureInstaLinkExists, async (req: Request<RequestType>, res: Response<ResponseSuccessType>) => {
  const { instagramPostLink } = req.body;

  const { mediaId, isVideo, downloadUrl } = await parsePage(instagramPostLink);
  const downloadedFileName = isVideo ? `${mediaId}.mp4` : `${mediaId}.jpg`
  const savedFile = await saveFile(downloadUrl, path.join(__dirname, downloadedFileName));
  const transloadedLink = await transloadToCloud(downloadedFileName)

  res.status(200).send({
    mediaId,
    isVideo,
    transloadedLink
  })
})

app.listen(PORT, () => {
  console.log('Listening on', PORT)
})
