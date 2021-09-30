

export const Username = ()=> {

    return (
        <form >

            <div>
                <label htmlFor="name">
                    specify your username
                </label>
                <input type="text" name="name" value=""/>
                <button className="btn-outline-primary btn" type="submit">
                    next
                </button>
            </div>

        </form>
    )

}