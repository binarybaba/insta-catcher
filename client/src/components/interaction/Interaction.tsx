import { useContext, useEffect, useState, useRef, FormEvent } from 'react'
import AppContext from 'src/state/app/context'
import { fetchScrapeInstagramPost } from 'src/api/app'
import { ActionType } from 'src/state/app/types'

export const Interaction = () => {
  const { dispatch } = useContext(AppContext)
  const [instagramPostLink, setInstagramPostLink] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (inputRef.current) {
      setInstagramPostLink(inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  useEffect(() => {
    const scrape = async () => {
      dispatch({
        type: ActionType.SET_IS_REQUESTING,
        isRequesting: true,
        instagramPostLink,
      })
      try {
        // @ts-ignore
        let response = await fetchScrapeInstagramPost(instagramPostLink)
        let { mediaId, isVideo, transloadedLink } = await response.json()

        dispatch({
          type: ActionType.SET_MEDIA_LINK,
          isMediaVideo: isVideo,
          mediaLink: transloadedLink,
        })
      } catch (err) {
        dispatch({
          type: ActionType.SET_IS_REQUESTING,
          isRequesting: false,
          instagramPostLink,
        })
      }
    }
    if (instagramPostLink.length) {
      scrape()
    }
  }, [instagramPostLink])

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='Enter instagram link' />
      <button type='submit'>Scrape!</button>
    </form>
  )
}

export default Interaction
