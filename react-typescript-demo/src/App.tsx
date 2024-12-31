import axios from 'axios'
import { useState, FC, useEffect } from 'react';


interface AppProps {
  title: string;
}
interface Users {
  name: {
    first: string;
    last: string;
  }
  email: string;
  login: {
    uuid: string
  }
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
              {users.map(({login,name,email}) => {
                return ( 
                  <li key={login.uuid}>
                     <div>
                      Name: {name.first} {name.last}
                     </div>
                     <div>Email: {email}</div>
                  </li>
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