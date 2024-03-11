import React, { useState } from 'react'
import './Contact.css'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {

    const { loginWithRedirect, logout, user, isAuthenticated  } = useAuth0();

    const [users, setUser] = useState(
        {
            Name:'', Email:'', Subject:'', Message:''
        }
    )
    let name, value
    const data = (e) =>{
        name = e.target.name
        value = e.target.value
        setUser({...users, [name]: value})
    }

    const senddata = async (e) =>{
        const{Name, Email, Subject, Message} = users
        e.preventDefault()
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res =await fetch('https://evogue-f5266-default-rtdb.firebaseio.com/Message.json', options)
        console.log(res)
        if(res){
            alert('Message Sent')
        }
        else{
            alert('Message Not Sent')
        }
    }
    return (
        <>
            <div className="contact_container">
                <div className="content">
                    <h2>Contact Us</h2>
                    <div className="form">
                        <form method="POST">
                            <input type="text" onChange={data} name='Name' value={users.Name} placeholder='eg. John Smith' required autoComplete='off' />
                            <input type="email" onChange={data} name='Email' value={users.Email} placeholder='example@email.com' required autoComplete='off' />
                            <input type="text" onChange={data} name='Subject' value={users.Subject} placeholder='Subject' required autoComplete='off'/>
                            <textarea name="Message" onChange={data} value={users.Message} placeholder='Message' cols="30" rows="3" required autoComplete='off'></textarea>
                            {
                                isAuthenticated ?
                                <button type='submit' onClick={senddata}>Send</button>
                                :
                                <button type='submit' onClick={() => loginWithRedirect()}>Login to Send</button>

                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
