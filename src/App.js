import {useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getPost } from './redux/slice/postSlice';
import './App.css';


function App() {

  const {loading, posts , error} = useSelector(state=>state.post);

  const dispatch = useDispatch();

  useEffect(()=>{

      dispatch(getPost())

  },[])

  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <p>Error occured while fetching</p>
  }

  return (
    <div className="App">
      <h1>Fetch API using Redux toolkit</h1>

      {
        posts.map((item)=>
          <h5>{item.title}</h5>
        )
      }

    </div>
  );
}

export default App;
