import { useNavigate } from "react-router-dom";

function CreatePost( props: {user : {username : string ,id : string}}){

    let nav  = useNavigate();

    async function insertPOST(event : React.SyntheticEvent) {
        event.preventDefault();
        console.log(event);

        const target = event.target as typeof event.target & {
            title : {value : string}
            body : {value : string}
        }
    
        const data = {
            title : target.title.value,
            body : target.body.value,
            imageURL : "",
            author : props.user.id
        }
        console.log(data);
    
        let responseMessages = await fetch('http://localhost:1323/posts/createPost',{
            method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), 
        });
        
        
        if(responseMessages.ok){
            console.log("success")
            nav("/")
        }else{
            const res = await  responseMessages.json();
            console.log(res)
        }

    }

    return (
        <div className=" w-full h-full flex justify-center items-center p-2 bg-slate-400">
            <div className="w-full h-fit sm:w-3/4 md:w-3/5 lg:w-[600px] rounded-2xl drop-shadow-lg bg-white p-4">
                <form className=" w-full flex flex-col items-center" onSubmit={insertPOST}>
                    <div className="w-full flex flex-col mb-5">
                        <input className = "p-2 rounded-lg border mb-5" type="text" name="title" required id="title" placeholder="Title"/>
                        <textarea className = "p-2 rounded-lg border mb-5" name="body" required id="body" placeholder="Body"/>
                    </div>
                    <button className="p-2 w-full bg-blue-500 text-white text-xl rounded-lg m-auto cursor-pointer transition-colors hover:bg-blue-700" type="submit">Create Post</button>
                </form>
            
            </div>

        </div>
    )
}

export default CreatePost