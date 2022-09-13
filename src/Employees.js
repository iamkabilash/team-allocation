import React, { useState } from "react";
import male from "./assets/male.png"
import female from "./assets/female.png"

const Employees = () =>{
    const [selectTeam, setSelectTeam] = useState("Team B");
    const [employees, setEmployees] = useState(
        [{
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
          },
          {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
          },
          {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
          },
          {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
          },
          {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
          },
          {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
          },
          {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
          },
          {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
          },
          {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
          },
          {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
          },
          {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
          },
          {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
          }]
    );

    const handleTeamChange = (event) =>{
      setSelectTeam(event.target.value);
      console.log(event.target.value);
    }

    return (
        <div className="flex flex-col items-center mt-[30px]">
          <div>
            <select value={selectTeam} onChange={handleTeamChange} name="" id="" className="form-select border w-[300px] h-[30px] rounded-lg text-center bg-green-100">
              <option value="Team A">Team A</option>
              <option value="Team B">Team B</option>
              <option value="Team C">Team C</option>
              <option value="Team D">Team D</option>
            </select>
          </div>
          <div className="flex flex-row gap-[25px] flex-wrap w-full items-center justify-center mx-[30px] mt-[50px]">
              {employees.map((employee) => (
                <div className="py-[25px] w-[200px] rounded-lg bg-orange-100 cursor-pointer flex flex-col items-center justify-center text-center">
                  {employee.gender === "male" ? (<img src={male} alt="" />) : (<img src={female} alt="" />)}
                  <h2 className="font-bold mt-[10px] text-lg">{employee.fullName}</h2>
                  <p className="font-semibold text-sm">{employee.designation}</p>
                </div>
              ))}
          </div>
        </div>
    );
}

export default Employees;