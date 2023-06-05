import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import Description from '../Description/Description';
import PopularMenu from '../PopularMenu/PopularMenu';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Description></Description>
            <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Home;