import React from "react"
import styles from "./menubutton.module.css"
import cx from "classnames"

class MenuButton extends React.Component {
  render() {
    var container
    container = cx ({
      [styles.container]: true,
      [styles.close]: !this.props.state,
    })
    return (
      <span className={container}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </span>
    );
  }
}

export default MenuButton
