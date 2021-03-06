import React,{useState} from 'react'
import "./LoginForm.css";

function LoginForm({login,error}) {
    const [details, setDetails] = useState({name:"",email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        login(details);
    }
  return (
    <div className='rightside'>
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>login</h2>
            {(error !="") ? (<div className='error'>(error)</div>) : ""}
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>

            </div>
            <div className='form-group'>
            <label htmlFor='email'>email:</label>
                <input type='email' name='email' id='email'onChange={e => setDetails({...details, email: e.target.value})} value={details.el}/>

            </div>
            <div className='form-group'>
            <label htmlFor='password'>password:</label>
                <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LOGIN"/>

        </div>
    </form>
    </div>
  );
}

export default LoginForm;