import React from "react";
import Banner from "../Components/Banner";
import BannerGroups from "../Components/BannerGroups";
import WhyJoin from "../Components/WhyJoin";
import HobbyHubNumbers from "../Components/HobbyHubNumbers";

const Home = () => {
  return (
    <div className="mt-10">
      <Banner></Banner>
      <BannerGroups></BannerGroups>
      <WhyJoin></WhyJoin>
      <HobbyHubNumbers></HobbyHubNumbers>
    </div>
  );
};

export default Home;
