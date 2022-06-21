import './App.css'
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='main'>
      <Container >
        <Row>
          <Col>
            <header className="mainx">
              <div>
                <h1>MY BLOG POSTS</h1>
              </div>
              <Button type="submit" className="addpost"> + Add post</Button>
              <div>
              </div>
            </header>
            <img src="/images/Rectangle.png" alt="???" />
            <button type="submit" className="deletepost"> Delete post</button>
            <h2>
              Why Junior Developers Should Be Giving <br></br>
              Presentations
            </h2>
            <p> The idea of public speaking may have most people shuddering in fear, but I think junior developers <br></br>
              can benefit by getting over that fear and give a presentation. I want to address those fears and how <br></br>
              to overcome them as ...</p>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
