import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Row, Container, Col } from 'react-bootstrap';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Home() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
      <div>
        <Container>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item style={{ position: 'relative' }}>
              <Image src="image/black-grd.jpg" alt="Slide 1"/>
              <Button variant="outline-success" style={{ position: 'absolute', top: '20%', left: '30%', transform: 'translate(-40%, -40%)' ,borderRadius: '50px'}} href="#">
                Bắt đầu từ hôm nay
              </Button>
              <Image style={{ position: 'absolute', top: '30%', left: '70%', transform: 'translate(-50%, -50%)', width: '20%', height: '60%'}} src="image/logo.png" />
              <Carousel.Caption>
                <h3>SGU Pass</h3>
                <p>Đối với những người muốn làm nhiều hơn, bảo mật hơn và cộng tác nhiều hơn, SGU Pass có thể thiết lập nhanh chóng và dễ dàng cho cả cá nhân và doanh nghiệp.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="image/black-grd.jpg" alt="Slide 2"/>
              <Image style={{ position: 'absolute', top: '30%', left: '70%', transform: 'translate(-50%, -50%)', width: '20%', height: '60%'}} src="image/logo.png" />
              <Carousel.Caption>
                <h3>Chia sẻ thông tin</h3>
                <p>Chia sẻ dữ liệu an toàn</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="image/black-grd.jpg" alt="Slide 3"/>
              <Image style={{ position: 'absolute', top: '30%', left: '70%', transform: 'translate(-50%, -50%)', width: '20%', height: '60%'}} src="image/logo.png" />
              <Carousel.Caption>
                <h3>Mật khẩu không giới hạn, thiết bị không giới hạn</h3>
                <p>Truy cập đa nền tảng cho các ứng dụng dành cho thiết bị di động, trình duyệt và máy tính để bàn</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <div style={{ textAlign: 'center',marginTop:'2%',background: '#CCCC99', color: 'black' }}>
          <Container>
            <Row>
              <Col><h1 >Thiết lập dễ dàng, không rắc rối<br/></h1>
              <h5>Quản lý mật khẩu của bạn chưa bao giờ dễ dàng hơn thế</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <div >
                  <Image src="image/e.png" style={{width:'30%',height:'30%',marginLeft:'5%'}} />
                  <br/><h3 style={{fontWeight:'bold',marginTop:'10px'}}>Bắt đầu nhanh chóng</h3>
                  <br/>Tự động tạo, lưu và điền mật khẩu trên tất cả thiết bị
                </div>
              </Col>
                
              <Col>
              <div >
                <Image src="image/f.png" style={{width:'30%',height:'30%',marginLeft:'5%'}} />
                <br/><h3 style={{fontWeight:'bold',marginTop:'10px'}}>Import từ bất cứ đâu</h3>
                <br/>Nhập từ bất kỳ trình duyệt, trình quản lý mật khẩu hoặc qua CSV chính nào
              </div>
              </Col>
              <Col>
                <div >
                  <Image src="image/g.png" style={{width:'30%',height:'30%',marginLeft:'5%'}} />
                  <br/><h3 style={{fontWeight:'bold',marginTop:'10px'}}>Luôn luôn hỗ trợ 24/7</h3>
                  <br/>Được ưu tiên hỗ trợ 24/7, trò chuyện trực tiếp và hỗ trợ qua điện thoại
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ textAlign: 'center',marginTop:'2%',background: '#99CCCC', color: 'black' }}>
          <Container>
            <Row>
              <Col><h1 >Điều gì khiến chúng tôi an toàn hơn trình quản lý mật khẩu trên trình duyệt của bạn</h1></Col>
            </Row>
            <Row>
              <Col>
                <div style={{marginTop:'10%',textAlign:'left'}}>
                  <CheckCircleIcon style={{ color: 'green' }} />
                  Chống lừa đảo <br />
                  <CheckCircleIcon style={{ color: 'green' }} />
                  Tự động xóa clipboard của bạn <br />
                  <CheckCircleIcon style={{ color: 'green' }} />
                  Chỉ có bạn mới unlock được dữ liệu của bạn <br />
                  <CheckCircleIcon style={{ color: 'green' }} />
                  Cung cấp mật khẩu mạnh mẽ cho mọi thiết bị hoặc trình duyệt<br/> 
                  <CheckCircleIcon style={{ color: 'green' }} />
                  Hoạt động với tất cả các thiết bị và trình duyệt <br />
                  <CheckCircleIcon style={{ color: 'green' }} />
                  Hoạt động với chế độ ẩn danh/riêng tư<br />
                  <CheckCircleIcon style={{ color: 'green' }} />
                  Đăng nhập bằng một cú nhấp chuột vào nhiều tài khoản<br />
                  <CheckCircleIcon style={{ color: 'green' }} />
                  Có thể chia sẻ mật khẩu một cách an toàn với bạn bè/gia đình
                </div>
              </Col>
              <Col><Image src="image/d.jpg" style={{transform: 'translate(-50%, -50%)', width: '80%', height: '70%',marginTop:'30%',marginLeft:'40%'}} /></Col>
            </Row>
          </Container>
        </div>
        <div style={{background:'#CCCC99'}}>
          <Container style={{marginTop: '2%'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="image/a.png" style={{ marginRight: '10px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2>Tạo, hợp nhất và tự động điền mật khẩu mạnh và an toàn cho tất cả tài khoản của bạn</h2>
                <p>SGUPass cung cấp cho bạn khả năng tạo và quản lý mật khẩu duy nhất, do đó bạn có thể tăng cường quyền riêng tư và tăng năng suất trực tuyến từ bất kỳ thiết bị hoặc vị trí nào.</p>
              </div>
            </div>
          </Container>
          <Container style={{marginTop: '15px'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2>Chia sẻ thông tin được mã hóa một cách an toàn trực tiếp với bất kỳ ai</h2>
                <p>SGUPass Send là một tính năng cho phép tất cả người dùng truyền dữ liệu trực tiếp cho người khác, đồng thời duy trì bảo mật được mã hóa hai đầu và hạn chế tiếp xúc.</p>
              </div>
              <Image src="image/b.png" style={{ marginRight: '10px' }} />
            </div>
          </Container>
          <Container style={{marginTop: '15px'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="image/c.png" style={{ marginRight: '10px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2>Đạt được sự an tâm với sự tuân thủ toàn diện</h2>
                <p>Bảo vệ dữ liệu trực tuyến của bạn bằng trình quản lý mật khẩu mà bạn có thể tin cậy. SGUPass tiến hành kiểm tra bảo mật thường xuyên của bên thứ ba và tuân thủ các tiêu chuẩn GDPR, SOC 2, HIPAA, Privacy Shield và CCPA.</p>
              </div>
            </div>
          </Container>
        </div>   
        
      </div>
  );
}

export default Home