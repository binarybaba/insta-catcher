import styled from 'styled-components'

export const SThumbnail = styled.div<{ isRequesting?: boolean }>`
  width: 21.875rem;
  height: 32rem;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  position: relative;
`

export const SImage = styled.img<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transform: ${props => (props.isVisible ? `translate(0,0)` : `translate(0, 0.875rem)`)}
  transform: scale(${props => (props.isVisible ? 1 : 0)});
`

export const SLogo = styled.div<{ isVisible: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  img {
    width: 4rem;
    height: 4rem;
  }
  .text {
    padding-top: 1rem;
    color: white;
    font-family: sans-serif;
    font-size: 1rem;
  }
  transition: all 0.2s ease-in-out;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transform: scale(${props => (props.isVisible ? 1 : 0)});
  transform: translateX(${props => (props.isVisible ? '0%' : '-10%')});
`
