import React , {useState} from 'react';
import {Container, Button, Image, Row, Col , Form} from "react-bootstrap";
import {Link} from 'react-router-dom';



import google from '../../../assets/images/google.png';
import facebook from '../../../assets/images/facebook.png';
import hline from '../../../assets/images/icons/horizontalLine.png';
import password from '../../../assets/images/icons/password.png';
import eye from '../../../assets/images/icons/eye.png';
import email from '../../../assets/images/icons/email.png';




const LoginForm = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
  return (

      <Container className="border border-1 border-success h-100 "  >
          <Row className="border border-1 border-primary justify-content-md-center p-5 " >
              <h1 className="text-center" style={{fontWeight:800 }}>Login</h1>
          </Row>
          <Row>
              <Col  className="p-1">
              </Col>
              <Col className="border border-1 border-warning pt-2" xs={7}>
                  <Row className="pb-5">
                      <Container style={{borderBottom:'2px solid #238692'}} className="pe-1 ps-1  border-1 ">
                        <Col >
                            <Row className="pb-1">
                              <label htmlFor="email" style={{color: '#238692', fontWeight: 700}}>Email</label>
                            </Row>
                            <Row >
                              <Col >
                                    <Image style={{width:20 ,height:20}} src={email} fluid/>
                              </Col>
                              <Col xs={9} className="p-1">
                                    <input type="text" style={{ border:'none' , outline:'none'}}/>
                              </Col>
                              <Col ></Col>
                            </Row>
                        </Col>
                      </Container>
                  </Row>
                  <Row className="pb-3">
                      <Container style={{borderBottom:'2px solid #238692'}} className="pe-1 ps-1  border-1">
                        <Col>
                          < Row className="pb-1">
                                <label htmlFor="email" style={{color: '#238692', fontWeight: 700}}>Password</label>
                          </Row>
                          <Row >
                              <Col >
                                    <Image style={{width:20 ,height:20}} src={password} fluid/>
                              </Col>
                              <Col xs={9} className="p-1">
                                    <input type={passwordShown ? "text" : "password"} style={{ border:'none' , outline:'none'}}/>
                              </Col>
                              <Col style={{borderLeft:"2px solid #bfddde"}} >
                                       <button onClick={togglePassword} style={{border:'none' , outline:'none' , backgroundColor:"#fff" }}>
                                           <Image src={eye} fluid/>
                                       </button>
                              </Col>
                          </Row>
                        </Col>
                      </Container>
                      <Container className="pe-1 ps-1">
                          <Row className="pt-2  ">
                              <Col >
                                  <input  type="checkbox" />
                                  <label style={{color:'#bfddde' }}>Remember me</label>
                              </Col>
                              <Col style={{textAlign:'right'}} >
                                  <Link to={'/forgot-password'} style={{color:'#bfddde'}} >Forgot password?</Link>
                              </Col>
                          </Row>
                      </Container>

                  </Row>
                  <Row className=" justify-content-center">
                        <Col xs={10} >
                            <Button variant="primary" type="submit" className="shadow "
                                    style={{backgroundColor:'#238692' ,
                                            fontSize:20 ,
                                            paddingTop:10,
                                            width:'100%' ,
                                            justifyContent:'center' ,
                                            paddingBottom:10,
                                            borderRadius:15  ,
                                            outline:'none' ,
                                            border:1 ,
                                            borderColor:'red' , }}>
                                Sign In
                            </Button>
                        </Col>
                  </Row>
                  <Row >
                      <Col>
                          <Row className="p-2">
                              <Col className="d-flex" style={{justifyContent:'center' , alignItem:'center'}}>
                                  <Image src={hline}/>
                                  <p className="text-center pt-2"
                                     style={{color:'#075061'}} >
                                      Or sign In with
                                  </p>
                                  <Image src={hline}/>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
                  <Row>
                      <Col></Col>
                      <Col className=" d-flex justify-content-between" xs={10}  >
                        <Container className="border border-1 me-1  d-flex rounded-3 " style={{backgroundColor:'#ecfafc'}}>
                            <Col className="p-1">
                                <Image src={google} fluid/>
                            </Col>
                            <Col xs={7} className="pt-3">
                                <Link to={'/#'}  className="d-flex justify-content-center text-decoration-none"
                                      style={{color:'#075061',
                                          fontSize:13 ,
                                          fontWeight:'bold'}}>
                                    Google
                                </Link>
                            </Col>
                        </Container>
                        <Container className="border border-1  ms-1 d-flex rounded-3" style={{backgroundColor:'#ecfafc'}}>
                            <Col className="p-1">
                                  <Image src={facebook} fluid/>
                            </Col>
                            <Col xs={7} className="pt-3">
                                  <Link to={'/#'}  className="d-flex justify-content-center text-decoration-none"
                                        style={{color:'#075061',
                                            fontSize:13 ,
                                            fontWeight:'bold'}}>
                                      Facebook
                                  </Link>
                            </Col>
                        </Container>
                      </Col>
                      <Col></Col>
                  </Row>
              </Col>
              <Col >

              </Col>
          </Row>
      </Container>


  );
}

export default LoginForm;
