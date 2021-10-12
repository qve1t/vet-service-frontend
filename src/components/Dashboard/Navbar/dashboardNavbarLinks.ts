import { VerticalMenuLinkInterface } from "../../VerticalNavbar";

export const DASHBOARD_NAVBAR_LINKS: VerticalMenuLinkInterface[] = [
  {
    label: "Home",
    linkTo: "/dashboard",
  },
  {
    label: "Visits",
    linkTo: "/dashboard/visits",
  },
  {
    label: "New visit",
    linkTo: "/dashboard/visits/new",
  },
  {
    label: "Pets",
    linkTo: "/dashboard/pets",
  },
  {
    label: "New pet",
    linkTo: "/dashboard/pet/new",
  },
  {
    label: "Owners",
    linkTo: "/dashboard/owners",
  },
  {
    label: "New owner",
    linkTo: "/dashboard/owners/new",
  },
  {
    label: "Notes",
    linkTo: "/dashboard/notes",
  },
  {
    label: "New note",
    linkTo: "/dashboard/notes/new",
  },
  {
    label: "Medicines",
    linkTo: "/dashboard/medicines",
  },
  {
    label: "New medicine",
    linkTo: "/dashboard/medicines/new",
  },
];
