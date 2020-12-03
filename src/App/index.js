import React from "react";
import Layout from "../components/Layout";
import Routes from "../routes";
import UserProvider from "../context/User";
import NotesProvider from "../context/Notes";

function App() {
  return (
    <UserProvider>
      <Layout>
        <NotesProvider>
          <Routes />
        </NotesProvider>
      </Layout>
    </UserProvider>
  );
}

export default App;
