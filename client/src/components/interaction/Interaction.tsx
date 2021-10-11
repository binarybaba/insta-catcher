import { useContext, useEffect, useState, useRef, FormEvent } from 'react'
import AppContext from 'src/state/app/context'
import { fetchScrapeInstagramPost } from 'src/api/app'
import { ActionType } from 'src/state/app/types'
import CircleNotchSolid from 'src/assets/circle-notch-solid.svg'
import { SForm, SInput, SButton } from './Styled'

export const Interaction = () => {
  const { dispatch, state } = useContext(AppContext)
  const { isRequesting } = state
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
        let { mediaId, isVideo, transloadedLink, colors } = await response.json()

        dispatch({
          type: ActionType.SET_MEDIA_LINK,
          isMediaVideo: isVideo,
          mediaLink: transloadedLink,
          colors
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
    <SForm onSubmit={handleSubmit}>
      <SInput isVisible={!isRequesting} ref={inputRef} type='text' placeholder='Enter instagram link' />
      <SButton isLoading={isRequesting} type='submit'>
        <span>Go!</span>
        <img src={CircleNotchSolid} alt='' />
      </SButton>
    </SForm>
  )
}

export default Interaction
