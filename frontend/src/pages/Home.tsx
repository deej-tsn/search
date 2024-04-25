
import PostContainer from "../components/PostContainer"
import NavBar from "../components/NavBar"
import { useSearchParams } from "react-router-dom"

function Home(props : {user: {username : string,  id : string}}) {
  const [searchParam] = useSearchParams();
  
  if (searchParam.size!=0) {
    console.log(Object.fromEntries(searchParam.entries()))
    
  }
  return (
    <div className=" w-full h-full flex flex-col">
      <NavBar/>
  

        <PostContainer
        user_id={props.user.id}
        />

    </div>
  )
}

export default Home