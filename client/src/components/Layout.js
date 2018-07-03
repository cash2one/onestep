import React from 'react'
import Header from './Header'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import Drawer from '@material-ui/core/Drawer'
import TocList from '../containers/TocListContainer'

const styles = () => ({
  root: {}
})

const Layout = ({
  notification,
  children,
  clearNotification,
  toggleSidebar,
  isSidebarOpen,
  classes: s,
  ...props
}) => {
  return (
    <div>
      <Header {...props} toggleSidebar={toggleSidebar} />
      <Drawer
        ModalProps={{ BackdropProps: { invisible: true } }}
        open={isSidebarOpen}
        className={s.drawer}
      >
        <TocList />
      </Drawer>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        variant="error"
        open={Boolean(notification)}
        autoHideDuration={3000}
        message={notification}
        onClose={clearNotification}
      />
      {children}
    </div>
  )
}

Layout.propTypes = {
  currentUser: PropTypes.object.isRequired,
  notification: PropTypes.string.isRequired,
  clearNotification: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export default withStyles(styles)(Layout)