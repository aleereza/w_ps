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
        <div className={styles.container_1}>
          <p className={styles.name}>{this.props.name}</p>
          <p className={styles.sub}>{this.props.time}</p>
          <p className={styles.sub}>{this.props.responsibility}</p>
        </div>
        <div className={styles.container_2}>
          <p className={styles.research}>
            Thesis/Project: {this.props.research}
          </p>
          <p className={current_position_style}>
            Current Position: {this.props.position}
          </p>
        </div>
      </div>
    )
  }
}

export default StudentItem
