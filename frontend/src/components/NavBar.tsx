import { useNavigate } from "react-router-dom";
import { removeTokenFromCookies } from "../hooks/CookieService";
import SearchBar from "./SearchBar";


function NavBar() {
    let navigator = useNavigate();

    function logOut(){
        removeTokenFromCookies();
        return navigator("/login");
    }
    return (
        <div className=" w-full h-fit drop-shadow-lg bg-red-300 p-2 mb-3 flex flex-row">
            <div className="w-full flex items-center justify-center relative">
                <h1 className="text-xl absolute left-2 text-white">Explorer</h1>
                <SearchBar/>

                <div className="absolute w-fit right-2 text-white rounded-lg py-1 px-3 transition-colors hover:text-neutral-300 cursor-pointer text-xl" onClick={() => logOut()}>
                        Log Out
                </div>


            </div>
        
        </div>
    )
}

export default NavBar