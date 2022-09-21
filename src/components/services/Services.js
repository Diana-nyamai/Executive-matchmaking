import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

const styling = {
  color: '#000',
  fontWeight: 500
}
const coll = {
  padding: '80px'
}

function Services() {
  const services = [
    {
      key: 1,
      title: 'Consultation interview',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consectetur ipsa maiores minima sit beatae commodi unde officiis, in recusandae. Doloribus labore, fugit voluptate explicabo sit quibusdam ex accusantium minus?"
    },
    {
      key: 2,
      title: 'Date & Relationship Coaching',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consectetur ipsa maiores minima sit beatae commodi unde officiis, in recusandae. Doloribus labore, fugit voluptate explicabo sit quibusdam ex accusantium minus?"
    },
    {
      key: 3,
      title: 'LS Professional Photography',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consectetur ipsa maiores minima sit beatae commodi unde officiis, in recusandae. Doloribus labore, fugit voluptate explicabo sit quibusdam ex accusantium minus?"
    },
    {
      key: 4,
      title: 'Full Concierge Service',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consectetur ipsa maiores minima sit beatae commodi unde officiis, in recusandae. Doloribus labore, fugit voluptate explicabo sit quibusdam ex accusantium minus?"
    },
    {
      key: 5,
      title: 'Date Follow Up',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consectetur ipsa maiores minima sit beatae commodi unde officiis, in recusandae. Doloribus labore, fugit voluptate explicabo sit quibusdam ex accusantium minus?"
    }
    
  ]
  return (
    <>
    <div class="o-h1">
        <h3>Our <span>Services</span> </h3>
      </div>
    <Collapse accordion style={coll}>
      {services.map(service => 
        <Panel style={styling} header={service.title} key={service.key}>
      <p>{service.text}</p>
    </Panel>
        )}
  </Collapse>
    </>
  )
}

export default Services