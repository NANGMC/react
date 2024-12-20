import './css/product.css'
import download from './assets/download.png'
import React from 'react';


function imgStyle(location) {

}
const Product = (name) => {
    return (<>
        <div aria-hidden='true' className="comm">
            <div aria-hidden='true' className="pro-container">
            
                <img className='pro-item' src={download} alt="no a" />
                <img className='pro-item' src={download} alt="no b" />
                <img className='pro-item' src={download} alt="no c" />
                
            
                
        </div>
        </div>
        
    </>);
}

export default Product