import { useNavigate } from "react-router-dom"
import PostContainer from "./PostContainer"
import { removeTokenFromCookies } from "../hooks/CookieService";
import { capitalizeFirstLetter } from "../class/StringEdit";

function Home(props : {user: {username : string,  id : string}}) {
  console.log(props.user)
  let navigator = useNavigate();
  return (
    <div className=" w-full h-full flex flex-col bg-slate-400">
        <div className=" w-full h-fit drop-shadow-lg bg-white p-4 mb-3 flex flex-row">
          <div className="flex flex-grow items-center">
            <h1 className="text-xl">{`Hi ${capitalizeFirstLetter(props.user.username)} | ${capitalizeFirstLetter(props.user.id)} is your current rank`}</h1>
          </div>
          <div className=" bg-lime-400 rounded-lg py-2 px-3 transition-colors hover:bg-lime-600 cursor-pointer" onClick={() => {
            removeTokenFromCookies();
            return navigator("/login");
          }}>
              Log Out
          </div>
        </div>

        <PostContainer
        user_id="9"
        />

    </div>
  )
}

export default Home