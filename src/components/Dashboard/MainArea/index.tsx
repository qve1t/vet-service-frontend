import { Switch, Route } from "react-router";
import { DashboardMainAreaWrapper } from "./styledComponents";

const Visits = () => <div>Section VISITs</div>;
const Pets = () => <div>Section PETS</div>;
const Owners = () => <div>Section OWNERS</div>;
const Notes = () => <div>Section NOTES</div>;

const DashboardMainArea = () => {
  return (
    <DashboardMainAreaWrapper>
      <Switch>
        <Route path="/dashboard/visits" component={Visits} />
        <Route path="/dashboard/pets" component={Pets} />
        <Route path="/dashboard/owners" component={Owners} />
        <Route path="/dashboard/notes" component={Notes} />
      </Switch>
    </DashboardMainAreaWrapper>
  );
};

export default DashboardMainArea;
