import React from 'react';
import Feature from './Components/Feature';
import Services from './Services/Services';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Feature/>
            <Services/>
            <Stat/>
        </div>
    );
};

export default Home;