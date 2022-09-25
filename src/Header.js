import React from "react";

const Header = ({teamCount, selectTeam}) =>{
    console.log(selectTeam)
    return (
        <div className="flex flex-col items-center mt-[20px]">
            <h1 className="text-2xl font-bold">Team allocation</h1>
            <h2 className="text-xl font-bold">{selectTeam} has {teamCount} members.</h2>
        </div>
    );
}

export default Header;