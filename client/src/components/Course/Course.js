import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseIntro from '../../containers/CourseIntroContainer'
import VideoPlayer from '../../lib/videoPlayer/VideoPlayer'
import EpisodeList from '../../containers/EpisodeListContainer'
import Buy from '../../containers/BuyContainer'
import { videoJsOptions } from '../../lib/playerConfig'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {},
  content: {
    padding: theme.spacing.unit
  },
  section: {
    marginBottom: theme.spacing.unit
  }
})

class Course extends Component {
  componentDidMount() {
    const { courseUid } = this.props.match.params
    this.props.fetchCurrentCourse(courseUid)
  }

  render() {
    const { videoLink, classes: s } = this.props

    return (
      <div>
        {videoLink && <VideoPlayer {...videoJsOptions(videoLink)} />}
        <Paper className={s.content}>
          <div className={s.section}>
            <CourseIntro />
          </div>
          <div className={s.section}>
            <EpisodeList />
          </div>
          <div className={s.section}>
            <Buy />
          </div>
        </Paper>
      </div>
    )
  }
}

Course.propTypes = {
  fetchCurrentCourse: PropTypes.func.isRequired,
  videoLink: PropTypes.string.isRequired
}

export default withStyles(styles)(Course)
