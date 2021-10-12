import { NavbarSectionLink, NavbarSectionWrapper } from "./styledComponents";

export const VisitsSection = () => (
  <NavbarSectionWrapper>
    <NavbarSectionLink to="/dashboard/visits">Visits list</NavbarSectionLink>
    <NavbarSectionLink to="/dashboard/visits/new">New visit</NavbarSectionLink>
  </NavbarSectionWrapper>
);

export const PetsSection = () => (
  <NavbarSectionWrapper>
    <NavbarSectionLink to="/dashboard/pets">Pets list</NavbarSectionLink>
    <NavbarSectionLink to="/dashboard/pets/new">New pet</NavbarSectionLink>
  </NavbarSectionWrapper>
);

export const OwnersSection = () => (
  <NavbarSectionWrapper>
    <NavbarSectionLink to="/dashboard/owners">Owners list</NavbarSectionLink>
    <NavbarSectionLink to="/dashboard/owners/new">New owner</NavbarSectionLink>
  </NavbarSectionWrapper>
);

export const NotesSection = () => (
  <NavbarSectionWrapper>
    <NavbarSectionLink to="/dashboard/notes">Notes list</NavbarSectionLink>
    <NavbarSectionLink to="/dashboard/notes/new">New note</NavbarSectionLink>
  </NavbarSectionWrapper>
);

export const MedicinesSection = () => (
  <NavbarSectionWrapper>
    <NavbarSectionLink to="/dashboard/medicines">
      Medicines list
    </NavbarSectionLink>
    <NavbarSectionLink to="/dashboard/medicines/new">
      New medicine
    </NavbarSectionLink>
  </NavbarSectionWrapper>
);
