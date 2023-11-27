import React from "react";
import Banner from "./layouts/Fashion/Components/Banner";
import CollectionBanner from "./layouts/Fashion/Components/Collection-Banner";
import TopCollection from "../components/common/Collections/Collection3";
import Parallax from "./layouts/Fashion/Components/Parallax";
import SpecialProducts from "../components/common/Collections/TabCollection1";
import ServiceLayout from "../components/common/Service/service1";
import Blog from "../components/common/Blog/blog1";
import Instagram from "../components/common/instagram/instagram1";
import LogoBlock from "../components/common/logo-block";
import HeaderOne from "../components/headers/header-one";
import { Product4 } from "../services/script";
import Paragraph from "../components/common/Paragraph";
import ModalComponent from "../components/common/Modal";
import Helmet from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";
import CTA from "./layouts/Fashion/Components/CTA";
import OurProducts from "./layouts/Fashion/Components/OurProducts";
import OurMission from "./layouts/Fashion/Components/OurMission";

const Fashion = () => {
  return (
    <div className="home-main">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/icon/logo.png"} />
      </Helmet>
      <HeaderOne logoName={"logo.png"} topClass="top-header" />
      <Banner />
      <CollectionBanner />
      <CTA />
      <OurProducts />
      <OurMission />
      <MasterFooter footerClass={`footer-light`} footerLayOut={"upper-footer"} footerSection={"small-section border-section border-top-0"} belowSection={"section-b-space light-layout"} newLatter={true} logoName={"logo2.png"} />
    </div>
  );
};

export default Fashion;
