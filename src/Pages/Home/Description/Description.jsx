import React from 'react';
import description from '../../../assets/home/description.jpg'
const Description = () => {
    return (
        <div>
            <div className='max-w-screen-xl mt-72 mb-96'>
            <img src={description} alt="" />
            <div className='-mt-96 text-center bg-contain'>
            <h2>UPTOWN EATS</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ut maxime dolorum provident fugit tempora sint culpa, ex quasi doloremque labore consequuntur mollitia? Totam consequuntur, exercitationem illo expedita sed veniam eligendi fuga necessitatibus facilis deleniti nulla, numquam atque cupiditate!</p>
            </div>
        </div>
        </div>
    );
};

export default Description;