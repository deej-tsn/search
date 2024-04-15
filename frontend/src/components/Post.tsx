
import { capitalizeFirstLetter } from "../class/StringEdit";
function Post(props : {title : string , image : any, body: string}) {
  return (
    <div className="w-96 rounded-lg drop-shadow-lg bg-slate-300 m-2 transition-colors hover:bg-slate-500 flex flex-col overflow-hidden">
        {props.image !== "test" && <img className = "m-auto" src={props.image} width={384} height={200}/>}
        <div className=" w-full h-10 flex flex-row m-2">
            <h1 className=" w-40 text-wrap break-words">{capitalizeFirstLetter(props.title)}</h1>
            <h3 className={`m-2 rounded-lg p-2 text-center my-auto mx-auto`}>{`Class : ${capitalizeFirstLetter(props.title)}`}</h3>
        </div>
        <hr className="h-1 rounded-lg opacity-5 bg-black text-black"/>
        
    </div>
  )
}

export default Post