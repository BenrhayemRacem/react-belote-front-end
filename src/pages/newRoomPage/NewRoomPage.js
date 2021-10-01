import {NewRoomOptions} from "../../components/newRoomOptions/NewRoomOptions";
import {Link} from "react-router-dom";


export const NewRoomPage = ()=> {

    return (
        <>
        <NewRoomOptions/>
            <Link to="/waitingRoom">
                wait for others
            </Link>
        </>
    )
}