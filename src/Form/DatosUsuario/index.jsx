import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";


const DatosUsuario = () => {
  const [email, setEmail] = useState({ value: 'nombre', valid: true });
  const [password, setPassword] = useState({ value: 'abc', valid: true});


    return (
      <Box
        component="form"
        autoComplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={ (e) => {
          e.preventDefault()
          console.log({email, password})
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={ false }
          helperText={false && "Ingresa un correo electrónico válido"}
          value={ email.value }
          onChange={ (input) => {
            const email = input.target.value
            const valido = validarEmail(email)
            setEmail({ value: email, valid: valido})
            }
          }
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          value={ password.value }
          onChange={ (input) => { 
            const password = input.target.value
            
            setPassword({ value: password, valid: validarPassword(password) })
            }
          }
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  
}

export default DatosUsuario;
