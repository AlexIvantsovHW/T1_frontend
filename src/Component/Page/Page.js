import React, { useEffect, useState } from "react";
import "./style.css";
import UserCard from "./UserCard";
import { searchLink } from "./Functions";
import axios from "axios";
import Modal from "./Modal";

const Page = () => {
    const [search, setSearch] = useState(""),
          [userData,setUserData]=useState(''),
          [modal,setModal]=useState(false),
          [data,setData]=useState(''),
          filteredUsers = searchLink(search, userData);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:3000/");
            setUserData(response.data)
            console.log(response.data)
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
let Users=filteredUsers.map((e)=>{return <UserCard data={e} modal={modal} setModal={setModal} setData={setData}/>})
    return (
      <>
    <div className={"container"}>
      <div className="page-container">
        <div className="input-container">
          <input type="text" onChange={(e) => setSearch(e.target.value)}/>
          <i className="fa" aria-hidden="true"></i>
        </div>
        <div className="user-container">
          {Users} 
        </div>
      </div>
    </div>
     {modal===false?null:<Modal modal={modal} setModal={setModal} data={data}/>}
    </>
  );
};
export default Page;
