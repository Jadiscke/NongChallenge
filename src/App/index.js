import React from "react";
import Layout from "../components/Layout";
import Routes from "../routes";
import UserProvider from "../context/User";

function App() {
  return (
    <Layout>
      <UserProvider>
        <Routes />
      </UserProvider>
    </Layout>
  );
}

export default App;
