import React from 'react'
import styles from "./pagetitle.module.scss"


class PageTitle extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>
          {this.props.text}
        </h1>
      </div>
    );
  }
}

export default PageTitle 
