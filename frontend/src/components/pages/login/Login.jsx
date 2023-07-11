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



export const Login=()=>{
    return(
        <div  >
               <div id='loginForm'>
                
                <CssVarsProvider>
                    <main>
                        <Sheet
                        sx={{
                            width: 300,
                            mx: 'auto', // margin left & right
                            my: 4, // margin top & bottom
                            py: 3, // padding top & bottom
                            px: 2, // padding left & right
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            borderRadius: 'sm',
                            boxShadow: 'md',
                        }}
                        variant="outlined"
                        >
                        <div>
                            <Typography level="h4" component="h1">
                            <b>Welcome!</b>
                            </Typography>
                            <Typography level="body2">Log in to continue...</Typography>
                        </div>
                        <br />
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input
                            // html input attribute
                            name="username"
                            type="text"
                            placeholder="username"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input
                            // html input attribute
                            name="password"
                            type="password"
                            placeholder="password"
                            />
                        </FormControl>

                        <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
                    
                        </Sheet>
                    </main>
                </CssVarsProvider>
                </div>
                <img id='backgroundImage' src="../assets/images/loginBackground.jpg" alt="backgroundImage" />
         
           
        </div>
        
    );
}