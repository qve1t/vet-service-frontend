import { DashboardWrapper } from "./styledComponents";
import DashboardSidepanel from "./SidePanel";
import DashboardMainArea from "./MainArea";
import DashboardNavbar from "./Navbar";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardNavbar />
      <DashboardSidepanel />
      <DashboardMainArea />
    </DashboardWrapper>
  );
};

export default Dashboard;
