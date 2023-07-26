import { useState, useEffect } from 'react';
import axios from "axios";



function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [needFirstName, setNeedFirstName] = useState(false);
  const [needLastName, setNeedLastName] = useState(false);
  const [needState, setNeedState] = useState(false);
  const [needCity, setNeedCity] = useState(false);
  const [needEmail, setNeedEmail] = useState(false);
  const [needPassword, setNeedPassword] = useState(false);
  const [token, setToken] = useState('')
  





  useEffect(() => {
    axios.get("https://www.universal-tutorial.com/api/states/United States", {headers:
    {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJkYW5pZWxwdWxpZG84MEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJWcWxSSHY0MlA0cThURnNpVkpKWk9aMXRBbkc0MHVOR2ZtRVhaU3RzMWxCZDJoYlhNaTFaUl9QcWhKMmJJQk5NbUZrIn0sImV4cCI6MTY5MDM5Nzc3M30.BTXx3u7kAkz90qZn5MGpkduiTUoh-YPKyjqgKT_SUQE",
    "Accept": "application/json"
    }})
    .then((response) => {
      //console.log(response.data);
      setStates(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  }, []);

  function isEmail(){
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      //console.log('bad email address');
      return false;
    } else {
      //console.log('good email');
      return true;
    }
  }


  function getCities(state){
    setState(state);
    axios.get("https://www.universal-tutorial.com/api/cities/"+state, {headers:
    {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJkYW5pZWxwdWxpZG84MEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJWcWxSSHY0MlA0cThURnNpVkpKWk9aMXRBbkc0MHVOR2ZtRVhaU3RzMWxCZDJoYlhNaTFaUl9QcWhKMmJJQk5NbUZrIn0sImV4cCI6MTY5MDM5Nzc3M30.BTXx3u7kAkz90qZn5MGpkduiTUoh-YPKyjqgKT_SUQE",
    "Accept": "application/json"
    }})
    .then((response) => {
      //console.log(response.data);
      setCities(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  function validate(){
    if(firstName==""){
      setNeedFirstName(true);
    } else {
      setNeedFirstName(false);
    }
    if(lastName==""){
      setNeedLastName(true);
    } else {
      setNeedLastName(false);
    }
    if(state==""){
      setNeedState(true);
    } else {
      setNeedState(false);
    }
    if(city==""){
      setNeedCity(true);
    } else {
      setNeedCity(false);
    }
    if(email==""){
      setNeedEmail(true);
    } else {
      setNeedEmail(false);
    }
    if(password==""){
      setNeedPassword(true);
    } else {
      setNeedPassword(false);
    }
    if (!isEmail(email)) {
      //console.log("bad flag");
      setNeedEmail(true);
    } else {
      //console.log("good flag");
      setNeedEmail(false);
    }
  }

  function submit(){
    validate();
    if (firstName==""||lastName==""||state==""||city==""||email==""||password==""){
      //console.log("try again");  
    } else {
      if (!isEmail()){
        //console.log("bad email");
      } else {
          console.log("{\"firstName\": \""+firstName+"\", \"lastName\": \""+lastName+"\", \"state\": \""+state+"\", \"city\": \""+city+"\", \"email\": \""+email+"\", \"password\": \""+password+"\"}" )
          axios.post('Your URL', {
          firstName: firstName,
          lastName: lastName,
          state: state,
          city: city,
          email: email,
          password: password
          })
          .then((response)=>{
          setFirstName("")
          setLastName("")
          setState("")
          setCity("")
          setEmail("")
          setPassword("")
          setToken(response.data)
          })
          .catch((error) =>{
          console.log(error)
          })

      }


    }
  }



  return (
    <div className="container mt-3 d-flex justify-content-center">
      <div className="card" style={{padding:"2em", backgroundColor:'lightblue'}}>
        <table className="card-body" >
          <tbody>
            <tr>
              <td>
                <img src="./images/lobster.png" width ="100em" style={{borderRadius:"50%"}}/>
                <br/>
              </td>
              <td className='card-title'>
                Daniel Pulido-Mendez
                <br/>
                Placer.ai take home assignment
              </td>
            </tr>

            <tr>
              <td>
                <br/>
              </td>
            </tr>

            <tr>
              <td style={{width:"8em"}}>First Name:</td>
              <td>
                <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                {needFirstName ? <div style={{height:'2em'}} className="form-text text-muted" >Please include your first name</div>:<div style={{height:'2em'}}></div>}
              </td>
            </tr>

            <tr>
              <td>Last Name:</td>
              <td>
                <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                {needLastName ? <div style={{height:'2em'}} className="form-text text-muted" >Please include your last name</div>:<div style={{height:'2em'}}></div>}
              </td>
            </tr>

            <tr>
            <td>State:</td>
              <td>
                <select value={state} className="form-select" onChange={(e) => getCities(e.target.value)}>
                  <option value="">Select</option>
                  {states.map((state,index)=> (
                    <option key={index} value={state.state_name}>{state.state_name}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                {needState ? <div style={{height:'2em'}} className="form-text text-muted" >Please select a state</div>:<div style={{height:'2em'}}></div>}
              </td>
            </tr>

            <tr>
            <td>City:</td>
              <td>
                <select value={city} className="form-select" onChange={(e) => setCity(e.target.value)}>
                  <option value="">Select</option>
                  {cities.map((city,index)=> (
                    <option key={index} value={city.city_name}>{city.city_name}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                {needCity ? <div style={{height:'2em'}} className="form-text text-muted" >Please select a city</div>:<div style={{height:'2em'}}></div>}
              </td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>
                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                {needEmail ? <div style={{height:'2em'}} className="form-text text-muted" >Please include valid email</div>:<div style={{height:'2em'}}></div>}
              </td>
            </tr>

            <tr>
              <td>Password:</td>
              <td>
              <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                {needPassword ? <div style={{height:'2em'}} className="form-text text-muted" >Please include your password</div>:<div style={{height:'2em'}}></div>}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="btn btn-primary" onClick= {submit}>Submit</button>
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default App;
