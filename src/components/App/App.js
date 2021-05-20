import "./App.css";
import Banner from "../Banner/Banner";
import SongsList from "../SongsList/SongsList";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Banner/Home/Home";
import ArtistDetails from "../ArtistDetails/ArtistDetails";
import {songsData} from "../Datas/songsData"

function App() {
    const [search, setSearch] = useState("");

    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <Banner search={search} setSearch={setSearch} />

                    <Route exact path="/" component={Home} />
                    <Route exact path="/hip-hop">
                        <SongsList search={search} setSearch={setSearch} />
                    </Route>
                    <Route
                        exact
                        path={"/hip-hop/:artist"}
                        component={ArtistDetails}
                    />
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
