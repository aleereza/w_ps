import React from 'react'
import styles from "./layout.module.css"

import cx from "classnames"

import Header from "../Header/Header"
import Content from "../Content/Content"
import Footer from "../Footer/Footer"

import NavLink from "./NavLink/NavLink"
import MenuButton from "./MenuButton/MenuButton"
import profilepic from "../../images/profile/1.jpg"
import rg_icon from "../../icons/researchgate.svg"

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
        <div className={container} onClick={() => this.ChangeNav()}>

            <div className={styles.profile_section}>
              <img className={styles.profilepic} src={profilepic} alt="Profile Picture"/>

            </div>

            <NavLink to="/" name="Home"/>
            <NavLink to="/publications" name="Publications"/>
            <NavLink to="/teaching" name="Teaching"/>

            <div className={styles.icons_section}>
              <img className={styles.icon} src={rg_icon} alt="RG"/>

              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 32v448h448V32H0zm262.2 334.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1.6-33.6.8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c25.8 1 53.1-.6 70.9-.6 31.7 0 55.9 14.4 55.9 45.6 0 21.1-16.7 42.2-39.2 47.5 13.6 24.2 30 45.6 42.2 58.9 7.2 7.8 17.2 14.7 27.2 14.7v7.3zm22.9-135c-23.3 0-32.2-15.7-32.2-32.2V167c0-12.2 8.8-30.4 34-30.4s30.4 17.9 30.4 17.9l-10.7 7.2s-5.5-12.5-19.7-12.5c-7.9 0-19.7 7.3-19.7 19.7v26.8c0 13.4 6.6 23.3 17.9 23.3 14.1 0 21.5-10.9 21.5-26.8h-17.9v-10.7h30.4c0 20.5 4.7 49.9-34 49.9zm-116.5 44.7c-9.4 0-13.6-.3-20-.8v-69.7c6.4-.6 15-.6 22.5-.6 23.3 0 37.2 12.2 37.2 34.5 0 21.9-15 36.6-39.7 36.6z"/>
              </svg>

            </div>

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
