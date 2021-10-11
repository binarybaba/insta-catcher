import request from 'request-promise'
import fs, { PathLike } from 'fs'

export const saveFile = async (downloadUrl: string, path: PathLike) =>
  new Promise((resolve, reject) => {
    request.head(downloadUrl, error => {
      if (error) {
        return reject(error)
      }

      request
        .get(downloadUrl)
        .pipe(fs.createWriteStream(path))
        .on('close', () => {
          resolve(path);
        })
    })
  })
