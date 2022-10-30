import React from 'react'
import {Container, makeStyles}  from "@material-ui/core"
import { BorderColor, Dashboard, Group, Home, Person, School, Settings } from '@material-ui/icons';

const useStyles = makeStyles(theme=>({
  container:{
    paddingTop: theme.spacing(3),
    backgroundColor: "#E5E4E2",
    height: "100vh"
    
  },
icon:{
  marginRight: theme.spacing(1),
  [theme.breakpoints.up("sm")]:{
    fontSize: "18px",
  }

},
  item:{
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]:{
      marginBottom:theme.spacing(3),
      cursor: "pointer"
    }
  }

}));

function Adminbar() {
    const classes = useStyles();
  return (
   <Container className={classes.container}>
    
    {/* <div className={classes.item}>
    <Home className={classes.icon}/> Home<br/>
    </div> */}
    <div  className={classes.item}> 
      <Dashboard  className={classes.icon}/> Dashboard
      {/* <Typography className={classes.text}>Dashboard</Typography> */}
    </div>
    <div  className={classes.item}>
    <School className={classes.icon} /> Student
    </div>
    <div  className={classes.item}>
    <BorderColor className={classes.icon}/> Teacher
    </div>
    <div  className={classes.item}>
    <Person className={classes.icon}/> Parent
    </div>
    <div  className={classes.item}>
    <Group className={classes.icon}/> Staff
    </div>
    <div  className={classes.item}>
    <Settings className={classes.icon}/>  Settings
    </div>
    
    
    
   </Container>
  )
}

export default Adminbar

