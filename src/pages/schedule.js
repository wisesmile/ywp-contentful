import React from 'react'
import YAMLData from './schedule.yml'
import Layout from '../components/layout'

const TeachingSchedule = () => (
  <Layout>
    <h3>{YAMLData.title}</h3>
    <ul>
      {YAMLData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
    <p>
      <b>All classes are virtual, for now.</b>
    </p>{' '}
    <p>
      Visit{' '}
      <a href="http://www.yogapeacekula.com" target="_new">
        Yoga Peace Kula
      </a>{' '}
      and{' '}
      <a href="http://peacewarrioryoga.com/" target="_new">
        Peace Warrior Yoga and Wellness
      </a>{' '}
      for signup information and additional classes.{' '}
    </p>
  </Layout>
)
export default TeachingSchedule
