import Search from "../icons/Search"

function SearchBar() {

  function searchSubmit(event : React.SyntheticEvent) {
      event.preventDefault();

      const target = event.target as typeof event.target & {
        search : {value: String}
      }

      console.log(target.search.value)
  }


  return (
    <div className=' bg-red-400 w-96 h-14 rounded-md flex '>
        <div className=" h-14 w-14 p-2">
        <Search/>
        </div>

        <form className=' w-full h-full'>
            <input className=" w-full h-full bg-transparent p-2 text-white placeholder:text-white outline-none" type='text' name='search' placeholder='Search'/>
        </form>
    </div>
  )
}

export default SearchBar