import React from 'react';
import './App.css';

import Layout from "./components/layout/Layout";
import Heading from "./components/layout/Heading";
import NewsList from "./components/news/NewsList";
import HomeContent from "./components/home/HomeContent";


function App() {
  return (
    <Layout>
      <HomeContent>
        <Heading content="This is a header" />
        <NewsList/>
      </HomeContent>
    </Layout>
  );
}

export default App;
