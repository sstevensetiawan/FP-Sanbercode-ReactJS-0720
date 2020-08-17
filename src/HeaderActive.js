import React, { useContext } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { DataSessionContext } from './Session/SessionContext'


const Header = () => {
  const [dataSession, setDataSession] = useContext(DataSessionContext)

  const handleItemLogOut = (e, { name }) => {
    return() => {
      setDataSession({...dataSession, username : ""})
      setDataSession({...dataSession, password : ""})
    }
  }
  if(dataSession.username === ""){
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
  }
  else{
    return (
    <div>
      <Menu pointing secondary>
          <Dropdown item simple text='Movies'>
            <Dropdown.Menu>
              <Link to="/">
              <Dropdown.Item>Movies List</Dropdown.Item>
              </Link>
              <Link to="/MoviesTable">
                <Dropdown.Item>Movies Table</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
            
          <Dropdown item simple text='Games'>
            <Dropdown.Menu>
              <Link to="/GamesList">
              <Dropdown.Item>Games List</Dropdown.Item>
              </Link>
              <Link to="/GamesTable">
                <Dropdown.Item>Games Table</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position='right'>
            <Menu.Item
              name='logout' onClick={handleItemLogOut}
            />
          </Menu.Menu>
        </Menu>
      </div>
  );
    
  }
    
};

export default Header