import React from "react";
import Banner from "./layouts/Fashion/Components/Banner";
import CollectionBanner from "./layouts/Fashion/Components/Collection-Banner";
import HeaderOne from "../components/headers/header-one";
import Helmet from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";
import CTA from "./layouts/Fashion/Components/CTA";
import OurProducts from "./layouts/Fashion/Components/OurProducts";
import OurMission from "./layouts/Fashion/Components/OurMission";
import Activities from "./layouts/Fashion/Components/Activities";


const Fashion = () => {
  return (
    <div className="home-main">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/icon/logo.png"} />
      </Helmet>
      <div style={{ position: "relative" }}>
        <Banner />
        <div id="sticky-wrapper" style={{ position: "absolute", top: 25, right: 25 }}>
          <HeaderOne logoName={"logo.png"} topClass="top-header" />
        </div>
      </div>
      <CollectionBanner />
      <Activities />
      <CTA />
      <OurProducts />
      <OurMission />
      <MasterFooter footerClass={`footer-light`} footerLayOut={"upper-footer"} footerSection={"small-section border-section border-top-0"} belowSection={"section-b-space light-layout"} newLatter={true} logoName={"logo2.png"} />
    </div>
  )
}

export default Fashion;
