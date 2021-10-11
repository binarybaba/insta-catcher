import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SForm = styled.form`
  display: flex;
  width: 21.875rem;
  justify-content: space-around;
`

export const SInput = styled.input<{ isVisible: boolean }>`
  background-color: transparent;
  flex-grow: 1;
  color: white;
  text-align: center;
  border: 2px solid #c7c5c5ff;
  border-radius: 1rem;
  padding: 0.4rem 1rem;
  :active,
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #c7c5c5;
  }
  transition: all 0.2s ease-in-out;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transform: scale(${props => (props.isVisible ? 1 : 0.9)});
`

export const SButton = styled.button<{ isLoading: boolean }>`
  margin-left: 2rem;
  background-color: ${props => (props.isLoading ? 'transparent' : 'rgb(89, 48, 229)')};
  color: white;
  justify-content: center;
  font-size: 1rem;
  cursor: ${props => (props.isLoading ? 'auto' : 'pointer')};
  border-radius: 2rem;
  border: none;
  outline: none;
  padding: 0 2rem;
  transition: all 0.2s ease-in-out;
  transform: ${props => (props.isLoading ? `translateY(-600%)` : `translateY(0)`)};

  span {
    transition: all 0s ease-in-out;
    opacity: ${props => (!props.isLoading ? 1 : 0)};
    visibility: ${props => (!props.isLoading ? 'visible' : 'hidden')};
    transform: scale(${props => (!props.isLoading ? 1 : 0)});
    ${props =>
      props.isLoading &&
      `
        height: 0;
        padding:0;
    `}
  }

  img {
    opacity: ${props => (props.isLoading ? 1 : 0)};
    visibility: ${props => (props.isLoading ? 'visible' : 'hidden')};
    transform: scale(${props => (props.isLoading ? 1 : 0)});
    width: ${props => (props.isLoading ? '2rem' : 0)};
    height: ${props => (props.isLoading ? '2rem' : 0)};
    animation: ${rotate360} 0.4s linear infinite;
  }
`
