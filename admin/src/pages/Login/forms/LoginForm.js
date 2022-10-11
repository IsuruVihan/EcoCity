import React, {useState} from 'react';
import {Container, Row, Col, Image, Form} from "react-bootstrap";

import AtSign from '../../../assets/images/icons/email.png';
import LockSign from '../../../assets/images/icons/password.png';
import EyeSign from '../../../assets/images/icons/eye.png';
import EyeHideSign from '../../../assets/images/icons/eye-hide.png';
import {useDispatch} from "react-redux";
import {login, registerLogin} from "../../../redux/reducers/authSlice";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleOneLoginClicked = (e) => {
        e.preventDefault();
        const userDetails = {
            email: 'harshaabeyvickrama@gmail.com',
            password: 'harsha98'
        }
        dispatch(registerLogin(userDetails));

    }
    const handleOnEmailChanged = (e) => {
        setEmail(e.target.value);
    }
    const handleOnPasswordChanged = (e) => {
        setPassword(e.target.value);

    }

    return (
        <Container className="p-0">
            <Row className="m-0 mb-5">
                <Col
                    className="p-0"
                    style={{textAlign: 'center', fontSize: 30, fontWeight: '900', color: '#042434'}}>
                    Login
                </Col>
            </Row>
            <Form onSubmit={handleOneLoginClicked} id='loginForm'>
                <Row style={{marginLeft: '8em', marginRight: '8em'}}>
                    <Col className="p-0 mb-5" sm={12}>
                        <Row className="m-0">
                            <Col className="p-0 mb-2" style={{fontWeight: 500, fontSize: 17, color: '#075061'}}
                                 sm={12}>Email</Col>
                            <Col className="p-0" sm={12}>
                                <Row className="m-0 pb-1"
                                     style={{borderBottom: '2.5px solid #7CB6B8'}}> {/*Border bottom*/}
                                    <Col className="p-0" style={{display: 'flex', alignItems: 'center'}} sm={1}>
                                        <Image src={AtSign} width='50%'/>
                                    </Col>
                                    <Col className="p-0" sm={11}>
                                        <input
                                            className='input-field'
                                            type='email'
                                            style={{width: '100%', color: '#7CB6B8', outline: 'none', border: 'none'}}
                                            onChange={handleOnEmailChanged}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="p-0 pb-3" sm={12}>
                        <Row className="m-0">
                            <Col className="p-0 mb-2" style={{fontWeight: 500, fontSize: 17, color: '#075061'}}
                                 sm={12}>Password</Col>
                            <Col className="p-0" sm={12}>
                                <Row className="m-0 pb-1"
                                     style={{borderBottom: '2.5px solid #7CB6B8'}}> {/*Border bottom*/}
                                    <Col className="p-0" style={{display: 'flex', alignItems: 'center'}} sm={1}>
                                        <Image src={LockSign} width='50%'/>
                                    </Col>
                                    <Col className="p-0" sm={10}>
                                        <input
                                            className='input-field'
                                            type={showPassword ? 'text' : 'password'}
                                            style={{width: '100%', color: '#7CB6B8', outline: 'none', border: 'none'}}
                                            onChange={handleOnPasswordChanged}
                                        />
                                    </Col>
                                    <Col
                                        className="p-0"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderLeft: '1px solid #BFDDDE'
                                        }}
                                        sm={1}
                                    ><Image
                                        src={showPassword ? EyeSign : EyeHideSign}
                                        width='50%'
                                        style={{cursor: 'pointer'}}
                                        onClick={() => setShowPassword(!showPassword)}
                                    /></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="p-0 pb-4" sm={12}>
                        <Row className="m-0">
                            <Col className="p-0 d-flex align-items-center">
                                <input type='checkbox' style={{cursor: 'pointer'}}/>
                                <label className='ms-1' style={{color: '#BFDDDE', fontSize: 15, fontWeight: '500'}}>Remember
                                    me</label>
                            </Col>
                            <Col className="p-0 d-flex justify-content-end align-items-center">
                                <label
                                    className='ms-1'
                                    style={{
                                        color: '#BFDDDE',
                                        fontSize: 15,
                                        fontWeight: '500',
                                        textDecoration: 'underline',
                                        cursor: 'pointer'
                                    }}>Forgot password?</label> {/*Border bottom*/}
                            </Col>
                        </Row>
                    </Col>
                    <Col className="p-0 d-flex justify-content-center" sm={12}>
                        <button
                            style={{
                                background: '#228693',
                                color: 'white',
                                borderRadius: '15px',
                                width: '70%',
                                height: '3em',
                                fontWeight: '600',
                                boxShadow: `0px 4px 8px rgba(34, 134, 147, 20)`,
                                border: 'none'
                            }}
                        >
                            Sign in
                        </button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default LoginForm;
