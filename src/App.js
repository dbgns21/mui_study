import {React, useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Header() {
  return (
    <header>
      <h1>welcome</h1>
    </header>
  );
}
function Nav() {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}
function Article() {
  const [open,setOpen] = useState(false);
  return (
    <article>
      <h2>Welcome</h2>
      fasdgsdhasfhadfhadfgasgfasdgasgashasdhasdgasdgfasdgasfgafdgafdga
      fgasgfasfg.
      fasdgsdhasfhadfhadfgasgfasdgasgashasdhasdgasdgfasdgasfgafdgafdga
      fgasgfasfg.
      <br /><br />
      <ButtonGroup>
        <Button variant="outlined" onClick={()=>setOpen(true)}>Create</Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
        <Button variant="outlined">Delete</Button>
         <Dialog open={open}>
          <DialogTitle>Create</DialogTitle>
          <DialogContent>hello create!!</DialogContent>
          <DialogActions>
            <Button variant='outlined'>Craete</Button>
            <Button variant='outlined' onClick={()=>setOpen(false)}>Cancel</Button>
          </DialogActions>
         </Dialog>
    </article>
  );
}

export default function App() {
  return (
    <div className="App">
      <Container fixed>
       <Header></Header>
       <Grid container>
        <Grid item xs='2'>
          <Nav></Nav>
        </Grid>
        <Grid item xs='10'>
          <Article></Article>
        </Grid>
       </Grid>
      </Container>
    </div>
  );
}


