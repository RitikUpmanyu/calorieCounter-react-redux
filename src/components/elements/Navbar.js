import React from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"



const Navbar = () => {
    
    const user=useSelector((state) => state.Auth)
    const isAdmin=user.isAdmin
    return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Dishes
        </Link>
    
        <div class="btn-group" role="group" aria-label="Basic example">
          {isAdmin?
          <Link to="/admin/add" className="btn buttonsassy text-center btn-secondary">
          AddDish
        </Link>
        :null
        }
        {isAdmin?
          <Link to="/admin" className="btn buttonsassy text-center btn-secondary">
          Admin
        </Link>
        :null
        }
          {user.userName?
          <Link to="/logout" className="btn buttonsassy text-center btn-secondary">
          LOGOUT
        </Link>
          :<Link to="/login" className="btn buttonsassy text-center btn-secondary">
          LOGIN
        </Link>
        }
          
          
          
          
          
        </div>
      </div>
    </nav>
    )
}

export default Navbar
