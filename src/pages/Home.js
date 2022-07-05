import React from "react";
import DataUser from "../components/DataUser";

const Home = ( props) => {
    
    

    return (
        <div >
            {props.idLogin ?<DataUser idLogin={props.idLogin}/> : "You ar not logged in "}
        </div>
    );
};

export default Home;