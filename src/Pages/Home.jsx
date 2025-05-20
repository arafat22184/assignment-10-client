import React from "react";
import Banner from "../Components/Banner";
import BannerGroups from "../Components/BannerGroups";
import WhyJoin from "../Components/WhyJoin";
import HobbyHubNumbers from "../Components/HobbyHubNumbers";
import Groups from "../Components/Groups";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerGroups></BannerGroups>
      <Groups></Groups>
      <WhyJoin></WhyJoin>
      <HobbyHubNumbers></HobbyHubNumbers>
    </div>
  );
};

export default Home;
