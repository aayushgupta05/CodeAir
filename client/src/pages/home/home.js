import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import HomeIcon from "../../assets/images/HomeIcon.svg";
import axios from "axios";

function Home(props) {
  return (
    <Container className="home-container">
      <Row>
        <Col md={5} className="home-brand-text-column">
          <h1>CodeAir</h1>
          <h6>
            Still using video-calling platforms for your code-pairing sessions?
            Just like you were told to write code in a word document?
          </h6>
          <h6>
            Leave the one-size-fits-all train; pick softwares tailored
            specifically for your needs and use-case.
          </h6>
          <Button
            variant=""
            className="primary-button"
            onClick={async () => {
              const roomId = await generateRoom();
              props.history.push(`/${roomId}`);
            }}
          >
            Create Room
          </Button>
          <Row>
            <small>
              Room link will be automatically copied to your clipboard.
            </small>
          </Row>
        </Col>
        <Col md={7}>
          <Image src={HomeIcon} className="home-icon" alt="Home Banner" />
        </Col>
      </Row>
    </Container>
  );
}

async function generateRoom() {
  try {
    const newRoomKey = await axios.get(
      `${process.env.REACT_APP_BACKEND_API}/generate`
    );
    navigator.clipboard.writeText(
      `${process.env.REACT_APP_URL}/${newRoomKey.data.roomId}`
    );
    return newRoomKey.data.roomId;
  } catch(error) {
    console.log(`Server connection error: ${error}`);
  }
}

export default Home;
