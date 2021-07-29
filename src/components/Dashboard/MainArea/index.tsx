import { Switch, Route } from "react-router";
import { DashboardMainAreaWrapper } from "./styledComponents";

const SectionA = () => <div>Section A</div>;
const SectionB = () => <div>Section B</div>;
const SectionC = () => <div>Section C</div>;
const SectionD = () => <div>Section D</div>;

const DashboardMainArea = () => {
  return (
    <DashboardMainAreaWrapper>
      <Switch>
        <Route path="/dashboard/A" component={SectionA} />
        <Route path="/dashboard/B" component={SectionB} />
        <Route path="/dashboard/C" component={SectionC} />
        <Route path="/dashboard/D" component={SectionD} />
      </Switch>
    </DashboardMainAreaWrapper>
  );
};

export default DashboardMainArea;
