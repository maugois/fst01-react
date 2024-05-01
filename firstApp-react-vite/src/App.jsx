import '@fontsource-variable/montserrat/wght-italic.css';
import { ImCool2 } from "react-icons/im";
import { useState } from "react";
import Card from "./components/Card/Card";
import './App.css';

export default function App() {
  const [countFollowers, setCountFollowers] = useState(0);

  const users = [
    {
      id: 1,
      name: "Edmilton",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    },
    {
      id: 2,
      name: "Vinicius",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    },
    {
      id: 3,
      name: "Pansanato",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    },
  ];

  function handleChangeFollowers(value) {
    setCountFollowers(value ? countFollowers + 1 : countFollowers - 1);
  }

  return (
    <>
      <div>
        <h1 className="count-followers">
          Seguidores: {countFollowers}

          <span><ImCool2 /></span>
        </h1>

        <div className="list-users">
        {
          users.map((user) => (
            <Card key={user.id} userData={user} changeCount={handleChangeFollowers}/>
          ))
        }
        </div>
      </div>  
    </>
  )
}