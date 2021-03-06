import { combineReducers } from 'redux'
import {
  SHOW_NOTIFICATION,
  CLEAR_NOTIFICATION,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  SET_ON_EPISODE_PAGE,
  CLEAR_ON_EPISODE_PAGE
} from '../../constants/actionTypes/commonActionTypes.js'

const notification = (state = '', action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return action.text
    case CLEAR_NOTIFICATION:
      return ''
    default:
      return state
  }
}

const isDrawerOpen = (state = false, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return true
    case CLOSE_DRAWER:
      return false
    case CLEAR_ON_EPISODE_PAGE:
      return false
    default:
      return state
  }
}

const isOnEpisodePage = (state = false, action) => {
  switch (action.type) {
    case SET_ON_EPISODE_PAGE:
      return true
    case CLEAR_ON_EPISODE_PAGE:
      return false
    default:
      return state
  }
}

export default combineReducers({
  notification,
  isDrawerOpen,
  isOnEpisodePage
})
