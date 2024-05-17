import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        {
          name: 'Home',
          navigateTo: "/",
          active: true
        }, 
        {
          name: "Login",
          navigateTo: "/login",
          active: !authStatus,
        },
        {
          name: "SignUp",
          navigateTo: "/signup",
          active: !authStatus,
        },
        {
          name: "My Posts",
          navigateTo: "/all-posts",
          active: authStatus,
        },
        {
          name: "Add Post",
          navigateTo: "/add-post",
          active: authStatus,
        },
    ]

    return (
        <header
        className="py-3 shadow bg-gray-500"
        >
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to= '/'>
                            <Logo width="70px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems.map((item) => 
                        item.active ? 
                        (
                            <li key={item.name}>
                                <NavLink
                                to={item.navigateTo}
                                className={({isActive}) =>`
                                ${isActive ? "font-bold bg-blue-100" : ""}
                                inline-block px-6 py-2 duration-200 
                                hover:bg-blue-100 rounded-full
                                
                                `}>
                                
                                    <button 
                                    onClick={() => navigate(item.navigateTo)}
                                    >{item.name}</button>
                                </NavLink>
                            </li>
                        )
                        : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;