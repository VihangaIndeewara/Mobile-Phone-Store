import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

import './Login.css';
import { Footer } from '../../footer/Footer';

import { Home } from '../home/Home';
import { Header } from '../../header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 


export const Login=()=>{

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const navigate=useNavigate();

    const handleLogIn=()=>{
       axios.post('http://localhost:5000/api/login/',
       {username:username,password:password})
        .then((res)=>{(res.data.message)=="true" ? navigate('/home'):Swal.fire(res.data.message,'Please try again!!!','error')})
        .catch((err)=>Swal.fire('Bad job!',err,'error'))
    }

    return(
        <div  >
            <Header/>
               <div id='loginForm' >
                
                <CssVarsProvider >
                    <main>
                        <br />
                        <div>
                            <Typography level="h4" component="h1">
                            <b className='headings' >Welcome!</b>
                            </Typography>
                            <Typography level="body2" ><h6  className='headings'>Log in to continue...</h6></Typography>
                        </div>
                        <br />
                        <FormControl>
                            <FormLabel><h6 className='headings'>Username</h6></FormLabel>
                            <Input type="text" name='usename' value={username} onChange={(e)=>{setUsername(e.target.value)}}  />
                        </FormControl>
                        <br />
                        <FormControl>
                            <FormLabel><h6 className='headings'>Password</h6></FormLabel>
                            <Input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </FormControl>
                        <br />
                        <br />

                       
                      
                          <Button id='btnLogin' onClick={handleLogIn}>Log in</Button>
                        

                    </main>
                  
                </CssVarsProvider>
                </div>
                <img id='backgroundImage' src="../assets/images/loginBackground.jpg" alt="backgroundImage" />
         
           <Footer/>
        </div>
        
    );
}