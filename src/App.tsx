import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import CardsList from './components/CardsList/CardList';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import './App.less';
// import { GenericList } from './ts/GenericList';

const App: React.FC = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
            </Content>
        </Layout>
    );
};

export default App;
