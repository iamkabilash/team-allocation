import React from "react";

const Header = ({teamCount, selectTeam}) =>{
    console.log(selectTeam)
    return (
        <div>
            <h1 className="text-orange-700">Team allocation</h1>
            <h2>{selectTeam} has {teamCount} members.</h2>
        </div>
    );
}

export default Header;