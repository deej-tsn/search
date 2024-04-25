import { useEffect, useState } from "react";
import { getPosts} from "../hooks/PostService";
import Post from "./Post";

function PostContainer(props : {user_id : string}) {

  const[loaded, setLoaded] : any = useState();

  useEffect(() => {
    getPosts().then((response) => {
      if(response){
        console.log(response);
        let posts = Array.from(response).map((row : any, index:number) =><Post
        key={index}
        title={row.title}
        body = {row.body}
        image = {"test"}/> )
        setLoaded(posts)
      }else{
        setLoaded(null);
      }
    })
  }, [])

  if(loaded === undefined) return <div className="w-full h-full flex justify-center items-center text-9xl"> Loading</div>

  return loaded
    ? <div id="post-container" className="mt-20 w-full h-full p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">{loaded}</div>
    : <div>X</div>
  
}

export default PostContainer