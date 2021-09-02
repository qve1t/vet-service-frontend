export interface OwnerInterface {
  name: string;
  surname: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  pets: {
    id: string;
    name: string;
    type: string;
  }[];
  notes: { id: string; text: string; dateTime: Date }[];
}

export interface RegisterOwnerInterface {
  name: string;
  surname: string;
  phone?: string;
  email?: string;
  address?: string;
}

export interface OwnerInfoToUpdateInterface {
  id: string;
  phone?: string;
  email?: string;
  address?: string;
}

export interface OwnerListInterface {
  id: string;
  name: string;
  surname: string;
}

export interface OwnerQueryInterface {
  page: number;
  limit: number;
  nameSurname: string;
}

export interface AssignPetToOwnerInterface {
  ownerId: string;
  petId: string;
}

export type GetOwnerResponse = OwnerInterface;

export type GetAllOwnersResponse = {
  id: string;
  name: string;
  surname: string;
};

export interface OwnerRegisterResponse {
  id: string;
  status: string;
}

export type OwnerListResponse = {
  results: OwnerListInterface[];
  count: number;
};

export type OwnerDeleteResponse = OwnerRegisterResponse;

export type OwnerUpdateResponse = OwnerRegisterResponse;

export type AssignPetToOwnerResponse = OwnerRegisterResponse;
