import React, { useEffect } from 'react'
import '../css/process.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Process() {
    useEffect(() =>{
        Aos.init();
    },[])
  return (
    <div>
        <div class="o-h1">
        <h1>Our Services</h1>
      </div>

      <div class="wrapper">
        <div class="center-line">
            {/* <a href="#" class="scroll-down"><i class="fa fa-claret-up"></i></a> */}
        </div>

        <div class="row row-1" data-aos="flip-left" data-aos-duaration="1000" data-aos-easing="ease-out-cubic">
          <section class="c-1">
              <i class="icon fa fa-clipboard-question"></i>
              <div class="details">
                  <span class="title"><span style={{fontSize:"42px", paddingRight: "15px"}}><i class="fa fa-clipboard-question"></i></span>In depth interview</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iure voluptate cupiditate magni neque modi dolorem quis alias culpa eligendi ratione quidem, officia cumque voluptatem quod recusandae. Quod, molestias doloribus!</p>
          </section>
        </div>
        <div class="row row-2"  data-aos="flip-left" data-aos-duaration="1000" data-aos-easing="ease-out-cubic">
          <section class="c-2">
              <i class="icon fa fa-chalkboard"></i>
              <div class="details">
                  <span class="title"><span style={{fontSize: "42px", paddingRight: "15px"}}><i class="fa fa-chalkboard"></i></span>date & relationship coaching</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus quisquam alias, doloremque maiores placeat, odit, quia inventore magnam consequuntur modi! Animi, quam nesciunt nobis perspiciatis deleniti ullam molestias placeat!</p>
          </section>
        </div>
        <div class="row row-1" data-aos="flip-left" data-aos-duaration="1000" data-aos-easing="ease-out-cubic">
          <section class="c-3">
              <i class="icon fa fa-search"></i>
              <div class="details">
                  <span class="title"><span style={{fontSize: "42px", paddingRight: "15px"}}><i class="fa fa-search"></i></span>Search & vetting potential matches</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore quia consequatur, assumenda non explicabo expedita! Voluptatem maiores magnam laboriosam eum! Possimus vel obcaecati enim est natus nostrum? Obcaecati, itaque.</p>
          </section>
        </div>
        <div class="row row-2" data-aos="flip-left" data-aos-duaration="1000" data-aos-easing="ease-out-cubic">
          <section class="c-4">
              <i class="icon fa fa-meetup"></i>
              <div class="details">
                  <span class="title"><span style={{fontSize: "42px", paddingRight: "15px"}}><i class="fa fa-meetup"></i></span> Meet your match</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat quia minima voluptas magni repellendus, debitis quam fugit deserunt id error beatae eum, nemo illo necessitatibus provident sapiente aspernatur pariatur.</p>
          </section>
        </div>
        <div class="row row-1" data-aos="flip-left" data-aos-duaration="1000" data-aos-easing="ease-out-cubic">
          <section class="c-5">
              <i class="icon fa fa-comment"></i>
              <div class="details">
                  <span class="title"><span style={{fontSize: "42px", paddingRight: "15px"}}><i class="fa fa-comment"></i></span> after date feedback</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti amet in et. Magnam necessitatibus nesciunt, quidem nulla doloremque, obcaecati repellendus commodi nemo minus eum, culpa vitae dignissimos dolorum dolores!</p>
          </section>
        </div>
    </div>
    </div>
  )
}

export default Process