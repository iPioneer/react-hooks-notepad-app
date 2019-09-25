import React, { Fragment } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { Alert } from "../components/Alert";

export const Home = () => {
  const notes = new Array(3)
    .fill('')
    .map((_,i) => {
      return (
        { id: i, title: `Note ${i + 1}`})
    })

  return (
    <Fragment>      
      <Form />
      <hr />
      <Notes notes={notes}/>
    </Fragment>
  );
};
