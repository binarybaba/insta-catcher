import { Dispatch } from 'react'

export type State = {
  isRequesting: boolean
  mediaLink: string | null
  instagramPostLink: string | null
  isMediaVideo: boolean | null,
  colors?: Array<Array<number>>
}

export enum ActionType {
  SET_IS_REQUESTING = 'SET_IS_REQUESTING',
  SET_MEDIA_LINK = 'SET_MEDIA_LINK',
}

export type Action =
  | { type: ActionType.SET_IS_REQUESTING; isRequesting: boolean; instagramPostLink: string }
  | { type: ActionType.SET_MEDIA_LINK; mediaLink: string; isMediaVideo: boolean, colors?: Array<Array<number>> }

export type Context = {
  state: State
  dispatch: Dispatch<any>
}
