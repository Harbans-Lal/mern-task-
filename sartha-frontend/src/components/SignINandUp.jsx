import React, { useState } from 'react'
import { LoginPage } from './LoginPage'
import { RegistrationPage } from './RegistrationPage'

export const SignINandUp = () => {
    const [toggle, setToggle] = useState(true);
  return (
    <>
        {toggle?<LoginPage setToggle={setToggle} toggle={toggle} />:<RegistrationPage setToggle={setToggle} toggle={toggle} />}
       
    </>
  )
}
