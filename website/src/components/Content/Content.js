import React from "react"

import styles from "./content.module.scss"

class Content extends React.Component {

  render() {

    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}


export default Content
