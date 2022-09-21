import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <div className="about">
        <h1 class="animate__animated animate__swing">ABOUT US</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,96L48,80C96,64,192,32,288,37.3C384,43,480,85,576,85.3C672,85,768,43,864,32C960,21,1056,43,1152,64C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="about-container">
        <h4>Executive Matchmaking</h4>
        <p>
          {" "}
          Executive Matchmaker Kenya is a locally focused, high-end matchmaking
          firm that specializes in introducing decent men to exceptional women.
          Designed with the insights of some of the top matchmakers in the
          country, Executive Matchmakers Kenya understands its clients'
          lifestyle and needs better than anyone else.
        </p>
        <p>
          As the “go-to” personal matchmaking firm in the country, we are able
          to attract the most sought after singles in your area.
        </p>
        <p>
          If you are a corporate executive, business owner, physician, attorney,
          athlete, entertainment industry professional, tech tycoon, engineer,
          politician, independently wealthy, or someone of substance who is
          looking for that special person to share your life with, you belong
          with us.
        </p>
      </div>

      <div className="about-content">
        <h4>Why would you need a matchmaker?</h4>
        <div className="acontent">
          <div className="a-content1">
            <h5>You need the matchmaking service if;</h5>
            <ol>
              <li>
                <p className="title">Personalized service</p>
                Every client has unique tastes and relationship expectations.
                Our professional matchmakers take these factors into account
                during our search to provide the best matchmaking services
                possible
              </li>
              <li>
                <p className="title">Confidential search</p> Gain peace of mind
                with the knowledge that you don't have online dating profiles
                floating around the internet. Our match making services are
                exclusive to members and private to each individual.
              </li>
              <li>
                <p className="title">Prescreened matches</p>
                Not everyone who applies for membership is accepted into
                Executive Match makers Kenya. This is not an escort service.
                Each person in our pool of singles is pre-screened before they
                can use our top match making services
              </li>
              <li>
                <p className="title">Matchmaking team effort</p>
                Gain a team of professionals to find “The One” for you. Our
                accredited luxury dating matchmakers work as a team to find your
                best possible match.
              </li>
              <li>
                <p className="title">Quality introduction.</p>
                Our matchmakers conduct in-depth interviews and consultations
                with each client to guarantee favorable matches and quality
                introductions.
              </li>
              <li>
                <p className="title">Organized first date</p>
                We shall go the extra mile of organizing the perfect first date. First impressions are lasting impressions.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="page-link"></div>
    </>
  );
}

export default About;
