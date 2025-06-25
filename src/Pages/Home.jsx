import Banner from "../Components/Banner";
import WhyJoin from "../Components/WhyJoin";
import HobbyHubNumbers from "../Components/HobbyHubNumbers";
import Groups from "../Components/Groups";
import { AuthContext } from "../Provider/AuthProvider";
import FAQ from "../Components/FAQ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Groups></Groups>
      <WhyJoin></WhyJoin>
      <HobbyHubNumbers></HobbyHubNumbers>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
