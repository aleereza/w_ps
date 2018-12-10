import React from 'react'
import styles from './eduitem.module.css'

class EduItem extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titlediv}>
          <div className={styles.title_shadow} />
          <div className={styles.title}>{this.props.title}</div>
        </div>
        <div className={styles.maindiv}>
          <div className={styles.main_shadow} />
          <div className={styles.main}>
            <p className={styles.degree}>{this.props.degree}</p>
            <p className={styles.school}>{this.props.school}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EduItem
