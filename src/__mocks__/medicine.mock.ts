import { FetchResponse } from "../api/interfaces/fetch";
import { MedicineRegisterResponse } from "../api/interfaces/medicine";

const medicineRegisterResponseMock: MedicineRegisterResponse = {
  id: "medicineId",
  status: "ok",
};

export const successMedicineRegisterResponseMock: FetchResponse<MedicineRegisterResponse> =
  {
    response: medicineRegisterResponseMock,
    error: null,
  };
