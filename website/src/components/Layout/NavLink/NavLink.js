import React from 'react'
import { Link } from "gatsby"
import styles from "./navlink.module.css"

class NavLink extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return(
      <div className={styles.container}>
        <Link to={this.props.to}>
          <img className={styles.icon} src={this.props.icon} alt={this.props.name}/>
          <span className={styles.link}>
            {this.props.name}
          </span>
        </Link>
      </div>
    )
  }
}

export default NavLink
