import "./StarRate.css";
import { CgSmileSad } from "react-icons/cg";
import { CgSmileNeutral } from "react-icons/cg";
import { CgSmile } from "react-icons/cg";
import { CgSmileMouthOpen } from "react-icons/cg";
import { useState, useEffect } from "react";

function StarRate() {
    const [rating, setRating] = useState(null);
    const [themeOne, setThemeOne] = useState("#dbd5a8");
    const [themeTwo, setThemeTwo] = useState("#dbd5a8");
    const [themeThree, setThemeThree] = useState("#dbd5a8");
    const [themeFour, setThemeFour] = useState("#dbd5a8");
    useEffect(() => {
        setThemeOne(rating >= 1 ? "#ffc309" : "#dddac5");
    }, [rating]);
    useEffect(() => {
        setThemeTwo(rating >= 2 ? "#ffc309" : "#dddac5");
    }, [rating]);
    useEffect(() => {
        setThemeThree(rating >= 3 ? "#ffc309" : "#dddac5");
    }, [rating]);
    useEffect(() => {
        setThemeFour(rating >= 4 ? "#ffc309" : "#dddac5");
    }, [rating]);

    const Faces = [
        {
            cover: <CgSmileSad size={25} color={themeOne} />,
        },
        {
            cover: <CgSmileNeutral size={25} color={themeTwo} />,
        },
        {
            cover: <CgSmile size={25} color={themeThree} />,
        },
        {
            cover: <CgSmileMouthOpen size={25} color={themeFour} />,
        },
    ];

    return (
        <div className="container">
            {Faces.map(({ cover }, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i} className="face_rating">
                        {cover}
                        <input
                            type="radio"
                            name="star"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default StarRate;
