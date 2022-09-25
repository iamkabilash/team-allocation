import { Link } from "react-router-dom";

const Nav = () =>{
    return (
        <nav className="w-screen bg-green-100">
            <ul className="w-screen h-[50px] flex flex-row gap-[20px] text-sky-800 font-bold items-center justify-center">
                <li>
                    <Link className="" to="/">Home</Link>
                </li>
                <li>
                    <Link className="" to="/GroupedTeams">Grouped teams</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;