import React, { useState } from "react";
import "./SongItem.css";
import { FiPlayCircle } from "react-icons/fi";
import StarRate from "../StarRate/StarRate";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

function SongItem({ title, cover, artist, link, year }) {
    const [like, setLike] = useState(false);
    const handelClick = () => {
        setLike(!like);
    };
    return (
        <div className="dt-item-box">
            <li className="box">
                <img src={cover} alt="cover_photo" className="dt-cover" />
                <div className="item-infos">
                    <h1>{title}</h1>
                    <Link to={`/hip-hop/${artist}`}>
                        <h2>{artist}</h2>
                    </Link>

                    <h3>{year}</h3>
                    <button type="button" className="play-btn">
                        <a href={link} target="_blank" rel="noreferrer">
                            <FiPlayCircle size={30} />
                        </a>
                        <span>Play</span>
                    </button>
                </div>
            </li>
            <StarRate />
            <form>
                <label>
                    <input
                        type="checkbox"
                        name="like"
                        onClick={() => handelClick()}
                    />
                    <AiFillLike size={30} color={like ? "#00ffff" : null} />
                </label>
            </form>
        </div>
    );
}

export default SongItem;
