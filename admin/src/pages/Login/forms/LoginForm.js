import React from 'react';
import {Container, Button, Image, Row, Col , Form} from "react-bootstrap";
import {Link} from 'react-router-dom';



import google from '../../../assets/images/google.png';
import facebook from '../../../assets/images/facebook.png';
import hline from '../../../assets/images/icons/horizontalLine.png';
import password from '../../../assets/images/icons/password.png';
import eye from '../../../assets/images/icons/eye.png';
import email from '../../../assets/images/icons/email.png';
import vline from '../../../assets/images/icons/verticalLine.png';



const LoginForm = () => {
    function showPassword() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
  return (
      <Container fluid className='mx-0 '>
          <Row className="mx-0 justify-content-center  p-4 ">
              <h1 className="text-center" style={{fontWeight:800 }}>Login</h1>
          </Row>
            <Form>
                <Container>
                          <Row className="mx-0 justify-content-center  px-0">


                                  <Row className="mx-0 justify-content-center  px-0 pt-4">
                                        <Col style={{paddingLeft:85 , paddingRight:85}}>
                                                     <div className=' m-1 p-1'>
                                                        <div>
                                                              <label for="email" style={{color:'#238692' , fontWeight:600}}>Email</label>
                                                         </div>
                                                      <div className='d-flex  ' style={{borderBottom:1 , borderBottom:'solid' , borderBlockColor:'#238692'}}>
                                                          <div style={{backgroundSize:'cover'}} >
                                                             <Image src={email} style={{width:20 , height:20}} fluid />
                                                         </div>
                                                          <div>
                                                         <input type="text" style={{width:330 , border:'none' , outline:'none'}}/>
                                                          </div>
                                                      </div>
                                                     </div>
                                        </Col>
                                  </Row>
                                  <Row className="mx-0 justify-content-center  px-0 pt-4">
                                      <Col style={{paddingLeft:85 , paddingRight:85}}>
                                          <div className=' m-1 p-1 '>
                                              <div >
                                                  <label htmlFor="email"
                                                         style={{color: '#238692', fontWeight: 600}}>Password</label>
                                              </div>
                                              <div className='d-flex pb-1 ' style={{ borderBottom: 1,borderBottom: 'solid',borderBlockColor: '#238692'}}
                                                 >
                                                  <div style={{backgroundSize: 'cover'}}>
                                                      <Image src={password} style={{width: 20, height: 20}} fluid/>
                                                  </div>
                                                  <div>
                                                      <input type="password" id="password"
                                                             style={{width: 370, border: 'none', outline: 'none'}}/>
                                                  </div>
                                                  <div  className="d-flex  mx-0  px-0" >
                                                      <div  style={{width:20 ,height:20}}><Image src={vline} fluid/></div>
                                                      <button style={{border:'none' , outline:'none' , backgroundColor:'#fff'}} onClick={showPassword}> <div  style={{width:20 ,height:20}}><Image src={eye} fluid/></div> </button>
                                                  </div>
                                              </div>

                                          </div>
                                      </Col>
                                  </Row>
                              <Row className="mx-0 justify-content-center  px-0">
                                  <Col style={{paddingLeft:85 , paddingRight:85}} className="d-flex justify-content-between">
                                      <div className=' m-1 p-1'>
                                          <input  type="checkbox" />
                                          <label style={{color:'#bfddde' }}>Remember me</label>
                                      </div>
                                      <div className=' m-1 p-1'>
                                          <Link to={'/forgot-password'} style={{color:'#bfddde'}}>Forget-password?</Link>
                                      </div>
                                  </Col>
                              </Row>

                              <Row className="mx-0 justify-content-center p-2 px-0 ps-5 pe-5">
                                            <div style={{paddingLeft:80 , paddingRight:80}} >
                                                <Button variant="primary" type="submit" className="shadow "
                                                     style={{backgroundColor:'#238692' , fontSize:20 ,paddingTop:10, width:'100%' , justifyContent:'center' ,paddingBottom:10, borderRadius:15  , outline:'none' , border:1 , borderColor:'red' , }}>
                                                        Sign In
                                              </Button>
                                       </div>
                              </Row>

                          </Row>
                </Container>
            </Form>
          <Row className="mx-0 justify-content-center d-flex">
              {/* next container  */}
              <div className="d-flex justify-content-center " >
                  <div><Image src={hline}/></div>
                  <div><p className="text-center p-2" style={{color:'#075061'}} >Or sign In with</p></div>
                  <div><Image src={hline}/></div>
              </div>
          </Row>
          <Row className="mx-0 justify-content-center">
              <Col className="mx-0 pb-5  d-flex justify-content-center ">
                  <div className="d-flex justify-content-space-evenly">
                      <div className=' rounded-4 border border-2 '
                           style={{backgroundColor:'#ecfafc' , borderColor:'#ecfafc' , marginLeft:1 ,marginRight:1  ,width:160 ,height:60 }}>
                          <Link to={'/#'}  className="d-flex justify-content-center text-decoration-none">
                              <div style={{width:35 , height:35}} className=" m-2" ><Image src={google} fluid></Image></div>
                              <div  style={{color:'#075061', fontSize:15 , paddingTop:15 , fontWeight:'bold'}}>Facebook</div>
                          </Link>
                      </div>
                  </div>
                  <div className="d-flex justify-content-space-evenly">
                      <div className=' rounded-4  border border-2'
                                  style={{backgroundColor:'#ecfafc' , borderColor:'#ecfafc' , marginLeft:1 ,marginRight:1  ,width:160 ,height:60 }}>
                                      <Link to={'/#'}  className="d-flex justify-content-center text-decoration-none">
                                          <div style={{width:35 , height:35}} className=" m-2" ><Image src={facebook} fluid></Image></div>
                                          <div  style={{color:'#075061', fontSize:15 , paddingTop:15 , fontWeight:'bold'}}>Facebook</div>
                                    </Link>
                      </div>
                  </div>
              </Col>
          </Row>








          {/*                  <input type="password" style={{width:270 , border:'none' , outline:'none'}} id="password"/>*/}
          {/*              </div>*/}
          {/*          <div  className="d-flex border border-2 border-danger mx-0">*/}
          {/*              <div  style={{width:20 ,height:20}}><Image src={vline} fluid/></div>*/}
          {/*              <button style={{border:'none' , outline:'none' , backgroundColor:'#fff'}} onClick={showPassword}> <div  style={{width:20 ,height:20}}><Image src={eye} fluid/></div> </button>*/}
          {/*          </div>*/}
          {/*          </div>*/}
          {/*          </div>*/}


          {/*          <div className=' m-1 p-2 d-flex border order-2 border-primary' style={{justifyContent:'space-between'}}>*/}
          {/*              <div className=' m-1 d-flex border border-2 border-danger' style={{paddingLeft:3 , paddingRight:3}} >*/}
          {/*                  <div>*/}

          {/*                          <input type="checkbox" className="checkbox" />*/}

          {/*                  </div>*/}
          {/*                          <label style={{color:'#bfddde' }}>Remember me</label>*/}
          {/*              </div>*/}
          {/*              <div>*/}
          {/*              <Link to={'/forgot-password'} style={{color:'#bfddde'}}>Forget-password?</Link>*/}
          {/*              </div>*/}
          {/*          </div>*/}

          {/*          <div style={{paddingLeft:40 , paddingRight:40}}>*/}
          {/*              <Button variant="primary" type="submit" className="shadow border border-2 border-danger"*/}
          {/*                      style={{backgroundColor:'#238692' , fontSize:20 ,paddingTop:10, width:'100%' , justifyContent:'center' ,paddingBottom:10, borderRadius:15  , outline:'none' , border:1 , borderColor:'red' , }}>*/}
          {/*                      Sign In*/}
          {/*              </Button>*/}
          {/*          </div>*/}
          {/*          </form>*/}
          {/*</div>*/}





      </Container>
  );
}

export default LoginForm;
