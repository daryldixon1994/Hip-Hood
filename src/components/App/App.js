import "./App.css";
import Banner from "../Banner/Banner";
import SongsList from "../SongsList/SongsList";
import { useState } from "react";
import {BrowserRouter, Route} from "react-router-dom"
import Home from "../Banner/Home/Home";

function App() {
    const [search, setSearch] = useState("");

    return (
        <BrowserRouter>
            <div className="App">
                <Banner search={search} setSearch={setSearch} />
                
                <Route exact path="/" component={Home} />
                <Route exact path="/hip-hop"><SongsList search={search} setSearch={setSearch} /></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
