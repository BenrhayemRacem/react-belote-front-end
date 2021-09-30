export const NewRoomOptions = ()=> {

    return (
        <>
            <form >
                <div>
                    <label htmlFor="roomName">
                        donner le nom du salon
                    </label>
                    <input type="text" name="roomName" value=""/>
                </div>
                <div>
                    <label htmlFor="score">
                        donner le score max du jeu
                    </label>
                    <input type="text" name="score" value=""/>
                </div>
                <div>
                    <label htmlFor="roomType">
                        donner le score max du jeu
                    </label>
                    <input type="text" name="roomType" value=""/>
                </div>
                <div>
                    <label htmlFor="roomPassword">
                        donner le score max du jeu
                    </label>
                    <input type="text" name="roomPassword" value=""/>
                </div>

            <button type="submit">
                valider
            </button>
            </form>
        </>
    )
}