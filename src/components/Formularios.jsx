import React, { useState } from 'react'
import Datos from './Datos';

const Formularios = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (

        <div className='container-formulario'>
            <h2>formulario</h2>

            <form onSubmit={handleSubmit}>
                <div className='label-box'>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        id='firstName'
                        type="text"
                        className="input-container"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='label-box'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        id='lastName'
                        type="text"
                        className="input-container"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>

                <div className='label-box'>
                    <label htmlFor="email">Email: </label>
                    <input
                        id='email'
                        type="email"
                        className="input-container"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='label-box'>
                    <label htmlFor="password">Password: </label>
                    <input
                        id='password'
                        type="password"
                        className="input-container"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='label-box'>
                    <label htmlFor="confirmPassword"> Confirm your password: </label>
                    <input
                        id='confirmPassword'
                        type="password"
                        className="input-container"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>



            </form>
            <Datos 
                nombre={nombre}
                apellido= {apellido}
                email= {email}
                password= {password}
                confirmPassword= {confirmPassword}

            />

        </div>

    )
}

export default Formularios
