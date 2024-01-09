import Sidebar from "./Sidebar";
import Header from "./Header";
import Frame from "./Frame";

const Dashboard = () => {
  return (
    <div className="flex w-[1440px] h-[1552px] bg-[#FAFAFA]">
      <Sidebar />
      <div>
        <Header />
        <div className="p-10">
        <Frame />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
