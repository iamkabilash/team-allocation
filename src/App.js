import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";
import GroupedTeams from "./GroupedTeams";
import Nav from "./Nav";
import NotFound from "./NotFound";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [selectTeam, setSelectTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectTeam));
  }, [selectTeam]);

  const handleTeamSelectionChange = (event) => {
    setSelectTeam(event.target.value);
    console.log(event.target.value);
  };

  const handleCardClick = (event) => {
    console.log(event.currentTarget.id);
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  };

  return (
      <Router>
        <Nav />
        <Header
          selectTeam={selectTeam}
          teamCount={
            employees.filter((employee) => employee.teamName === selectTeam)
              .length
          }
        />
        <Routes>
          <Route path="/" element={
            <Employees
            selectTeam={selectTeam}
            employees={employees}
            handleTeamSelectionChange={handleTeamSelectionChange}
            handleCardClick={handleCardClick}
          />
          }>
          </Route>
          <Route path="/GroupedTeams" element={
            <GroupedTeams employees = {employees} 
              selectTeam = {selectTeam} 
              setSelectTeam = {setSelectTeam} 
            />
          }>
          </Route>
          <Route path="*" element={
            <NotFound />
          }>
          </Route>
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
