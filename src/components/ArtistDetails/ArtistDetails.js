import React, {useEffect, useState} from "react";
import {songsData} from "../Datas/songsData"

function ArtistDetails({ match }) {
    console.log("match", match)
    const [singer, setSinger]= useState({})
    useEffect(() => {
        setSinger(
            songsData.find((singer) => singer.artist === match.params.artist)
        );
    }, [match.params.artist]);
    return (
        <div>
            {match.params.artist}
            <h1>{singer.artist}</h1>
        </div>
    );
}

export default ArtistDetails;
