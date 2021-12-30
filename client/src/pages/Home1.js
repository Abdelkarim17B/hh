import { Link } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'
import {Button} from 'react-bootstrap'



const Register = () => {
    const [page, setPage] = useState("");
    return (
        
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center' ,alignItems:'center'}}>
            <Link to='/'></Link>
            <h1>  Hello , let's <br></br> get started !</h1>
            <p>Join us and benefit of thousands of promos codes and discounts</p>
            <div>
                <Button variant="warning"  style={{margin:'8px' , borderredius:'15px' , color :'white' , backgroundColor:'#ffd800' , border:'none',padding:'10px'}}onClick={() => setPage("Login")} >login</Button> 
                <Button variant="warning"  style={{margin:'8px' , borderredius:'15px' , color :'white' , backgroundColor:'#ffd800' , border:'none',padding:'10px'}} onClick={() => setPage("Signup")} >Signup</Button>
            </div>

            {page === "Login" ? <Login /> : null}
            {page === "Signup" ? <Signup /> : null}
        </div>
    )
}

export default Register
