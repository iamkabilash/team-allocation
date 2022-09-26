import React, { useState } from "react";

const GroupedTeams = ({employees, selectTeam, setSelectTeam}) =>{

    const groupTeamMembers = () =>{
        var teams = [];

        var teamAMembers = employees.filter((employee) => employee.teamName === "TeamA");
        var teamA = {team: "TeamA", members: teamAMembers};
        teams.push(teamA);

        var teamBMembers = employees.filter((employee) => employee.teamName === "TeamB");
        var teamB = {team: "TeamB", members: teamBMembers};
        teams.push(teamB);

        var teamCMembers = employees.filter((employee) => employee.teamName === "TeamC");
        var teamC = {team: "TeamC", members: teamCMembers};
        teams.push(teamC);

        var teamDMembers = employees.filter((employee) => employee.teamName === "TeamD");
        var teamD = {team: "TeamD", members: teamDMembers};
        teams.push(teamD);

        return teams;
    }

    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers);

    return (
        <div className="flex flex-col items-center font-bold mt-[40px] mb-[20px]">
            <h1>Grouped teams</h1>
            <div className="w-screen flex flex-wrap gap-[50px] mt-[30px] justify-center">
                {
                    groupedEmployees.map((groupedEmployee) => {
                        return(
                            <div className="w-[300px] bg-sky-200 rounded-lg flex flex-col items-center p-[20px]">
                                <h4>Team name: {groupedEmployee.team}</h4>
                                <hr className="h-[10px]" />
                                {
                                    groupedEmployee.members.map((member) => {
                                        return(
                                            <div className="m-[15px]">
                                                <h5>Full name: {member.fullName}</h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default GroupedTeams;