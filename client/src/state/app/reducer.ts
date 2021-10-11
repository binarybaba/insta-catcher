import { Action, ActionType, State } from './types'

export const INITIAL_STATE: State = {
  isRequesting: false,
  instagramPostLink: null,
  mediaLink: null,
  isMediaVideo: false,
  colors: [
      [13,13,13],
      [13,13,13],
      [13,13,13],
      [13,13,13],
  ]
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
        colors: colors || state.colors, // if video, go back to black.. well hello Amy Winehouse
        isRequesting: false,
      }
    }
    default:
      return state
  }
}
