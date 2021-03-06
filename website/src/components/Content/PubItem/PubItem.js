import React from 'react'
import styles from './pubitem.module.scss'
import cx from 'classnames'
import right_icon from '../../../icons/right.svg'

// all icons: https://react-icons.netlify.com/#/icons/fa
import { IconContext } from 'react-icons'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

class PubItem extends React.Component {
  render() {
    var containerclass
    containerclass = cx({
      [styles.container]: true,
      [styles.journalclass]: this.props.type === 'j',
      [styles.conferenceclass]: this.props.type === 'c',
      [styles.bookclass]: this.props.type === 'b',
    })

    var displaylink1, displaylink2
    displaylink1 = cx({
      [styles.iconcontainer]: true,
      [styles.displaynone]: this.props.link1 === '',
    })
    displaylink2 = cx({
      [styles.displaynone]: this.props.link2 === '',
    })

    return (
      <div className={containerclass}>
        <div className={styles.textcontainer}>
          <span className={styles.authors}>{this.props.authors}</span>
          <span>, </span>
          <span className={styles.title}>{this.props.title}</span>
          <span>, </span>
          <span className={styles.reference}>{this.props.reference} </span>
          <span className={styles.month}>{this.props.month}. </span>
          <span className={styles.year}>{this.props.year}.</span>
          <a className={displaylink2} href={this.props.link2}>
            {' '}
            [{this.props.link2_name}]
          </a>
        </div>
        <a className={styles.icon_anchor} href={this.props.link1}>
          <div className={displaylink1}>
            <img className={styles.icon} src={right_icon} alt="link" />
          </div>
        </a>
      </div>
    )
  }
}

export default PubItem
