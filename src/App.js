import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is my counter...</h1>
      <Counter></Counter>
      <Books></Books>
      <LoadeUsers></LoadeUsers>
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);

  const handlerIncrease = () => {
    const newCounter = counter + 1;
    setCounter(newCounter)
  }

  const handlerDecrease = () => {
    if (counter !== 0) {
      const newCounter = counter - 1;
      setCounter(newCounter)
    }
  }

  return (
    <div>
      <h1>Countre: {counter}</h1>
      <button className="increase" onClick={handlerIncrease}>Count Increase</button>
      <button className="decrease" onClick={handlerDecrease}>Count Decrease</button>
    </div>
  )
}


// books add to cart....
function Books() {
  const [books, setBooks] = useState(0)
  const clickHandlerIncrease = () => {
    setBooks(books + 1);
  }

  const clickHandlerDecrease = () => {
    if (books !== 0) {
      setBooks(books - 1);
    }
  }


  return (
    <div>
      <h1>This is my books counter here:</h1>
      <h2>Books: {books}</h2>
      <button className="increase" onClick={clickHandlerIncrease}>Books Increase</button>
      <button className="decrease" onClick={clickHandlerDecrease}>Books Decrease</button>
    </div>
  )
}

//user data loand component....
function LoadeUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/users`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [])


  return (
    <section>
      <h2>Simple users data load to an API...</h2>
      <div className="users">
        {users.map((user) => <DisplayUser data={user} key={user.id}></DisplayUser>)}
      </div>
    </section>
  )
}

//displau users compoent here..
function DisplayUser(props) {
  const { id, name, email, website, address } = props.data;
  return (
    <div className="user">
      <p>ID: {id ? id : 'Empty Data'}</p>
      <p>Name: {name ? name : 'Empty Data'}</p>
      <p>Email: {email ? email : 'Empty Data'}</p>
      <p>Address : {address.city ? address.city : 'Empty Data'}</p>
      <p>Website: {website ? website : 'Empty Data'}</p>
    </div>
  )
}
export default App;
