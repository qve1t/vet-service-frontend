import { NavbarSectionLink, NavbarSectionWrapper } from "./styledComponents";

export const VisitsSection = () => (
  <NavbarSectionWrapper>
    <NavbarSectionLink data-testid="visits-list-id" to="/dashboard/visits">
      Visits list
    </NavbarSectionLink>
    <NavbarSectionLink data-testid="new-visit-id" to="/dashboard/visits/new">
      New visit
    </NavbarSectionLink>
  </NavbarSectionWrapper>
);

export const PetsSection = () => (
  <NavbarSectionWrapper>
    <NavbarSectionLink data-testid="pets-list-id" to="/dashboard/pets">
      Pets list
    </NavbarSectionLink>
    <NavbarSectionLink data-testid="new-pet-id" to="/dashboard/pets/new">
      New pet
    </NavbarSectionLink>
  </NavbarSectionWrapper>
);

export const OwnersSection = () => (
  <NavbarSectionWrapper>
    <NavbarSectionLink data-testid="owners-list-id" to="/dashboard/owners">
      Owners list
    </NavbarSectionLink>
    <NavbarSectionLink data-testid="new-owner-id" to="/dashboard/owners/new">
      New owner
    </NavbarSectionLink>
  </NavbarSectionWrapper>
);

export const NotesSection = () => (
  <NavbarSectionWrapper>
    <NavbarSectionLink data-testid="notes-list-id" to="/dashboard/notes">
      Notes list
    </NavbarSectionLink>
    <NavbarSectionLink data-testid="new-note-id" to="/dashboard/notes/new">
      New note
    </NavbarSectionLink>
  </NavbarSectionWrapper>
);

export const MedicinesSection = () => (
  <NavbarSectionWrapper>
    <NavbarSectionLink
      data-testid="medicines-list-id"
      to="/dashboard/medicines"
    >
      Medicines list
    </NavbarSectionLink>
    <NavbarSectionLink
      data-testid="new-medicine-id"
      to="/dashboard/medicines/new"
    >
      New medicine
    </NavbarSectionLink>
  </NavbarSectionWrapper>
);
