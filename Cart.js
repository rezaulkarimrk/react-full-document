import React from "react";

// const creator="created by RK";
// const todoDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const date=new Date();
const currentYear = date.getFullYear();
const dateName= date.getDate();
const montName=date.getMonth();

function Cart(props){
  const {titleText, descriptionText}=props;
  return <div className='cart'>
            <h2 className='cartTitle' >{titleText}</h2>
            <p className='cartDescription'>{descriptionText}</p>
            <p className="cartFooter">{`${dateName}/${montName}/${currentYear}`}</p>
        </div>
}

export default Cart;