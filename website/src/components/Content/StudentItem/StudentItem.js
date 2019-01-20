import React from 'react'
import styles from './studentitem.module.scss'
import cx from 'classnames'

class StudentItem extends React.Component {
  render() {
    var current_position_style
    current_position_style = cx({
      [styles.displaynone]: this.props.position === '',
    })

    return (
      <div className={styles.container}>
        <div className={styles.textcontainer}>
          <span className={styles.name}>{this.props.name}</span>
          <span>, </span>
          <span className={styles.name}>{this.props.responsibility}</span>
          <span>, </span>
          <span className={styles.name}>{this.props.time} </span>
          <span className={styles.name}>{this.props.research}. </span>
          <span className={current_position_style}>{this.props.position}.</span>
        </div>
      </div>
    )
  }
}

export default StudentItem
