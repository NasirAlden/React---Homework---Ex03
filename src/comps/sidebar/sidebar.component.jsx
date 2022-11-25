import React from "react";
import "./style.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import MovieCreation from "@mui/icons-material/MovieCreation";
import SmartToy from "@mui/icons-material/SmartToy";
import FaceIcon from "@mui/icons-material/Face";
import { Link } from "react-router-dom";

export const Sidebar = (props) => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link className="link" to="/">
            <div className="icon">
              <HomeIcon />
            </div>
            <div className="headline">Home</div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            <div className="icon">
              <InfoIcon />
            </div>
            <div className="headline">About</div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/contactus">
            <div className="icon">
              <CallIcon />
            </div>
            <div className="headline">Contact Us</div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/movies">
            <div className="icon">
              <MovieCreation />
            </div>
            <div className="headline">Movies</div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/games">
            <div>
              <SmartToy />
            </div>
            <div className="headline">Games</div>
          </Link>
        </li>
        <li>
          <div className="link">
            <FaceIcon />
            Nasir
          </div>
        </li>
      </ul>
    </div>
  );
};
