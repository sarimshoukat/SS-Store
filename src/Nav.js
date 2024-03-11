import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { CiLogin, CiLogout } from 'react-icons/ci'
import './Nav.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';

const Nav = ({searchBtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated  } = useAuth0();
return (
    <>
        <div className="free">
            <div className='icon'>
                    <FaTruckMoving /> 
            </div>
            <p> 
                Free Shipping for Orders upto Rs.10,000 
            </p>
        </div>

        <div className="main_header">
            <div className="container">
                <div className="logo">
                    <img src="./img/logo.svg" alt="Logo" style={{width:'120px'}}/>
                </div>
                <div className="search_box">
                    <input type="text" defaultValue={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter the Product Name" autoComplete='off' />
                    <button onClick={() => searchBtn (search)}>Search</button>
                </div>
                <div className="icon">
                    {
                        isAuthenticated && 
                        (
                            <div className="account">
                                <div className="user_icon">
                                    <AiOutlineUser />
                                </div>
                                <p>Hello, {user.name}</p>
                            </div>
                        )
                    }
                    <div className="second_icon">
                        <Link to="/" className='link'><AiOutlineHeart /></Link>
                        <Link to="/cart" className='link'><BsBagCheck /></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="header">
            <div className="container">
                <div className="nav">
                    <ul>
                        <li>
                            <Link to='/' className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to='/product' className='link'>Product</Link>
                        </li>
                        <li>
                            <Link to='/about' className='link'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='link'>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="auth">
                    { isAuthenticated ?
                    (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin }          })}><CiLogout /></button>)
                    :
                    (<button onClick={() => loginWithRedirect()}><CiLogin /></button>)
                    }
                    
                </div>
            </div>
        </div>
    </>
)
}

export default Nav
