import Card from "./components/card/Card";
import CongratulationsCard from "./components/card/CongratulationsCard";
import SalesOverview from "./components/salesOverview/SalesOverview";
import GoogleMapContainer from "./components/map/GoogleMap";
import MarketingCampaign from "./components/marketingCampaign/MarketingCampaign";
import MediaTraffic from "./components/mediaTraffic/MediaTraffic";
import Message from "./components/messages/Message";
import Profile from "./components/profile/Profile";
import RecentSeller from "./components/recentSeller/RecentSeller";
import TaskList from "./components/taskList/TaskList";
import TeamMembers from "./components/teamMembers/TeamMembers";
import Todo from "./components/todo/Todo";

export default function App() {
  return (
    <div className=" bg-gray-200 p-10 grid grid-cols-12 gap-5">
      <CongratulationsCard />
      <SalesOverview/>
      <Card/>
      <TaskList/>
      <MarketingCampaign/>
      <Todo/>
      <TeamMembers/>
      <Profile/>
      <MediaTraffic/>
      <GoogleMapContainer/>
      <RecentSeller/>
      <Message/>
    </div>
  );
}
