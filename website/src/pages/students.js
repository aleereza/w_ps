import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import styles from './pages.module.scss'
import StudentItemGroup from '../components/Content/StudentItem/StudentItemGroup'

class StudentPage extends React.Component {
  render() {
	  const bsc_students = this.props.data.bsc.edges
	  const msc_students = this.props.data.msc.edges
	  const phd_students = this.props.data.phd.edges
	  const ra_students = this.props.data.ra.edges

    return (
      <div>
        <div className={styles.students_1}>
          <h1 className={styles.page_title}>Students</h1>
        </div>

        <div className={styles.students_2}>
          <StudentItemGroup title={'Ph.D. Students'} data={phd_students} />
          <StudentItemGroup title={'M.Sc. Students'} data={msc_students} />
          <StudentItemGroup title={'B.Sc. Students'} data={bsc_students} />
          <StudentItemGroup title={'Research Associates'} data={ra_students} />
        </div>
      </div>
    )
  }
}

export default StudentPage

export const studentsQuery = graphql`
  query studentsQuery {

    bsc: allStudentsCsv(
      filter: { title: { eq: "bsc" } }
      sort: { fields: [index], order: ASC }
    ){
      edges {
        node {
	  index
	  name
	  title
	  responsibility
	  time
	  research
	  position
        }
      }
    }

    msc: allStudentsCsv(
      filter: { title: { eq: "msc" } }
      sort: { fields: [index], order: ASC }
    ){
      edges {
        node {
	  index
	  name
	  title
	  responsibility
	  time
	  research
	  position
        }
      }
    }

    phd: allStudentsCsv(
      filter: { title: { eq: "phd" } }
      sort: { fields: [index], order: ASC }
    ){
      edges {
        node {
	  index
	  name
	  title
	  responsibility
	  time
	  research
	  position
        }
      }
    }

    ra: allStudentsCsv(
      filter: { title: { eq: "ra" } }
      sort: { fields: [index], order: ASC }
    ){
      edges {
        node {
	  index
	  name
	  title
	  responsibility
	  time
	  research
	  position
        }
      }
    }

  }
`
