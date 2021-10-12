import { Switch, Route } from "react-router";
import { DashboardMainAreaWrapper } from "./styledComponents";
import { DeletePopupModule } from "../../../modules/DeletePopupModule";

import {
  NewVisitPanel,
  NewPetPanel,
  NewOwnerPanel,
  NewNotePanel,
  NewMedicinePanel,
} from "../../DashboardNewPanels";
import {
  PetsListPanel,
  OwnersListPanel,
  VisitsListPanel,
  NotesListPanel,
  MedicinesListPanel,
} from "../../DashboardListPanels";
import {
  PetsDetailsPanel,
  OwnersDetailsPanel,
  VisitsDetailsPanel,
  MedicineDetailsPanel,
} from "../../DashbordDetailsPanels";
import DashboardMainPanel from "./DashboardMainPanel";

const DashboardMainArea = () => {
  return (
    <DeletePopupModule>
      <DashboardMainAreaWrapper>
        <Switch>
          <Route path="/dashboard/visits/new" component={NewVisitPanel} />
          <Route path="/dashboard/pets/new" component={NewPetPanel} />
          <Route path="/dashboard/owners/new" component={NewOwnerPanel} />
          <Route path="/dashboard/notes/new" component={NewNotePanel} />
          <Route path="/dashboard/medicines/new" component={NewMedicinePanel} />
          <Route path="/dashboard/visits/:id" component={VisitsDetailsPanel} />
          <Route path="/dashboard/pets/:id" component={PetsDetailsPanel} />
          <Route path="/dashboard/owners/:id" component={OwnersDetailsPanel} />
          <Route
            path="/dashboard/medicines/:id"
            component={MedicineDetailsPanel}
          />
          <Route path="/dashboard/visits" component={VisitsListPanel} />
          <Route path="/dashboard/pets" component={PetsListPanel} />
          <Route path="/dashboard/owners" component={OwnersListPanel} />
          <Route path="/dashboard/medicines" component={MedicinesListPanel} />
          <Route path="/dashboard/notes" component={NotesListPanel} />
          <Route path="/dashboard" component={DashboardMainPanel} />
        </Switch>
      </DashboardMainAreaWrapper>
    </DeletePopupModule>
  );
};

export default DashboardMainArea;
