import React, { useContext } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { DataSessionContext } from './Session/SessionContext'


const Header = () => {
  const [dataSession, setDataSession] = useContext(DataSessionContext)
    return (
      <div>
        <Menu pointing secondary>
            <Link to="/">
              <Menu.Item
                name='movies'
              />
            </Link>
            <Link to="/GamesList">
              <Menu.Item
                name='games'
              />
            </Link>
            <Menu.Menu position='right'>
              <Link to="/Login">
                <Menu.Item
                  name='login'
                />
              </Link>
            </Menu.Menu>
          </Menu>
        </div>
    );
};

export default Header