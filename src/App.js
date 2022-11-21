import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import HeaderComponent from './Header';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';


function App(props) {    

    return (
        <Container>
            <HeaderComponent />
            <NewsGroupComponent />
            <PaginationComponent />
            <ErrorModalComponent />
        </Container>
    );
}

export default App;