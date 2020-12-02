import React from "react";
import Layout from "../components/Layout";
import Routes from "../routes";
import UserProvider from "../context/User";

function App() {
  return (
    <UserProvider>
      <Layout>
        <Routes />
      </Layout>
    </UserProvider>
  );
}

export default App;
