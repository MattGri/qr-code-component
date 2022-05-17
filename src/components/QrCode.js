import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 15px 15px 30px 15px;
  width: 255px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const QrImage = styled.img`
  display: block;
  width: 230px;
  height: 230px;
  border-radius: 30px;
  margin: 0 auto 30px auto;
`;

const Title = styled.h4`
  text-align: center;
  color: #2d3747;
  margin-bottom: 20px;
`;

const SubTitle = styled.h5`
    color: #b9bcc1;
    text-align: center;
`

const QrCode = () => {
  useEffect(() => {
    document.title = 'QR code component';
  }, []);

  return (
    <Container>
      <QrImage src="/images/qr.png" alt="image" />
      <Title>Improve your front-end skills by building projects</Title>
      <SubTitle>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</SubTitle>
    </Container>
  );
};

export default QrCode;
