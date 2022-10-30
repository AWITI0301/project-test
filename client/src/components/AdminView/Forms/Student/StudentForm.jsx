import { Button, Container, FormControl, FormControlLabel, FormHelperText, FormLabel, Input, InputLabel, makeStyles, OutlinedInput, Radio, RadioGroup, TextField} from '@material-ui/core'
import { Dashboard, Delete, Edit, Save, Send, ViewAgenda } from '@material-ui/icons'
import { borderRadius } from '@mui/system';
import React from 'react'



const useStyles = makeStyles(theme=>({
  button:{
    color: "white",
    backgroundColor: "black"
  }, 
  container:{
    paddingTop: theme.spacing(3),
  }
}));


function StudentForm() {
  const classes = useStyles();
  return (
  
    <Container className={classes.container}>
    <div>
    
    {/* <FormControl>
      <OutlinedInput placeholder="Gender" />
      <OutlinedInput placeholder="Image" />
      <OutlinedInput placeholder="Parent Id" />
      <OutlinedInput placeholder="Phone Number" />
      <OutlinedInput placeholder="Admission Number" />
      <OutlinedInput placeholder="Subject ID" />
      <OutlinedInput placeholder="Full Name" />
      <OutlinedInput placeholder="Email" />
      <Button variant="contained" color="primary" size="large" startIcon={<Save/>}>Save</Button>
    </FormControl> */}
    {/* // BUTTONS */}
    {/* <Button variant="outlined" color="secondary"size="large" startIcon={<Delete/>}>Delete</Button>
    <Button variant="outlined" color="secondary"  size="large" startIcon={<Send />}>Submit</Button>
    <Button variant="outlined"  size="large" startIcon={<Edit />}className ={classes.button}>Edit</Button>  
    <Button variant="outlined" color="secondary" size="large" startIcon={<Dashboard/>}>Dashboard</Button>
    <Button variant="outlined" color="secondary" size="large" startIcon={<Save/>}>Save</Button> */}
    
    
    </div>
    <form className={classes.form} autoComplete="off" style={{border:"1px solid grey", borderRadius:"10px", padding:"10px", alignText:"center", marginLeft:"200px", width:"600px"}}>
    <div className={classes.item}>
    <FormLabel id="demo-radio-buttons-group-label">Gender:</FormLabel>
   
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1"> Male </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2"> Female</label>
</div>

{/* <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2"> Female</label>
</div> */}
    {/* <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    size ="small"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    
  </RadioGroup>  */}
    </div>
    {/* IMAGE */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Image:</FormLabel>
        <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:"100%"}}/>
      </div>
    {/* PARENT ID */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Parent ID:</FormLabel>
        <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:"100%"}}/>
      </div>
    {/* PHONE NO */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Phone Number:</FormLabel>
        <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:"100%"}}/>
      </div>
    {/* ADDMISSION NO */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Admission Number:</FormLabel>
        <TextField id="outlined-basic" variant="outlined" size="small" style={{width:"100%"}}/>
      </div>
    {/* SUBJECT ID */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Subject ID:</FormLabel>
        <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:"100%"}}/>
      </div>
    {/* FULL NAME */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Full Name:</FormLabel>
        <TextField id="outlined-basic" variant="outlined" size="small" style={{width:"100%"}}/>
      </div>
    {/* EMAIL */}
     <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Email:</FormLabel>
        <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:"100%"}}/>
      </div>
      <div>
      <Button variant="contained" color="primary" size="large" startIcon={<Save/>} style={{width:"400px", marginTop:"15px", alignItems:"center", marginLeft:"80px"}}>Save</Button>
      </div>
    </form>
    </Container>
    
  )
}

export default StudentForm