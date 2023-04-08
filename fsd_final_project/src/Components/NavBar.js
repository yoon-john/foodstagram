import React from 'react'

function NavBar() {
  return (
    <div>
        <a href="/">Home Page</a>
        <ul>
            <li>
                <a href="/auth">Login</a>
            </li>
            <li>
                <a href="/saved">Saved Recipes</a>
            </li>
        </ul>

    </div>
  )
}

export default NavBar