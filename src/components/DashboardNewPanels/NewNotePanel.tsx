import { useState } from "react";
import { useHistory } from "react-router";
import { SubmitHandler } from "react-hook-form";
import { registerNewNoteApi } from "../../api/note";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";

import { NewNoteForm } from "../Forms";
import { NoteFormRegisterInterface } from "../Forms/Note/NewNoteForm";

const NewNotePanel = () => {
  const [error, setError] = useState<string | null>("");
  const history = useHistory();

  const onSubmit: SubmitHandler<NoteFormRegisterInterface> = async (
    data,
    event,
  ) => {
    event?.preventDefault();
    setError("");
    const registerResponse = await registerNewNoteApi({
      dateTime: data.dateTime,
      text: data.text,
      petId: data.petObj?.id,
      ownerId: data.ownerObj?.id,
    });
    if (registerResponse.response) {
      history.push(`/dashboard/notes`);
    } else {
      setError(registerResponse.error);
    }
  };

  return (
    <>
      <MainAreaHeader>Add new note</MainAreaHeader>
      <NewNoteForm onSubmit={onSubmit} />
      {error && <ErrorComponent errorMessage={error} />}
    </>
  );
};

export default NewNotePanel;
