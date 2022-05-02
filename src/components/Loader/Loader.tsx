import { Spinner } from "react-bootstrap";
import "./Loader.scss";

function Loader() {
    return (
        <div className="loader">
            <Spinner animation="grow" />
            <span>Loading...</span>
        </div>
    );
}

export default Loader;