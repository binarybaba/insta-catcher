import express, { Request, Response } from 'express'
// @ts-ignore
import ColorThief from 'colorthief'
import path from 'path'
import { PORT } from './config'
import { RequestType, ResponseSuccessType } from './types'
import { ensureInstaLinkExists } from './middleware/ensureInstaLinkExists'
import { parsePage } from './util/parsePage'
import { saveFile } from './util/downloadFile'

import { transloadToCloud } from './util/transloadToCloud'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post(
  '/_/scrape-instagram-post',
  ensureInstaLinkExists,
  async (req: Request<RequestType>, res: Response<ResponseSuccessType>) => {
    setTimeout(() => {
      res.status(200).send({
        mediaId: 'CUktcVMsB-s',
        isVideo: false,
        transloadedLink:
          'https://storage.googleapis.com/download/storage/v1/b/insat_catch/o/CUX4byhMKio.jpg?generation=1633989450699638&alt=media',
        // @ts-ignore
        colors: [
          [25, 25, 25],
          [230, 234, 231],
          [147, 74, 57],
          [175, 136, 101],
        ],
      })
    }, 1000)

    // const { instagramPostLink } = req.body;
    //
    // const { mediaId, isVideo, downloadUrl } = await parsePage(instagramPostLink);
    // const downloadedFileName = isVideo ? `${mediaId}.mp4` : `${mediaId}.jpg`
    // const savedFile = await saveFile(downloadUrl, path.join(__dirname, downloadedFileName));
    // const colors = !isVideo ? await ColorThief.getPalette(path.join(__dirname, downloadedFileName), 4) : null
    // const transloadedLink = await transloadToCloud(downloadedFileName)
    //
    // res.status(200).send({
    //   mediaId,
    //   isVideo,
    //   transloadedLink,
    //   // @ts-ignore
    //   colors
    // })
  },
)

app.listen(PORT, () => {
  console.log('Listening on', PORT)
})
