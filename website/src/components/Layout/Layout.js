import React from 'react'
import styles from "./layout.module.css"

import cx from "classnames"

import Header from "../Header/Header"
import Content from "../Content/Content"
import Footer from "../Footer/Footer"

import NavLink from "./NavLink/NavLink"
import MenuButton from "./MenuButton/MenuButton"



class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  };
  ChangeNav = () => {
    this.setState(
    (prevState)=>({open: !prevState.open})
    )
  };

  render() {
    var container
    container = cx ({
      [styles.sidenav_container]:true,
      [styles.open]: this.state.open,
    });

    return (
      <div>
        <div className={styles.navbar}>
          <div className={styles.menubutton} onClick={() => this.ChangeNav()}>
            <MenuButton state={!this.state.open}/>
          </div>
        </div>
        <div className={container}>

            <NavLink to="/" name="Home"/>
            <NavLink to="/publications" name="Publications"/>

        </div>
        <Content>
          {this.props.children}
        </Content>
      </div>
    );
  }
}

export default Layout;

// <div className={styles.sidenav}>
//   <NavLink to="/" name="Home"/>
//   <NavLink to="/publications" name="Publications"/>
// </div>
