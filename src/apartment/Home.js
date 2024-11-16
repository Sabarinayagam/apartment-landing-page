import React, { useState } from "react";
import "../apartment/HomeCss.css";
import logo from "../apartment/Assets/logo.png";
import banner from "../apartment/Assets/banner.png";
import why1 from "../apartment/Assets/why1.jpg";
import why2 from "../apartment/Assets/why2.jpg";
import why3 from "../apartment/Assets/why3.jpg";
import chennai from "../apartment/Assets/chennai.png";
import card1 from "../apartment/Assets/card1.png";
import card2 from "../apartment/Assets/card2.png";
import card3 from "../apartment/Assets/card3.png";
import logo2 from "../apartment/Assets/logo2.png";

import { Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={isMenuOpen ? "showmenu" : ""}>
          <li>
            <a href="#">OVERVIEW</a>
          </li>
          <li>
            <a href="#">WHY CHENNAI?</a>
          </li>
          <li>
            <a href="#">PLOT BENEFITS</a>
          </li>
          <li>
            <button className="btn">
              {" "}
              <a href="#">Contct Us</a>
            </button>
          </li>
        </ul>
        <div className="menu" onClick={toggleMenu}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </nav>
      {/* 2 banner */}
      <div className="banner">
        <img src={banner}></img>
      </div>
      {/* 3 /////////////////////////////////////////////////////*/}

      <div className="Whyinvest">
        <div className="Whyinvest1">
          <h1>Why invest in Apartments ?</h1>
          <p>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora toria nostra, per inceptos
            himenaeos.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="box1">
          <div className="left">
            <div className="imagediv">
              <img src={why1}></img>
            </div>
          </div>
          <div className="right">
            <div className="rightbox">
              <h2>Lorem ipsum dolor sit amet consectetur</h2>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>

        <div className="box2">
          <div className="right">
            <div className="rightbox">
              <h2>Qorem ipsum dolor sit amet consectetur</h2>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="left">
            <div className="imagediv">
              <img src={why2}></img>
            </div>
          </div>
        </div>

        <div className="box1">
          <div className="left">
            <div className="imagediv">
              <img src={why3}></img>
            </div>
          </div>
          <div className="right">
            <div className="rightbox">
              <h2>Worem ipsum dolor sit amet consectetur</h2>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 ///////////////////////////////// */}

      <div className="Booming">
        <div className="Whyinvest">
          <div className="Whyinvest1">
            <h1>BOOMING AREAS</h1>
            <p>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora toria nostra, per inceptos
              himenaeos.
            </p>
          </div>
        </div>

        <div className="Boomingboxs">
          <div className="nav2">
            <ul>
              <li>
                <a href="#">North Chennai</a>
              </li>
              <li>
                <a href="#">East Chennai</a>
              </li>
              <li>
                <a href="#">West Chennai</a>
              </li>
              <li>
                <a href="#">South Chennai</a>
              </li>
              <li>
                <a href="#">Central Chennai</a>
              </li>
            </ul>
          </div>
          <div className="container2">
            <div className="left">
              <h2>Sorem ipsum dolor sit amet</h2>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </p>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </p>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </p>
            </div>
            <div className="right">
              <img src={chennai}></img>
            </div>
          </div>
        </div>
      </div>

      {/* Key amenities /////////////////////////////////////////////*/}

      <div className="Key">
        <div className="keydiv">
          <div className="Whyinvest">
            <div className="Whyinvest1">
              <h1>KEY AMENITIES</h1>
              <p>
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora toria nostra, per
                inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-item" class="icon">
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              sx={{
                borderRadius: "50%",
                color: "#372C70",
                borderColor: "#372C70",
                padding: "12px 0px 12px 9px",
              }}
            ></Button>
          </div>
          <div className="flex-item">
            <div className="cardimg">
              <img src={card1}></img>
            </div>
            <h1 className="cardh1">Indoor games</h1>
          </div>
          <div className="flex-item">
            <div className="cardimg">
              <img src={card2}></img>
            </div>
            <h1 className="cardh1">gymnasium</h1>
          </div>
          <div className="flex-item">
            <div className="cardimg">
              <img src={card3}></img>
            </div>
            <h1 className="cardh1">Banquet hall</h1>
          </div>
          <div className="flex-item" class="icon">
            <Button
              variant="outlined"
              startIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: "50%",
                color: "#372C70",
                borderColor: "#372C70",
                padding: "12px 0px 12px 9px",
              }}
            ></Button>
          </div>
        </div>
      </div>

      <footer>
        <div className="footerdiv">
          <div className="cont">
            <p>Plots in Anna Nagar West</p>
            <p>Plots in Anna Nagar East</p>
            <p>Plots in Tambaram</p>
            <p>Plots in ECR</p>
          </div>
          <div>
            <p>Plots in OMR</p>
            <p>Flats For Sale In Anna Nagar</p>
            <p>Flats Near Mogappair</p>
            <p>2bhk Apartments In Anna Nagar</p>
          </div>
          <div>
            <p>2bhk Apartments In Anna Nagar</p>
            <p>Flats Near Mogappair</p>
            <p>Plots in ECR</p>
            <p>Plots in Tambaram</p>
          </div>
          <div>
            <p>Plots in OMR</p>
            <p>Flats Near Mogappair</p>
            <p>Flats For Sale In Anna Nagar</p>
            <p>2bhk Apartments In Anna Nagar</p>
          </div>
        </div>
        <div className="copyright">
          <div className="copyrightcon">
            <p>Copyright © 2024 Royal Land & Developers All Rights Reserved</p>

            <div className="footerlogocont">
              <div className="footerlogodiv">
                <p>Designby</p>
                <img src={logo2}></img>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
