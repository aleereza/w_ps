import React from 'react'
import StudentItem from './StudentItem'
import Heading from '../Heading/Heading'
import styles from "./studentitemgroup.module.scss"

// a group of students, used to render all student of a specific title: bsc, msc, phd or ra
class StudentItemGroup extends React.Component {
  render() {
    const data = this.props.data
    const title = this.props.title //string
    return (
      <div>
        <Heading text={title} />
        <div className={styles.container}>
          {data.map((row, i) => (
            <StudentItem
              key={i}
              name={data[i].node.name}
              responsibility={data[i].node.responsibility}
              time={data[i].node.time}
              research={data[i].node.research}
              position={data[i].node.position}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default StudentItemGroup
