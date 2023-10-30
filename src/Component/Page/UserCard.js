import React, { useState } from "react";
const UserCard=(props)=>{
  const toggleModal=()=>{
    props.setData(
      {
        name:props.data.name,phone:props.data.phone,
        email:props.data.email,hire_date:props.data.hire_date,
        position_name:props.data.position_name,
        department:props.data.department})
    props.setModal(!props.modal)
  }

    return(
      <div className="user-card"  onClick={toggleModal}>
            <p>{props.data.name}</p>
            <div className="user-data" >
              <div className="element">
                <div className="img">
                  <img src="https://i.postimg.cc/MT7pRHB9/Union.png" />
                </div>
                <div className="value">{props.data.phone}</div>
              </div>
              <div className="element">
                <div className="img">
                  <img src="https://i.postimg.cc/7Y7qdfhX/Union.png" />
                </div>
                <div className="value">{props.data.email}</div>
              </div>
            </div>
          </div>
    )
}
export default UserCard;