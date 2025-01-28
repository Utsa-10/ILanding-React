import React from "react";
import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";
import Navbar from "../../components/home/navbar/Navbar";
import Stats from "../../components/home/stats/Stats";
import "./home.css";
import FeaturesCardsRow from "../../components/home/fetures/FeatureCardsRow";
import FeaturesMobileRow from "../../components/home/fetures/FeaturesMobileRow";
import FeaturePost from "../../components/home/fetures/FeaturePost";
import Clients from "../../components/home/clients/Clients";
import Action from "../../components/home/pricing/Action";
import TestimonialsRow from "../../components/home/testimonials/TestimonialsRow";
import ServicesRow from "../../components/home/services/ServicesRow";
import FiguresRow from "../../components/home/figures/FiguresRow";
import Pro from "../../components/common/profile/Pro";
import ServicesCard from "../../components/home/services/ServicesCard";
import FaqsRow from "../../components/home/faqs/FaqsRow";
// import ListRendering from "../../components/home/ListRendering";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Pro />
      <FeaturesCardsRow />
      <FeaturesMobileRow />
      <Clients />
      <FeaturePost />
      <TestimonialsRow />
      <FiguresRow />
      <ServicesRow />
      <ServicesCard />
      <Action />
      <FaqsRow />

      {/* <ListRendering/> */}
    </div>
  );
}

export default Home;
