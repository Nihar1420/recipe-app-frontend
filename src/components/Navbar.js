import React from 'react'
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import Auth from '../pages/auth'

const Navbar = () => {
    const user = localStorage.getItem('userId');
    console.log(user, "This is userrrrrr id");
    return (
        user ?
            <>
                <Tabs>
                    <TabList>
                        <Link to="/"><Tab>Home</Tab></Link>
                        <Link to="/addRecipe"><Tab>Add recipe</Tab></Link>
                        <Link to="/savedRecipe"><Tab>Saved recipes</Tab></Link>
                    </TabList>
                </Tabs>
                <Outlet />
            </> : <Auth />
    )
}

export default Navbar