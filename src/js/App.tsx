import React, { useState } from 'react';
import CardsList from '../components/CardsList/CardsList';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  )
}

export default App