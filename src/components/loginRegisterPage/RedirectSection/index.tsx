import {
  RedirectLink,
  SectionDivider,
  RedirectLabel,
} from "./styledComponents";

interface RedirectSectionProps {
  label: string;
  redirectLabel: string;
  redirectTo: string;
}

const RedirectSection = ({
  label,
  redirectLabel,
  redirectTo,
}: RedirectSectionProps) => {
  return (
    <div>
      <SectionDivider />
      <RedirectLabel>
        {label + " "}
        <span>
          <RedirectLink to={redirectTo}>{redirectLabel}</RedirectLink>
        </span>
      </RedirectLabel>
    </div>
  );
};

export default RedirectSection;
