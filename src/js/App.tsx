import React, { useState } from 'react';
import CardsList from '../components/CardsList/CardsList';
import Content from '../components/Content/Content';
import { Dropdown } from '../components/Dropdown';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import { GenericList } from '../ts/GenericList';

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      <Dropdown 
      onClose={() => console.log('close')} 
      onOpen={() => console.log('Opened')} 
      Open={false} 
      button={<button>Test</button>}
      >
    qwe
      </Dropdown>
      </Content>
    </Layout>
  )
}

export default App