import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
   
    const [userName ,setuserName]=useState(' ')
    const [password ,setpassword]=useState(' ')
    

    const onAdd = async (user) => {
        const res = await fetch('**', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
      }

    const onSubmit = (e) => {
        e.preventDefault()

    
        if (!userName || !password) {
          alert("Please d'ont let username or password empty ")
          return
        }
        onAdd({ userName ,password })
        setuserName('')
        setpassword('')
        }
        
    return (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
            <Link to='/'></Link>
            <form className='add-form' onSubmit={onSubmit}>
               
                <div className='form-control'>
                <label>user name</label>
                <input
                    type='text'
                    style={{'backgroundColor': '#eee', 'color':'black', 'borderWidth': '0', 'padding': '8px'  }}
                    placeholder='add user name'
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                />
                </div>
                <div className='form-control'>
                <label>password</label>
                <input
                    type='password'
                    placeholder='Password'
                    style={{'backgroundColor': '#eee', 'color':'black', 'borderWidth': '0', 'padding': '8px'  }}
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                </div>
                
                
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default Login
