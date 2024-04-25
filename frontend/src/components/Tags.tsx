

function Tags() {
  return (
    <div className=" bg-red-400 absolute top-12 h-60 w-96 z-40 p-4 ">
        <form className=" w-full">
            <label>Include Results for:</label>
            <div className=" flex">
            <input type="radio" name="include" value="Titles"/> <label> Titles</label>
            <input type="radio" name="include" value="Tags"/> < label> Tags</label>
            <input type="radio" name="include" value="authors"/> <label> Authors</label>

            </div>
            
            


        </form>

    </div>
  )
}

export default Tags