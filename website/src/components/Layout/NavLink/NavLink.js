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
          <h5 className={styles.link}>
            {this.props.name}
          </h5>
        </Link>
      </div>
    )
  }
}

export default NavLink
