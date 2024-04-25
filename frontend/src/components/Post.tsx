
import { capitalizeFirstLetter } from "../class/StringEdit";
function Post(props : {title : string , image : any, body: string}) {
  return (
    <div className=" w-full sm:w-64 lg:w-96 h-96 rounded-lg drop-shadow-lg bg-slate-300 my-2 transition-colors hover:bg-slate-500 flex flex-col overflow-hidden p-2 z-0">
        <h1 className=" ml-5 mt-5 text-wrap break-words text-xl">{capitalizeFirstLetter(props.title)}</h1>
        {props.image !== "test" && <img className = "m-auto" src={props.image} width={384} height={200}/>}
        
    </div>
  )
}

export default Post