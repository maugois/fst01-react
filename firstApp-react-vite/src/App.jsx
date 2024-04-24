import Card from "./components/Card";

export default function App() {
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

  const user = users[0];

  return (
    <>  
      <div>
        <Card name={user.name} imageUrl={user.imageUrl}/>
      </div>
    </>
  )
}