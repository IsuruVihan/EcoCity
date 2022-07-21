import React from 'react';
import {Container, Form ,Button , Image} from "react-bootstrap";
import {Link} from 'react-router-dom';

import google from '../../../assets/images/google.png';
import facebook from '../../../assets/images/facebook.png';
import hline from '../../../assets/images/icons/horizontalLine.png';
import password from '../../../assets/images/icons/password.png';
import eye from '../../../assets/images/icons/eye.png';
import email from '../../../assets/images/icons/email.png';
import vline from '../../../assets/images/icons/verticalLine.png';


const LoginForm = () => {
  return (
      <Container fluid className='mx-0 p-5'>
          <div><h1 className="text-center" style={{fontWeight:800 }}>Login</h1></div>
          {/* form  */}
          <Form className="justify-content-center align-items-center">
              <Form.Group className="mb-3" controlId="formBasicEmail" style={{margin:15 }}>
                  <Form.Label style={{color:'#238692' , fontWeight:600}}>Email address</Form.Label>

                  <div className='border-bottom d-flex' style={{borderColor:'#238692'}}>
                      <div style={{width:26 ,height:26}}>
                          <Image src={email} fluid/>
                      </div>
                      <Form.Control type="email" style={{ outline:'none' ,border:'none'}}/>
                  </div>

              </Form.Group>

              <Form.Group className="m-3" controlId="formBasicPassword" style={{margin:15}}>
                  <Form.Label style={{color:'#238692' , fontWeight:600}}>Password</Form.Label>

                  <div className='border-bottom d-flex'>
                      <div style={{width:26 ,height:26}}>
                          <Image src={password} fluid/>
                      </div>
                      <Form.Control type="password" style={{ outline:'none' , border:'none'}}/>
                      <div  className="d-flex">
                          <div  style={{width:26 ,height:26}}><Image src={vline} fluid/></div>
                          <div  style={{width:26 ,height:26}}><Image src={eye} fluid/></div>
                      </div>
                  </div>

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{margin:15 , display:'flex' , justifyContent:'space-between'}}>
                  <Form.Check type="checkbox" label="Remember me" style={{color:'#bfddde' , fontWeight:600}}/>
                  <Link to={'/forgot-password'} style={{color:'#bfddde'}}>Forget-password?</Link>
              </Form.Group>

              <Button variant="primary" type="submit"
                      style={{backgroundColor:'#238692' , fontSize:20 ,paddingTop:10, width:'50%' , marginLeft:'25%' ,marginRight:'25%' ,paddingBottom:10, borderRadius:15 }}>
                  Sign In
              </Button>
          </Form>


          {/* next container  */}
          <div className="p-4 d-flex justify-content-center" >
              <div><Image src={hline}/></div>
              <div><h3 className="text-center p-1" style={{color:'#065161'}} >Or sign In with</h3></div>
              <div><Image src={hline}/></div>
          </div>
          {/* icon container  */}
          <div>
              <div className="d-flex justify-content-space-evenly" >
                  <div className=' rounded-3 p-1 m-1 border border-2' style={{backgroundColor:'#ecfafc' , borderColor:'#ecfafc'}}>
                      <Link to={'/#'} className="d-flex justify-content-center text-decoration-none">
                          <div className='w-25'><Image src={google} fluid></Image></div>
                          <div className='p-3' style={{color:'#238692' , fontWeight:800}}>Google</div>
                      </Link>
                  </div>
                  <div className="d-flex justify-content-space-evenly">
                      <div className=' rounded-3 p-1 m-1 border border-2' style={{backgroundColor:'#ecfafc' , borderColor:'#ecfafc'}}>
                          <Link to={'/#'}  className="d-flex justify-content-center text-decoration-none">
                              <div className='w-25' ><Image src={facebook} fluid></Image></div>
                              <div className='p-3' style={{color:'#238692' , fontWeight:800}}>Facebook</div>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </Container>
  );
}

export default LoginForm;
