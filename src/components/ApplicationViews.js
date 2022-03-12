import React from "react";
import { Route } from "react-router-dom";



export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        {/* <ProfileProvider>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </ProfileProvider>

        <GameProvider>
          <Route exact path="/">
            <GameList />
          </Route>
          <Route exact path="/games/new">
            <GameForm />
          </Route>
        </GameProvider>
        
        <EventProvider>
          <Route exact path="/events">
            <EventList />
          </Route>
          <Route exact path="/events/new">
            <EventForm />
          </Route>
        </EventProvider> */}
      </main>
    </>
  );
};