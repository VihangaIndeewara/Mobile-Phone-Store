import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import './Login.css';
import { Footer } from '../../footer/Footer';

import { Home } from '../home/Home';
import { Header } from '../../header/Header';



export const Login=()=>{
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
                            <Input
                            // html input attribute
                            name="username"
                            type="text"
                            placeholder="username"
                            />
                        </FormControl>
                        <br />
                        <FormControl>
                            <FormLabel><h6 className='headings'>Password</h6></FormLabel>
                            <Input
                            // html input attribute
                            name="password"
                            type="password"
                            placeholder="password"
                            />
                        </FormControl>
                        <br />
                        <br />

                          <Button id='btnLogin'>Log in</Button>
                  
                        

                    </main>
                </CssVarsProvider>
                </div>
                <img id='backgroundImage' src="../assets/images/loginBackground.jpg" alt="backgroundImage" />
         
           <Footer/>
        </div>
        
    );
}