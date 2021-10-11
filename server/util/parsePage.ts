/*
 * This codebase was taken from instagram-save and then modified
 * */

type ResolvedType = {
    canonicalUrl: string,
    isVideo: boolean,
    mimeType: string,
    mediaId: string,
    filename: string,
    downloadUrl: string,
}


import cheerio from 'cheerio'
import request from 'request-promise'

type ResolveType = {
    canonicalUrl: string,
    mimeType: string,
    filename: string,
    isVideo: boolean,
    mediaId: string,
    downloadUrl: string,
}

type RejectType = {
    message: string,
    url: string,
    err: any
}

export const parsePage = async (url: string): Promise<ResolveType> =>
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
