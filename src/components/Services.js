import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum sed officiis veritatis quod dolorum error odio. Earum, eius veritatis cupiditate cumque praesentium, reiciendis exercitationem iusto sint assumenda, pariatur non!`;

function Services() {
  return (
    <>
    <div class="o-h1">
        <h1>Our Services</h1>
      </div>
    <Collapse accordion>
    <Panel header="Consultation interview" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="date and relationship coaching" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
    </>
  )
}

export default Services