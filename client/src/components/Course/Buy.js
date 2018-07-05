import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  priceTag: {
    fontSize: `2em`,
    padding: theme.spacing.unit * 2
  }
})

class Buy extends React.Component {
  render() {
    const { classes: s, price } = this.props
    const isFree = price === '0'

    const buyButton = (
      <div>
        <div className={s.priceTag}>{price}元</div>
        <Button variant="raised" color="primary">
          购买
        </Button>
      </div>
    )

    const content = isFree ? '免费课程' : buyButton
    return (
      <div className={s.root}>{content}</div>

      // {price === 0 ? (
      //   <BuyCourseButton />
      // ) : !isAuthenticated ? (
      //   <BuyCourseButton price={price} onClick={this.handleClick} />
      // ) : !isAccessible ? (
      //   <BuyCourse
      //     name={name}
      //     price={price}
      //     courseId={_id}
      //     signContract={this.props.signContract}
      //     checkContract={this.props.checkContract}
      //   />
      // ) : null}
    )
  }
}

export default withStyles(styles)(Buy)
