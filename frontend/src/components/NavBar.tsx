import { useNavigate } from "react-router-dom";
import { removeTokenFromCookies } from "../hooks/CookieService";


function NavBar() {
    let navigator = useNavigate();

    function logOut(){
        removeTokenFromCookies();
        return navigator("/login");
    }
    return (
        <div className=" w-full h-fit drop-shadow-lg bg-white p-4 mb-3 flex flex-row">
            <div className="w-full flex items-center justify-center relative">
                <h1 className="text-xl p-2 ">Explorer</h1>

                <div className="absolute w-fit right-2 bg-lime-400 rounded-lg py-2 px-3 transition-colors hover:bg-lime-600 cursor-pointer text-xl" onClick={() => logOut()}>
                        Log Out
                </div>


            </div>
        
        </div>
    )
}

export default NavBar