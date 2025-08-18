import Wrapper from '../components/wrapper/landingPage.js';
import { Link } from 'react-router-dom';
import main from "../assets/main.svg";

const LandingPage = () => {


  return (
      <Wrapper>
          {/* <nav>
              <img src={logo} alt="logo" className="logo" style={style} />
          </nav> */}
          <div className="container page">
              <div className="info">
                  <h1>
                      Job <span>Tracking</span> App
                  </h1>
                  <p>
                      I'm baby cloud bread edison bulb mumblecore, paleo yuccie
                      chicharrones jawn next level quinoa. Waistcoat bespoke
                      tumeric umami, cray mukbang sustainable. Kickstarter YOLO
                      freegan forage semiotics. Pickled you probably haven't
                      heard of them meh, glossier grailed palo santo thundercats
                      try-hard tacos. Copper mug small batch bushwick brunch
                      cred viral crucifix blue bottle cloud bread godard
                      affogato. Typewriter subway tile activated charcoal
                      mixtape narwhal. Pok pok tofu authentic shabby chic
                      mustache, intelligentsia dreamcatcher cold-pressed same
                      cred cloud bread tacos shaman.
                  </p>
                  <Link to="/register" className="btn register">
                      Register
                  </Link>
                  <Link to="/login" className="btn login">
                      Login
                  </Link>
              </div>
              <img src={main} alt="job hunting" className="img main-img" />
          </div>
      </Wrapper>
  );
}
export default LandingPage