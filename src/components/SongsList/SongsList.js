import React, { useState, useEffect } from "react";
import "./SongsList.css";
import SongItem from "../SongItem./SongItem";
import { songsData } from "../Datas/songsData";

function SongsList({ search }) {
    const [filtredSongs, setFiltredSongs] = useState([]);

    useEffect(() => {
        setFiltredSongs(
            songsData.filter((songs) =>
                songs.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search]);

    return (
        <div className="dt-songs-box">
            <div className="dt-songs-container">
                {filtredSongs.map(
                    ({ title, cover, artist, link, year, id }) => (
                        <ul key={id}>
                            <SongItem
                                title={title}
                                cover={cover}
                                artist={artist}
                                link={link}
                                year={year}
                            />
                        </ul>
                    )
                )}
            </div>
        </div>
    );
}

export default SongsList;
