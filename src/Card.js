
import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div>
        <div className='card'>

            <div style={{
                    backgroundColor : props.bgColor
                }} className='card-color'>
            </div>

            <div className='card-details'>
                <p className='hex-code'>{props.hexCode}</p>
                <p className='color-name'>{props.colorName}</p>
            </div>

        </div>
    </div>
  )
}

export default Card
