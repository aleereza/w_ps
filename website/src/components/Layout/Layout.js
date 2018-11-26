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
import scholar_icon from "../../icons/scholar.svg"
import envelope_icon from "../../icons/envelope.svg"
import linkedin_icon from "../../icons/linkedin.svg"

import home_icon from "../../icons/home.svg"

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

  copyEmail() {  //not working
    var text = "psaeedi@sfu.ca";
    text.select();
    document.execCommand("copy");
    alert("Copied: " + text.value);
  }

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
              <p className={styles.profile_name}>Parvaneh Saeedi</p>
              <p className={styles.profile_title}>Associate Professor, School of Engineering Science</p>

            </div>

            <div className={styles.links_section}>
              <div className={styles.links_section_2}>
                <NavLink to="/" name="Home" icon={home_icon}/>
                <NavLink to="/publications" name="Publications" icon={home_icon}/>
                <NavLink to="/teaching" name="Teaching" icon={home_icon}/>
              </div>
            </div>

            <div className={styles.icons_section}>
              <button className={styles.email} onClick={() => this.copyEmail()}>
                <img className={styles.icon} src={envelope_icon} alt="GS"/>
              </button>
              <a className={styles.icon_anchor} href="https://www.researchgate.net/profile/Parvaneh_Saeedi">
                <img className={styles.icon} src={rg_icon} alt="RG"/>
              </a>
              <a className={styles.icon_anchor} href="https://scholar.google.com/citations?user=4pJ8TzUAAAAJ&hl=en">
                <img className={styles.icon} src={scholar_icon} alt="GS"/>
              </a>
              <a className={styles.icon_anchor} href="https://www.linkedin.com/in/parvanehsaeedi/">
                <img className={styles.icon} src={linkedin_icon} alt="GS"/>
              </a>
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
