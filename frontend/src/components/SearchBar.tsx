
function SearchBar() {
  return (
    <div className=' bg-red-400 w-96 h-14 rounded-md'>
        <form className=' w-full h-full'>
            <input className=" w-full h-full bg-transparent p-2 text-white placeholder:text-white" type='text' name='search' placeholder='Search'></input>
        </form>
    </div>
  )
}

export default SearchBar