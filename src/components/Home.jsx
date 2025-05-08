import Slider from "./Slider";
import SubscriptionServices from "./SubscriptionServices";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Subscription Box</title>
      </Helmet>
      <Slider />
      <SubscriptionServices />
    </div>
  );
};

export default Home;
