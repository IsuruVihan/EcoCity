import React from 'react';
import {Container,Button , Image} from "react-bootstrap";
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
      <Container fluid className='mx-0'>
          <div className='p-4'>
            <h1 className="text-center" style={{fontWeight:"bold" }}>Login</h1>
          </div>
          {/* form  */}
          <div style={{ paddingLeft: 100, paddingRight: 100 }}>
          <form >
            <div className=' m-1 p-3'>
            <div className='p-1'>
                <label for="email" style={{color:'#238692' , fontWeight:600}}>Email</label>
            </div>
            <div className='d-flex ' style={{borderBottom:1 , borderBottom:'solid' , borderBlockColor:'#238692'}}>
            <div style={{backgroundSize:'cover'}} >
                <Image src={email} style={{width:20 , height:20}} fluid />
            </div>
            <div>
            <input type="text" style={{width:370 , border:'none' , outline:'none'}}/>
            </div>
            </div>
            </div>

            <div className=' m-1 p-3'>
            <div className='p-1'>
                <label for="password" style={{color:'#238692' , fontWeight:600}}>Password</label>
            </div>
            <div className='d-flex p-1'style={{borderBottom:1 , borderBottom:'solid' , borderBlockColor:'#238692'}} >
            <div style={{backgroundSize:'cover'}} >
                <Image src={password} style={{width:20 , height:20}} fluid/>
            </div>
            <div>
                <input type="password" style={{width:330 , border:'none' , outline:'none'}} id="password"/>
            </div>
            <div  className="d-flex">
                <div  style={{width:20 ,height:20}}><Image src={vline} fluid/></div>
                <button style={{border:'none' , outline:'none' , backgroundColor:'#fff'}} onClick={showPassword}> <div  style={{width:20 ,height:20}}><Image src={eye} fluid/></div> </button>
            </div>
            </div>
            </div>

            <div className=' m-1 p-1 d-flex' style={{justifyContent:'space-between'}}>
            <div className=' m-1 ' style={{paddingLeft:3 , paddingRight:3}}>
            <input type="checkbox" class="checkbox"/>
                        <label style={{color:'#bfddde'}}>Remember me</label>
            </div>
            <div>
            <Link to={'/forgot-password'} style={{color:'#bfddde'}}>Forget-password?</Link>
            </div>
            </div>
            
            <div style={{paddingLeft:40 , paddingRight:40}}>
            <Button variant="primary" type="submit" className="shadow"
                    style={{backgroundColor:'#238692' , fontSize:20 ,paddingTop:10, width:'100%' , justifyContent:'center' ,paddingBottom:10, borderRadius:15 }}>
                    Sign In
            </Button>
            </div>
            </form>
          </div>


          {/* next container  */}
          <div className="d-flex justify-content-center" >
              <div><Image src={hline}/></div>
              <div><h5 className="text-center p-2" style={{color:'#075061'}} >Or sign In with</h5></div>
              <div><Image src={hline}/></div>
          </div>
          {/* icon container  */}
          <div>
              <div className="d-flex  justify-content-center" >
                  <div className=' rounded-4  border border-2 ' style={{backgroundColor:'#ecfafc' , borderColor:'#ecfafc' , marginLeft:1 , marginRight:1}}>
                      <Link to={'/#'} className="d-flex justify-content-center text-decoration-none">
                          <div style={{width:30 , height:30}} className="m-3"><Image src={google} fluid></Image></div>
                          <div className='p-3' style={{color:'#075061' ,   fontSize:17}}>Google</div>
                      </Link>
                  </div>
                  <div className="d-flex justify-content-space-evenly">
                      <div className=' rounded-4  border border-2' style={{backgroundColor:'#ecfafc' , borderColor:'#ecfafc' , marginLeft:1 ,marginRight:1}}>
                          <Link to={'/#'}  className="d-flex justify-content-center text-decoration-none">
                              <div style={{width:32 , height:32}} className="m-3" ><Image src={facebook} fluid></Image></div>
                              <div className='p-3' style={{color:'#075061', fontSize:17}}>Facebook</div>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </Container>
  );
}

export default LoginForm;
