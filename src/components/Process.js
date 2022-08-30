import React, { useEffect } from 'react'
import '../css/process.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Span = {
  fontSize:"42px", 
  paddingRight: "15px"
}

function Process() {
    useEffect(() =>{
        Aos.init();
    },[])

    const timeline= [
      {
        row: 'row row-1',
        color: 'c-1',
        icon: 'fa fa-clipboard-question',
        title: 'In depth interview',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil deleniti, voluptatibus dolores fugiat temporibus quia, laudantium veritatis in eum dolorum error dolore neque autem ut consectetur mollitia libero nam officia.'
      },
      {
        row: 'row row-2',
        color: 'c-2',
        icon: 'fa fa-chalkboard',
        title: 'date & relationship coaching',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil deleniti, voluptatibus dolores fugiat temporibus quia, laudantium veritatis in eum dolorum error dolore neque autem ut consectetur mollitia libero nam officia.'
      },
      {
        row: 'row row-1',
        color: 'c-3',
        icon: 'fa fa-search',
        title: 'Search & vetting potential matches',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil deleniti, voluptatibus dolores fugiat temporibus quia, laudantium veritatis in eum dolorum error dolore neque autem ut consectetur mollitia libero nam officia.'
      },
      {
        row: 'row row-2',
        color: 'c-4',
        icon: 'fa fa-meetup',
        title: 'Meet your match',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil deleniti, voluptatibus dolores fugiat temporibus quia, laudantium veritatis in eum dolorum error dolore neque autem ut consectetur mollitia libero nam officia.'
      },
      {
        row: 'row row-1',
        color: 'c-5',
        icon: 'fa fa-comment',
        title: 'after date feedback',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil deleniti, voluptatibus dolores fugiat temporibus quia, laudantium veritatis in eum dolorum error dolore neque autem ut consectetur mollitia libero nam officia.'
      }
    ];
   
  return (
    <div>
        <div class="o-h1">
        <h3>Our <span>Process</span> </h3>
      </div>

      <div class="wrapper">
        <div class="center-line">
            {/* <a href="#" class="scroll-down"><i class="fa fa-claret-up"></i></a> */}
        </div>
       
       {timeline.map(timeline1 =>
        <div class={timeline1.row} data-aos="flip-left" data-aos-duaration="1000" data-aos-easing="ease-out-cubic">
          <section class={timeline1.color}>
              <i class={`icon ${timeline1.icon}`}></i>
              <div class="details">
                  <span class="title"><span style={Span}><i class={timeline1.icon}></i></span>{timeline1.title}</span>
              </div>
              <p>{timeline1.text}</p>
          </section>
        </div>
        )}
    </div>
    </div>
  )
}

export default Process