import { Action, ActionType, State } from './types'

export const INITIAL_STATE: State = {
  isRequesting: false,
  instagramPostLink: null,
  mediaLink: null,
  isMediaVideo: false,
}

export const reducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.SET_IS_REQUESTING: {
      const { isRequesting, instagramPostLink } = action
      return {
        ...state,
        isRequesting,
        instagramPostLink,
      }
    }
    case ActionType.SET_MEDIA_LINK: {
      const { isMediaVideo, mediaLink, colors } = action
      return {
        ...state,
        isMediaVideo,
        mediaLink,
        colors,
        isRequesting: false,
      }
    }
    default:
      return state
  }
}
