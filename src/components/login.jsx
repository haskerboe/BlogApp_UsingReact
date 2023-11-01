import React, { useState } from 'react'
import { Input } from '../ui'
import { logo } from '../constants'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='text-center mt-5'>
            <main class="form-signin w-25 m-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="92" />
                    <h1 className="h3 mb-3 fw-normal">Please login</h1>
                    <Input label={'Email Address'} state={email} setState={setEmail} />
                    <Input label={'Password'} state={password} setState={setPassword} type={'password'} />

                    <button className="btn btn-primary w-100 py-2 mt-3" type="submit">Login</button>
                </form>
            </main>
        </div>
    )
}

export default Login