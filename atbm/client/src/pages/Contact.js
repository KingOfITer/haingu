import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
    const backgroundStyle = {
        backgroundImage: 'url("image/bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Để đảm bảo văn bản có đủ độ tương phản với nền hình ảnh
      };

  return (
    
    <div style={backgroundStyle}>
      <h1 style={{ textAlign: 'center',marginTop:'-30%' }}>Liên hệ với chúng tôi</h1>
    <Container style={{marginTop:'10%',marginRight:'10%'}}>
        <Row>
            <Col>
                <AddLocationAltIcon style={{fontSize:'200%'}}/>
                <h3>Địa chỉ</h3>273 An Dương Vương, phường 13, quận 5, TP.Hồ Chí Minh, Việt Nam
                <br/><br/>
                <PhoneInTalkIcon style={{fontSize:'200%'}}/>
                <h3>Đường dây nóng</h3>0123123321
                <br/><br/>
                <MailOutlineIcon style={{fontSize:'200%'}}/>
                <h3>Email</h3>sgupass@gmail.com
                <br/><br/>
            </Col>
            <Col>
                <div style={{width:'400px',height:'500px',backgroundColor:'white',color:'black'}}>
                    <div style={{width:'300px',height:'400px',position: 'absolute', top: '50%', left: '57%'}}>
                        <h2>Gửi tin nhắn</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                
                                <Form.Label>Tên của bạn</Form.Label>
                                <Form.Control type="name" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicMessage">
                                <Form.Label>Viết tin nhắn</Form.Label>
                                <Form.Control type="message" placeholder="Message" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">
                                Gửi
                            </Button>
                        </Form>
                    </div>
                </div>
            </Col>
        </Row>
        
    </Container>
      
    </div>
    
  );
}

export default Contact;