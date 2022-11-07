import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body/NewsGroup';
import HeaderComponent from './Body/Header';


function App() {
    return (
        <Container>
            <HeaderComponent />
            <NewsGroupComponent />
        </Container>
    );
}

export default App;