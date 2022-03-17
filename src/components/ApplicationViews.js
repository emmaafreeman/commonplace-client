import React from "react";
import { Route } from "react-router-dom";
import { CommonplaceProvider } from "./entry/CommonplaceProvider";
import { EntrySearch } from "./entry/EntrySearch";
import { EntryDetail } from "./entry/EntryDetail";
import { EditEntryForm } from "./entry/EditEntryForm";
import { AddEntryForm } from "./entry/AddEntryForm";


export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <CommonplaceProvider>
          <Route exact path="/">
            <EntrySearch />
          </Route>

          <Route exact path="/entries/detail/:entryId">
            <EntryDetail />
          </Route>

          <Route path="/entries/edit/:entryId">
            <EditEntryForm />
          </Route>

          <Route path="/entries/add">
            <AddEntryForm />
          </Route>
        </CommonplaceProvider>
      </main>
    </>
  );
};