import React from 'react';
import Layout from './components/Layout/Layout';
import CardsList from './components/CardsList/CardList';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import './App.less';

const accessToken = new URLSearchParams(window.location.hash).get('#access_token');

if (accessToken) {
    localStorage.setItem('access_token', accessToken);
}

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
