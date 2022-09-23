import male from "./assets/male.png"
import female from "./assets/female.png"

const Employees = ({selectTeam, employees, handleTeamSelectionChange, handleCardClick}) =>{

    return (
        <div className="flex flex-col items-center mt-[30px]">
          <div>
            <select value={selectTeam} onChange={handleTeamSelectionChange} name="" id="" className="form-select border w-[300px] h-[30px] rounded-lg text-center bg-sky-100">
              <option value="TeamA">Team A</option>
              <option value="TeamB">Team B</option>
              <option value="TeamC">Team C</option>
              <option value="TeamD">Team D</option>
            </select>
          </div>
          <div className="flex flex-row gap-[25px] flex-wrap w-full items-center justify-center mx-[30px] mt-[50px]">
              {employees.map((employee) => (
                <div onClick={handleCardClick} key={employee.id} id={employee.id} className={employee.teamName === selectTeam ? "border-2 border-black py-[25px] w-[200px] rounded-lg bg-green-100 cursor-pointer flex flex-col items-center justify-center text-center" : "py-[25px] w-[200px] rounded-lg bg-orange-100 cursor-pointer flex flex-col items-center justify-center text-center"} >
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