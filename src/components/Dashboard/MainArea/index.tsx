import { Switch, Route } from "react-router";
import { DashboardMainAreaWrapper } from "./styledComponents";

const Visits = () => <div>Section VISITs</div>;
const VisitsNEW = () => <div>Section VISITs NEW</div>;
const Pets = () => <div>Section PETS</div>;
const PetsNEW = () => <div>Section PETS NEW</div>;
const Owners = () => <div>Section OWNERS</div>;
const OwnersNEW = () => <div>Section OWNERS NEW</div>;
const Notes = () => <div>Section NOTES</div>;
const NotesNEW = () => <div>Section NOTES NEW</div>;

const DashboardMainArea = () => {
  return (
    <DashboardMainAreaWrapper>
      <Switch>
        <Route path="/dashboard/visits/new" component={VisitsNEW} />
        <Route path="/dashboard/pets/new" component={PetsNEW} />
        <Route path="/dashboard/owners/new" component={OwnersNEW} />
        <Route path="/dashboard/notes/new" component={NotesNEW} />
        <Route path="/dashboard/visits" component={Visits} />
        <Route path="/dashboard/pets" component={Pets} />
        <Route path="/dashboard/owners" component={Owners} />
        <Route path="/dashboard/notes" component={Notes} />
      </Switch>
    </DashboardMainAreaWrapper>
  );
};

export default DashboardMainArea;
