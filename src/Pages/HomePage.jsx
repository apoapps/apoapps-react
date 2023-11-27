import React from "react";
import logo from "../Assets/Logos/apoapps-logo-inverted.svg";
import melloLogo from '../Assets/Logos/melloLogo.png';
import wakeupLogo from '../Assets/Logos/wakeup_logo.png';
import Card from "../Components/Card.jsx";
import MediaPage from './MediaPage.jsx'
import CoffeeButton from '../Components/BuyMeACoffee';
import FacebookLikeButton from "../Components/FacebookLikeButton.jsx";

import "./styles/HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <div className='col-sm-12 col-md-6 '>

      </div>
      <a href='#/media'>What's Apoapps?</a>
      <h1 className="title" id="proyectos">Portfolio:</h1>

      <div>
        <div className=" row ">
          <Card
            imgURL={wakeupLogo}
            title="WakeUp"
            titleImage="WakeUp"
            description="Sleep cycle calculator and alarm app"
            appState="Release"
            aboutLink="#/wakeup"
            platform1="iOS"
            platform2="Android"
          />
          <Card
            imgURL="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/51/65/6f/51656f75-28d5-c66a-0d1a-2324f9c2b85c/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/200x200bb.png"
            title="Fisik"
            titleImage=""
            description="Physics homework helper app"
            appState="Release"
            aboutLink="#/fisik"
            platform1="iOS"
            platform2="Android"
          />
          <Card
            imgURL="https://play-lh.googleusercontent.com/b0ZNcrjNnIPb8teMs0fwPoFsbBzJy8CiAivSswdKXYDtYMzyRwZOdd87LKkq9_1MrLWH=w480-h960-rw"
            title="Tri-Go Math"
            description="Math learning app for students"
            aboutLink="#/tri-go-math"
            platform1="iOS"
            platform2="android"
          />
          <Card
            imgURL={melloLogo}
            title="Mello Vs School"
            description="Video game where the player avoids virtual classes"
            aboutLink="#/mello-vs-school"
            platform1="iOS"
            platform2="android"
          />
          <Card
            imgURL="https://play-lh.googleusercontent.com/aynFiHgvTqoWPgQ5LB81d8WqrRkVgzbhiFheiEC--IcO6evRpcFt--e7HAK2g9i6OU6j=s180-rw"
            title="Endless Beats"
            description="Rhythm-based video game"
            aboutLink="#/endless-beats"
            platform1="iOS"
            platform2="android"
          />
          {/* <Card
            imgURL="https://cachiangips.com/static/media/cachiangLogo.b8ac92a2.png"
            title="Pagina CaChiang IPS"
            description="Pagina Empresarial"
            aboutLink="https://cachiangips.com"
            platform1="WEB"
          /> */}
          <Card
            imgURL="https://play-lh.googleusercontent.com/pKT453nwT0PMPJWkhteh0j8LIoHA4eT7UJ6hZZW3tjxUGO8gfUrc2Mk4Pr5uVepbmWdI=s180-rw"
            title="Alex VS Virus"
            description="Casual video game"
            aboutLink="#/alex-vs-virus"
            platform2="android"
          />
          <Card
            imgURL={logo}
            title="Previous Page"
            description="Business website"
            aboutLink="https://alexlink2004.github.io/about_alex_page"
            platform1="WEB"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
