import { useDispatch, useSelector } from "react-redux"
import { updateUsername } from "../store/slices/userSlice"

const UserExample = () => {

    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h3>User redux example</h3>
            <h4>{user}</h4>
            <p>Changing the text in the input below will update the User state and change the h3 above. You can preview this in redux dev tools</p>
            <input className="border-2" onChange={(e) => dispatch(updateUsername(e.target.value))} type="text" />
        </div>
    )
}

export default UserExample
