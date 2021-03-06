import { history } from '../../utils/routerUtils'
import {
  SHOW_NOTIFICATION,
  CLEAR_NOTIFICATION,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  GOTO,
  SET_ON_EPISODE_PAGE,
  CLEAR_ON_EPISODE_PAGE
} from '../../constants/actionTypes/commonActionTypes.js'
import { getIsSidebarOpen } from '../selectors/commonSelectors'

export const goto = path => dispatch => {
  history.push(path)
  dispatch({ type: GOTO, path })
}

// for authAction
export function showNotification(text) {
  return { type: SHOW_NOTIFICATION, text }
}

export function clearNotification() {
  return { type: CLEAR_NOTIFICATION }
}

export const toggleDrawer = () => (dispatch, getState) => {
  const isDrawerOpen = getIsSidebarOpen(getState())
  if (!isDrawerOpen) {
    dispatch({ type: OPEN_DRAWER })
  } else {
    dispatch({ type: CLOSE_DRAWER })
  }
}

export const openDrawer = () => dispatch => {
  dispatch({ type: OPEN_DRAWER })
}

export const setOnEpisodePage = () => dispatch => {
  dispatch({ type: SET_ON_EPISODE_PAGE })
}

export const clearOnEpisodePage = () => dispatch => {
  dispatch({ type: CLEAR_ON_EPISODE_PAGE })
}
