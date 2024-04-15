
import PostContainer from "../components/PostContainer"
import NavBar from "../components/NavBar"

function Home(props : {user: {username : string,  id : string}}) {
  console.log(props.user)
  return (
    <div className=" w-full h-full flex flex-col bg-slate-400">
      <NavBar/>
  

        <PostContainer
        user_id={props.user.id}
        />

    </div>
  )
}

export default Home