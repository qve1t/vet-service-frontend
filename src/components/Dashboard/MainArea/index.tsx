import { Switch, Route } from "react-router";
import { DashboardMainAreaWrapper } from "./styledComponents";

import {
  NewVisitPanel,
  NewPetPanel,
  NewOwnerPanel,
} from "../../DashboardNewPanels";
import { PetsListPanel, OwnersListPanel } from "../../DashboardListPanels";
import {
  PetsDetailsPanel,
  OwnersDetailsPanel,
} from "../../DashbordDetailsPanels";

const Visits = () => <div>Section VISITs</div>;
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
        <Route path="/dashboard/visits/:id" component={PetsDetailsPanel} />
        <Route path="/dashboard/pets/:id" component={PetsDetailsPanel} />
        <Route path="/dashboard/owners/:id" component={OwnersDetailsPanel} />
        <Route path="/dashboard/visits" component={Visits} />
        <Route path="/dashboard/pets" component={PetsListPanel} />
        <Route path="/dashboard/owners" component={OwnersListPanel} />
        <Route path="/dashboard/notes" component={Notes} />
      </Switch>
    </DashboardMainAreaWrapper>
  );
};

export default DashboardMainArea;
