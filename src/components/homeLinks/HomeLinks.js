import {Link} from "react-router-dom";

export const HomeLinks = ()=> {

    return (
        <>
        <button className="btn btn-lg btn-success">
            <div>
                <Link to="/newRoom">
                    create  a new Room
                </Link>
            </div>
            <div>
                <Link to="/joinRoom">
                    join an existing room
                </Link>
            </div>
        </button>

        </>
    )
}