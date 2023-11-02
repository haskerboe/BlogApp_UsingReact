import React, { useState } from 'react'
import { logo } from '../constants'
import { Input } from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import { registerUserStart } from '../slice/auth'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.auth)
    const registerHandler = e => {
        e.preventDefault()
        dispatch(registerUserStart())
    }
    return (
        <div className='text-center mt-5'>
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="92" />
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <Input label={'Username'} state={name} setState={setName} />
                    <Input label={'Email Address'} state={email} setState={setEmail} />
                    <Input label={'Password'} state={password} setState={setPassword} type={'password'} />

                    <button className="btn btn-primary w-100 py-2 mt-3" type="submit" onClick={registerHandler} disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Register'}
                    </button>
                </form>
            </main>
        </div>
    )
}

export default Register