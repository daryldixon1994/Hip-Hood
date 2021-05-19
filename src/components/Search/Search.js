import "./Search.css";
function Search({search, setSearch}) {
    
    
    return (
        <div>
            <input
                type="text"
                placeholder="search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default Search;
