import { Link } from "react-router-dom";
import { DashboardNavbarWrapper } from "./styledComponents";

const DashboardNavbar = () => {
  return (
    <DashboardNavbarWrapper>
      <Link to="/dashboard/A" style={{ marginLeft: "15px" }}>
        A
      </Link>
      <Link to="/dashboard/B" style={{ marginLeft: "15px" }}>
        B
      </Link>
      <Link to="/dashboard/C" style={{ marginLeft: "15px" }}>
        C
      </Link>
      <Link to="/dashboard/D" style={{ marginLeft: "15px" }}>
        D
      </Link>
    </DashboardNavbarWrapper>
  );
};

export default DashboardNavbar;
