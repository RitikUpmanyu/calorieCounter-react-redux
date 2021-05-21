import React from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"



const Navbar = () => {
    
    const user=useSelector((state) => state.Auth)
    const isAdmin=user.isAdmin
    return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-custom-2">
      <div className="container">
        <Link to="/" className="navbar-brand ml-2">
        <img src="https://banner2.cleanpng.com/20190731/coj/kisspng-fork-icon-fast-food-icon-5d4125521cc0d5.6481897415645504821178.jpg" width="30" height="30" class="d-inline-block shadow align-top m-1" alt=""/>
          Cal-Count
        </Link>
        <button class="navbar-toggler navbar-toggle x collapsed shadow" id="navbar-togglerbtn" type="button" data-toggle="collapse" data-target="#basicExampleNav"
        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="basicExampleNav">
        
        <Link to="/" className="btn buttonsassy text-center btn-secondary">
          View All
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
      </div>
    </nav>
    )
}

export default Navbar
