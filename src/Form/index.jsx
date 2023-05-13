// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//Validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0)
  const [pasos, setPasos] = useState({})

  useEffect(() => {
    console.log('useEfect')
  } )

  useEffect( () => {
    console.log('SE HA ACTUALIZADO EL STEP:', step)  
  }, [step])
  
/*   useEffect( () => { 
    async function getdata(){
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await data.json()
      console.log(posts)
    }catch(e){
      console.log(e)
    }
  }
  getdata()
  }, []) */

  const updateStep = (step) => {
    console.log('actualizar paso', step)
    setStep(step)
  }

    const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />, 
    3: <Complete />
  }

  const onSubmit = () => {
    /* let newStep = step + 1
    setStep(newStep)
    console.log('newStep:', newStep)
    console.log(step) */
  }

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value
    const valid = validator(value)
    console.log(value)
    console.log(valid)
    console.log('position:', position)
    console.log('currentStep:', currentStep)
    console.log('validator:', validator)

  }
  
  const stepFlow = { 
    0: {
      inputs: [
        {
          label: 'correo electronico',
          type: 'email',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Ingresar un correo valido',
          validator: validarEmail,
        },
        {
          label: 'contraseña',
          type: 'password',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Ingresa una contraseña valida, Al menos 8 caracteres y maximo 20.',
          validator: validarPassword
        }
      ],
      buttonText: 'Siguiente',
      onSubmit,
    },
  }
  
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        { step < 3 && <Stepper step={ step } />}
      {/*   { steps[step] } */}
      <Step data={ stepFlow[step] } step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;