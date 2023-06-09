import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider.jsx';


const Login = () => {

    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const froms = location.state?.from?.pathname || "/";



    const handlerSingin = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        // console.log("samaul", email, password);

        userLogin(email, password)
            .then(Result => {
                const user = Result.user;
                // console.log('samaul', user);
                navigate(froms, { replace: true });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh", backgroundColor: "rgba(0,0,255,.1)" }}>
            <div className='w-50 bg-white p-5 rounded' >
                <h5 className='text-center fs-2 fw-bold'>Login your account</h5>
                <hr />
                <Form onSubmit={handlerSingin} className="w-75 mx-auto">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="fw-semibold fs-6">Email address</Form.Label>
                        <Form.Control className="border-0" style={{ backgroundColor: "rgba(0,0,255,.1)" }} type="email" name='email' required placeholder="Enter your email address" />
                    </Form.Group>
                    <Form.Label className="fw-semibold fs-6" htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Enter your password"
                        className="border-0"
                        style={{ backgroundColor: "rgba(0,0,255,.1)" }}
                        name='password'
                        required
                    />
                    <div className="d-grid my-4">

                        <Button type='submit' variant="secondary" size="lg">
                            Login
                        </Button>

                    </div>
                    <h6 className='text-center'>Dont’t Have An Account ? <Link to='/register' className='text-decoration-none text-danger fw-semibold'>Register</Link></h6>
                </Form>

            </div>
        </div>
    );
};

export default Login;