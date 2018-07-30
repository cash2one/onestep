// auth
export const getIsAuthenticated = state => state.auth.isAuthenticated
export const getCurrentUser = state => state.auth.currentUser
export const getIsMember = state => {
  const user = state.auth.currentUser
  return (user && user.coin && user.coin > 0) || false
}

// smsSend
export const getSmsSendState = state => state.smsSend

// notification
export const getNotification = state => state.common.notification

export const getEpisodeMarkdown = state => {
  return state.episode.doc
}
