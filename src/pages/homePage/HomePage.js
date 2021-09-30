import {Welcome} from "../../components/welcome/Welcome";
import {Username} from "../../components/username/Username";
import {HomeLinks} from "../../components/homeLinks/HomeLinks";

export const HomePage = () => {

    return (
        <>
        <Welcome/>
            <Username/>
            <div>
                <HomeLinks/>
            </div>



        </>
    )
}