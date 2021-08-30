export enum PetSexes {
  MALE = "MALE",
  FEMALE = "FEMALE",
  MALE_CASTRATED = "MALE_CASTRATED",
  FEMALE_CASTRATED = "FEMALE_CASTRATED",
}

export interface PetInterface {
  name: string;
  chipId: string | null;
  tatooId: string | null;
  type: string;
  race: string | null;
  age: number | null;
  sex: PetSexes;
  weight: number | null;
  height: number | null;
  length: number | null;
  diseases: string | null;
  others: string | null;
  owner: { id: string; name: string; surname: string } | null;
  visits: { id: string; dateTime: Date; name: string }[];
}

export interface PetRegisterInterface {
  name: string;
  chipId?: string;
  tatooId?: string;
  type: string;
  race?: string;
  age?: string;
  sex: PetSexes;
  weight?: string;
  height?: string;
  length?: string;
  diseases?: string;
  others?: string;
  ownerId?: string;
}

export interface PetInfoToUpdateInterface {
  id: string;
  chipId?: string;
  tatooId?: string;
  race?: string;
  age?: string;
  weight?: string;
  height?: string;
  length?: string;
  diseases?: string;
  others?: string;
  ownerId?: string;
}

export interface PetListInterface {
  id: string;
  name: string;
  type: string;
  owner: {
    id: string;
    name: string;
    surname: string;
  } | null;
}

export interface PetQueryInterface {
  limit: number;
  page: number;
  name: string;
}

export interface AssignOwnerToPetInterface {
  petId: string;
  ownerId: string;
}

export interface PetRegisterResponse {
  id: string;
  status: string;
}

export type PetListResponse = { results: PetListInterface[]; count: number };

export type PetDeleteResponse = PetRegisterResponse;

export type PetUpdateResponse = PetRegisterResponse;

export type AssignOwnerToPetResponse = PetRegisterResponse;
