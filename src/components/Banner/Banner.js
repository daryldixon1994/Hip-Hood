import "./Banner.css";
import { CgDisc } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

function Banner({ search, setSearch }) {
    console.log(search);

    return (
        <div className="dt-Banner-container">
            <div className="dt-Banner-box">
                <CgDisc size={70} className="dt-banner-logo" />
                <h1>HIP-HOOD </h1>
            </div>
            <div className="dt-banner-nav">
                <Link to="/" className="tb-banner-home">
                    <GoHome size={25} /> <h2>Home</h2>
                </Link>
                <div className="search-area">
                    <Search search={search} setSearch={setSearch} />{" "}
                    <ImSearch size={25} style={{ marginLeft: "10px" }} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
