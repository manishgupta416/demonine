import React from "react";
import CongratulationsCard from "../../components/card/CongratulationsCard";
import SalesOverview from "../../components/salesOverview/SalesOverview";
import Card from "../../components/card/Card";
import TaskList from "../../components/taskList/TaskList";
import MarketingCampaign from "../../components/marketingCampaign/MarketingCampaign";
import Todo from "../../components/todo/Todo";
import TeamMembers from "../../components/teamMembers/TeamMembers";
import Profile from "../../components/profile/Profile";
import MediaTraffic from "../../components/mediaTraffic/MediaTraffic";
import GoogleMapContainer from "../../components/map/GoogleMap";
import RecentSeller from "../../components/recentSeller/RecentSeller";
import Message from "../../components/messages/Message";

export default function DemoNine() {
  return (
    <div className="p-10 grid grid-cols-12 gap-5 bg-gray-200">
      <CongratulationsCard />
      <SalesOverview />
      <Card />
      <TaskList />
      <MarketingCampaign />
      <Todo />
      <TeamMembers />
      <Profile />
      <MediaTraffic />
      <GoogleMapContainer />
      <RecentSeller />
      <Message />
    </div>
  );
}
