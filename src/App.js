
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="grid justify-center items-center min-w-full min-h-screen">
      <form>
       <label><p>Your Name</p></label>
       <input type="text"  className="input input-bordered w-96 " />
       <label><p>Your Text</p></label>
       <textarea   className="input input-bordered w-96 h-24" />
       <Link to="/table"><button className="btn btn-info block mt-4 w-1/2 text-center">Submit</button></Link>
      </form>
    </div>
  );
}

export default App;
