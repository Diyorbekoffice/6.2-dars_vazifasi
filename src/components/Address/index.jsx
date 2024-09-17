import React from 'react';
import './index.css';

function Address(props) {
    const { address } = props;

    return (
        <div>
            <div className='address'>
                <h3>Addres:</h3>
                <p><span className='radio'></span>{address.region}</p>
                <p><span className='radio'></span>{address.zip}</p>
            </div>
        </div>
    );
}

export default Address;
