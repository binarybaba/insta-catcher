import { useContext } from 'react'
import AppContext from 'src/state/app/context'
import { SThumbnail, SImage, SLogo } from './Styled'
import KiveLogo from 'src/assets/kive_logo.1050d7e5.svg'

export const Preview = () => {
  const { state } = useContext(AppContext)
  const { mediaLink, isMediaVideo, instagramPostLink, isRequesting } = state
  return (
    <SThumbnail isRequesting={isRequesting}>
      <SImage isVisible={!!mediaLink && !isRequesting} src={mediaLink || ''} />
      <SLogo isVisible={isRequesting}>
        <img src={KiveLogo} alt='' />
        <div className='text'>capturing {instagramPostLink}</div>
      </SLogo>
    </SThumbnail>
  )
}

export default Preview
