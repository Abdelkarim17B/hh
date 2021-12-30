import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [firstName ,setfirstName]=useState(' ')
    const [lastName ,setlastName]=useState(' ')
    const [age ,setage]=useState(' ')
    const [sexe ,setsexe]=useState(' ')
    const [userName ,setuserName]=useState(' ')
    const [email ,setemail]=useState(' ')
    const [password ,setpassword]=useState(' ')
    /// recuperer les emails checkbox

    const onAdd = async (user) => {
        const res = await fetch('http://localhost:5000/api/Users/' , {
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
        onAdd({ firstName, lastName, userName ,email,password })
        setfirstName('')  
        setlastName('')
        setuserName('')
        setemail('')
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
                <label>firstName</label>
                <input
                    type='text'
                    placeholder='add first name'
                    style={{'backgroundColor': '#eee', 'color':'black', 'borderWidth': '0', 'padding': '8px'  }}
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                />
                </div>
                <div className='form-control'>
                <label>lastName</label>
                <input
                    type='text'
                    placeholder='add last name'
                    style={{'backgroundColor': '#eee', 'color':'black', 'borderWidth': '0', 'padding': '8px'  }}
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                />
                </div>
                <div className='form-control'>
                <label>userName</label>
                <input
                    type='text'
                    placeholder='add user name'
                    style={{'backgroundColor': '#eee', 'color':'black', 'borderWidth': '0', 'padding': '8px'  }}
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                />
                </div>
                <div className='form-control'>
                <label>sexe</label>
                <select  value={sexe}  onChange={(e) => setsexe(e.target.value)}>
                    
                    <option value="female">female</option>
                    <option value="male">male</option>
    
                     </select>
                </div>
                <div className='form-control'>
                <label>age</label>
                <input
                    type='text'
                    placeholder='add your age'
                    style={{'backgroundColor': '#eee', 'color':'black', 'borderWidth': '0', 'padding': '8px'  }}
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                />
                </div>
                <div className='form-control'>
                <label>email</label>
                <input
                    type='text'
                    placeholder='add email'
                    style={{'backgroundColor': '#eee', 'color':'black', 'borderWidth': '0', 'padding': '8px'  }}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
                </div>
                <div className='form-control'>
                <label>password</label>
                <input
                    type='password'
                    placeholder='add your password'
                    style={{'backgroundColor': '#eee', 'color':'black', 'borderWidth': '0', 'padding': '8px'  }}
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                </div>        
                
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default Signup
