import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './MainNav.css';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router';
import { useEffect } from 'react';





export default function SimpleBottomNavigation() {
 
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if(value===0){
      history.push("/");
    }else if(value===1){
      history.push("/movies");
    }else if(value===2){
      history.push("/series");
    }else if(value===3){
      history.push("/search")
    }else{
      history.push("/");
    }
   
  }, [value,history])

  return (
    <Box className="nav">
      <BottomNavigation
        showLabels
        className="nav"
        value={value}
        style={{backgroundColor:"#2d3436"}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color:"white"}}  label="Trending" icon={<WhatshotIcon/>} />
        <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<TheatersIcon/>} />
        <BottomNavigationAction style={{color:"white"}} label="Tv-Series" icon={<TvIcon/>} />
        <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchIcon/>} />
      </BottomNavigation>
    </Box>
  );
}
