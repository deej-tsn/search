function AddPost() {

    function createPOST(event : React.SyntheticEvent) {
        event.preventDefault();
    }

  return (
    <div className=" w-full h-full flex justify-center items-center p-2 bg-slate-400">
        <div className="w-full h-fit sm:w-3/4 md:w-3/5 lg:w-[600px] rounded-2xl drop-shadow-lg bg-white p-4">
            <form className=" w-full flex flex-col items-center" onSubmit={createPOST}>
                <div className="w-full flex flex-col mb-5">
                    <input className = "p-2 rounded-lg border mb-5" type="text" name="title" required id="title" placeholder="Title"></input>
                    <textarea className = "p-2 rounded-lg border mb-5" name="body" required id="body" placeholder="Body"></textarea>
                    <input type="file" />
                </div>
                <button className="p-2 w-full bg-blue-500 text-white text-xl rounded-lg m-auto cursor-pointer transition-colors hover:bg-blue-700" type="submit">Create Account</button>
            </form>
          
        </div>

    </div>
  )
}

export default AddPost