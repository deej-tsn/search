import Search from "../icons/Search"
import DownArrow from "../icons/DownArrow"
import Tags from "./Tags"
import { useState } from "react";

function SearchBar() {
  const [clicked, setClickedState] = useState(false);
  return (
    <div className="relative z-10">
      <div className=' bg-red-400 w-96 h-14 rounded-md flex '>
        <div className=" h-14 w-14 p-2">
        <Search/>
        </div>

        <form className=' w-full h-full text-white'>
            <input className=" w-full h-full bg-transparent p-2  placeholder:text-white outline-none" type='text' name='search' placeholder='Search'/>

            {clicked && <div className=" bg-red-400 absolute top-12 left-0 h-60 w-96 z-40 p-4 rounded-b-md">
              <label>Include Results for:</label>
              <div className=" flex w-full justify-evenly">
                <input type="checkbox" name="include" value="Titles"/> <label> Titles</label>
                <input type="checkbox" name="include" value="Tags"/> <label> Tags</label>
                <input type="checkbox" name="include" value="authors"/> <label> Authors</label>

              </div>
              <label>Sort By:</label>
              <div className=" flex w-full justify-evenly">
                <input type="checkbox" name="include" value="Titles"/> <label>Newest</label>
                <input type="checkbox" name="include" value="Tags"/> <label>Oldest</label>
                <input type="checkbox" name="include" value="authors"/> <label>Popular</label>

              </div>
            </div>}
        </form>
        <div className=" h-full cursor-pointer " onClick={()=> setClickedState(!clicked)}>
          <DownArrow clicked={clicked}/>
        </div>
        
    
      </div>

    </div>
    
  )
}

export default SearchBar