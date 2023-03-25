
import Container from 'react-bootstrap/esm/Container';
import './App.css';

import HeaderNavbar from './components/header/header';

import ImageOne from './components/body/imageOne';
import ImageTwo from './components/body/imageTwo';
import ImageThree from './components/body/imageThree';
import TextBox from './components/body/TextBox';


function App() {
  return (
    <div className="App">
      
      <Container >
        <HeaderNavbar />
      </Container>

      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />

      <Container >
        <HeaderNavbar />
      </Container>

    </div>
  );
}

export default App;
