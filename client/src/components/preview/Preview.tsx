import { useContext } from 'react'
import AppContext from 'src/state/app/context'
import { SThumbnail, SImage, SLogo, SWrapper, SColorPalette, SColor } from './Styled'
import KiveLogo from 'src/assets/kive_logo.1050d7e5.svg'

export const Preview = () => {
  const { state } = useContext(AppContext)
  const { mediaLink, isMediaVideo, instagramPostLink, isRequesting, colors } = state
  return (
    <SWrapper>
        <SThumbnail isRequesting={isRequesting}>
            <SImage isVisible={!!mediaLink && !isRequesting} src={mediaLink || ''} />
            <SLogo isVisible={isRequesting}>
                <img src={KiveLogo} alt='' />
                <div className='text'>capturing {instagramPostLink}</div>
            </SLogo>
        </SThumbnail>
        <SColorPalette isVisible={!isRequesting}>
            {colors && colors.map((color) => {
                const [r,g,b] = color;
                // @ts-ignore
                return <SColor r={r} g={g} b={b}/>
            })}
        </SColorPalette>
    </SWrapper>
  )
}

export default Preview
