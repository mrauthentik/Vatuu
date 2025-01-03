import axios from 'axios'
import { useState, FC, useEffect } from 'react';


interface AppProps {
  title: string;
}

export interface Name {
  first: string;
  last: string;
  title: string;
}

export interface Login {
  uuid: string;
 }
export interface Location {
  country: string;
  state: string;
  city: string;
  postcode: string;
}
export interface Registered {
  age: number;
  date: string;
}
export interface Users {
   name: Name;
   email: string;
   login: Login;
   location: Location;
   registered: Registered;
   gender: string;
 }

const App: FC<AppProps> = ({title}) =>{
 const [users, setUsers] = useState<Users[]>([])
   useEffect( ()=>{
      const getUsers = async () =>{
         try {
           const {data} = await axios.get('https://randomuser.me/api/?results=10')
           console.log(data)
           setUsers(data.results)
         }
         catch (err){
          console.log(err)
         }
      }
        getUsers()

        }, [])

        return (
          
          <div>
            <h1>{title}</h1>
             <ul>
              {users.map(({login,name,email,gender,location,picture,phone, registered}) => {
                return ( 
                  <div className="users">

                   <div className='card'>

                     <li key={login.uuid}>
                      <div>
                        <img src={picture.large} alt="" />
                      </div>
                        <div>
                         Name:{name.title} {name.first} {name.last}
                        </div>
                        <div>Email: {email}</div>
                        <div> Gender: {gender}</div>
                        <div> Country: {location.country}</div>
                        <div> Location: {location.state} {location.city}</div>
                        <div>Zip Code: {location.postcode}</div>
                        <div>Phone Number:{phone}</div>
                        <div> Age: {registered.age}</div>
                        <div>DOB: {registered.date}</div>
                     </li> 
                       <hr />
                   </div>
                  </div>
                )
              })}
            </ul>
          </div>
        )

}

// import axios from 'axios';
// import { FC, useEffect } from 'react';

// interface AppProps {
//   title: string;
// }

// const App: FC<AppProps> = ({ title }) => {
//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const { data } = await axios.get(
//           'https://randomuser.me/api/?results=10'
//         );
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getUsers();
//   }, []);

//   return <h1>{title}</h1>;
// }
export default App