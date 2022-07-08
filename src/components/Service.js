// import React from 'react'
// import {Table,Form,Button} from 'react-bootstrap'

// function Service() {
//   return (
//     <div>
// <di>
//   <h1>Sheduling table </h1>
//   <h3>the table below sho</h3>
// </di>

//       <Table striped bordered hover size="sm">
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>First Name</th>
//       <th>Last Name</th>
//       <th>Username</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td colSpan={2}>Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </Table>

// <h3>booking now</h3>


    
//       </div>
//   );
// }

// export default Service;


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Table} from 'react-bootstrap'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';




export default function FormPropsTextFields() {
  return (
    <div>
       <div>
<di>
  <h1>Sheduling table </h1>
  <h3>the table below show accurate time table to our Service</h3>
</di>

      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Speed Board</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
      <th>Sanday</th>



    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kilimanjaro 4</td>
      <td>8:00 to 9:30am</td>
      <td>7:30 to 9:00am</td>
      <td>8:00 to 9:30am</td>
      <td>7:30 to 9:00am</td>
      <td>8:00 to 9:30am</td>
      <td>7:30 to 9:00am</td>
      <td>7:30 to 9:00am</td>
    </tr>
    <tr>
      <td>Kilimanjaro 5</td>
      <td>12:00 to 1:30pm</td>
      <td>12:00 to 1:30pm</td>
      <td>11:30 to 1:00pm</td>
      <td>12:00 to 1:30pm</td>
      <td>11:30 to 1:00pm</td>
      <td>12:00 to 1:30pm</td>
      <td>12:00 to 1:30pm</td>
    </tr>
    <tr>
      <td> Kilimanjaro 6</td>
      <td>No tranport</td>
      <td>3:30 to 5:00pm</td>
      <td>4:00 to 5:30pm</td>
      <td>3:30 to 5:00pm</td>
      <td>No transport</td>
      <td>3:30 to 5:00pm</td>
      <td>5:00 to 6:30</td>
    </tr>
  </tbody>
</Table>

<h3>Submit your Details Information here </h3>


    
      </div>
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='row'>
       <div className='col-md-2'>
       <TextField
          required
          id="outlined-required"
          label="CustomerId"
         
        />  
        </div> 

        <div className='col-md-2'>
        <TextField
          required
          id="outlined-required"
          label="CustomerName"
          
        />  
        </div> 

       
      </div>

      <div className='row'>
       <div className='col-md-2'>
       <TextField
          required
          id="outlined-required"
          label="Address"
         
        />  
        </div> 

        <div className='col-md-2'>
        <TextField
          required
          id="outlined-required"
          label="PackageType"
         
        />  
        </div> 

       
      </div>

      <div className='row'>
       <div className='col-md-2'>
       <TextField
          required
          id="outlined-required"
          label="PhoneNo"
          
        />  
        </div> 

        <div className='col-md-2'>
        <TextField
          required
          id="outlined-required"
          label="Amount of package"
          
        />  
        </div> 

       
      </div>

      <div className='row'>
        <div className='col-md-12'>
        <TextareaAutosize
  aria-label="minimum height"
  minRows={3}
  placeholder="discreption"
  style={{ width: 500 }}
/>

        </div>
        <div className='row'>
          <div className='col-md-12'>
          <Button variant="contained" >Submit</Button>
          </div>
        </div>
      </div>
     
    </Box>

    </div>
    
  );
}
