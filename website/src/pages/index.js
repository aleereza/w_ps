import React from 'react'
import { Link } from 'gatsby'
import styles from './pages.module.css'

import Layout from '../components/Layout/Layout'

const IndexPage = () => (
  <div>
    <div className={styles.index_1}>
      <h1 className={styles.page_title}>Biography</h1>
      <p>
        I am an assistant professor in the School of Engineering Science at Simon Fraser University. My research interests are computer vision, motion/trajectory tracking, object recognition and automatic 3D map generation. I am especially interested in the integration of vision modules in constructing robust systems with applications in robotics, science and medicine.
      </p>
    </div>
  </div>
)

export default IndexPage
