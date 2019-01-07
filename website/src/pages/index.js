import React from 'react'
import { Link } from 'gatsby'
import styles from './pages.module.scss'
import EduItem from '../components/Content/EduItem/EduItem'

const IndexPage = () => (
  <div>
    <div className={styles.index_1}>
      <h1 className={styles.page_title}>Biography</h1>
      <p>
        I am an assistant professor in the School of Engineering Science at
        Simon Fraser University. My research interests are computer vision,
        motion/trajectory tracking, object recognition and automatic 3D map
        generation. I am especially interested in the integration of vision
        modules in constructing robust systems with applications in robotics,
        science and medicine.
      </p>
    </div>
    <div className={styles.index_2}>
      <div className={styles.research_section}>
        <div className={styles.serearch_interests}>something</div>
        <div className={styles.selected_pubs}>something</div>
      </div>
      <div className={styles.edu_section}>
        <div className={styles.eduitems}>
          <EduItem
            title="Ph.D"
            degree="Electrical and Computer Engineering"
            school="University of British Columbia, 2004"
          />
          <EduItem
            title="M.Sc."
            degree="Electrical and Computer Engineering"
            school="University of British Columbia, 1998"
          />
          <EduItem
            title="B.Sc."
            degree="Electrical and Computer Engineering"
            school="Iran University of Science and Technology, 1990"
          />
        </div>
        <div className={styles.proitems}>
          <EduItem
            title="2012-Present"
            degree="Associate Professor"
            school="Simon Fraser University"
          />
          <EduItem
            title="2007-2012"
            degree="Assistant Professor"
            school="Simon Fraser University"
          />
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
