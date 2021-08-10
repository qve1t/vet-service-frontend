import { Switch, Route } from "react-router";
import { DashboardMainAreaWrapper } from "./styledComponents";

import NewPetPanel from "../../MainDashboardPanels/NewPetPanel";
import NewOwnerPanel from "../../MainDashboardPanels/NewOwnerPanel";
import NewVisitPanel from "../../MainDashboardPanels/NewVisitPanel";

const Visits = () => <div>Section VISITs</div>;
const Pets = () => <div>Section PETS</div>;
const Owners = () => <div>Section OWNERS</div>;
const Notes = () => <div>Section NOTES</div>;
const NotesNEW = () => <div>Section NOTES NEW</div>;

const DashboardMainArea = () => {
  return (
    <DashboardMainAreaWrapper>
      <Switch>
        <Route path="/dashboard/visits/new" component={NewVisitPanel} />
        <Route path="/dashboard/pets/new" component={NewPetPanel} />
        <Route path="/dashboard/owners/new" component={NewOwnerPanel} />
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
