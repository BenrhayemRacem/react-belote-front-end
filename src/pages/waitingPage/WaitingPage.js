import {Player} from "../../components/player/Player";
import {Link} from "react-router-dom";

export const WaitingPage = () => {

    return (
        <>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <button>
               <Link to="/gameRoom">
                   Launch  game
               </Link>
            </button>

        </>
    )
}