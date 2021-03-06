import React from 'react';
import "./Preloader.scss"
// import ImgSnow from "../../Images/bear7.png";


const Preloader = ({ preloaderHide, preloaderRemove }) => {

  let preloaderShow = "preloader"


  if (preloaderHide) {
    preloaderShow = "preloader preloader--hide"
  }

  if (preloaderRemove) {
    preloaderShow = "preloader preloader--hide preloader--none"
  }


  return (
    <div className={preloaderShow}>
      <div className="preloader-wrap">
        <div className="preloader-logo">
          {/* <img src={ImgSnow} alt=''></img> */}
          <p>
            Sad Bears
          </p>
        </div>
        <div className="preloader-line">
          <div className="preloader-loading"></div>
        </div>
      </div>
    </div>
  )
}

export default Preloader