import { FC } from "react"
import { Login, Name, Location,Registered} from '../App'

interface UserProps {
    login: Login;
    name: Name;
    email: string;
    location: Location;
    registered: Registered;
}

const User: FC<UserProps> = ({login, name,email})=>{
   return (
    <li key={login, uuid}>
        <div>
            Name: {name.first} {name.last}
        </div>
        <div>
            Email: {email}
        </div>
        <hr />
    </li>
   )
}
export default User