

import './App.css';

function App() {

  const handleSubmite = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const text = form.text.value;

    const value = {
      name: name,
      text: text
    }
    
    fetch('http://localhost:5000/text', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(value)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        alert('Successfully submitted your data')
        
      }
    })
    form.reset();
    
  }





  return (
    <div className="grid justify-center items-center min-w-full min-h-screen">
      <form onSubmit={(e)=>handleSubmite(e)}>
       <label><p>Your Name</p></label>
       <input type="text" name='name'  className="input input-bordered w-96 " />
       <label><p>Your Text</p></label>
       <textarea name='text'  className="input input-bordered w-96 h-24" />
       <input type='submit' className="btn btn-info block mt-4 w-1/2 text-center" value="submit"></input>
      </form>
    </div>
  );
}

export default App;
