/*
 * This codebase was taken from instagram-save and then modified
 * */

import cheerio from 'cheerio'
import request from 'request-promise'

export const parsePage = (url: string) =>
  new Promise((resolve, reject) => {
    request
      .get({
        uri: url,
        transform: body => cheerio.load(body),
      })
      .then(
        $ => {
          const canonicalUrl = $('link[rel="canonical"]').attr('href')

          if (!canonicalUrl) {
            return reject({
              message: `Invalid media ID`,
              url,
            })
          }

          const isVideo = $('meta[name="medium"]').attr('content') === 'video'
          const mimeType = isVideo ? $('meta[property="og:video:type"]').attr('content') : 'image/jpeg'
          const partsOfCanonicalurl = canonicalUrl.split('/')
          const indexOfP = partsOfCanonicalurl.indexOf('p')
          const mediaId = partsOfCanonicalurl[indexOfP + 1]
          const filename = ''
          const downloadUrl = isVideo
            ? $('meta[property="og:video"]').attr('content')
            : $('meta[property="og:image"]').attr('content')

          return resolve({
            canonicalUrl,
            isVideo,
            mimeType,
            mediaId,
            filename,
            downloadUrl,
          })
        },
        err => {
          return reject({
            message: `Failed to request resource`,
            url,
            error: err,
          })
        },
      )
  })
