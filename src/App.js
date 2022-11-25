import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import HeaderComponent from './Header';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import SchoolComponent from './Body/School';
import { Route, Routes } from 'react-router-dom';


// Komponenty v React - eto obychnye JS funkcii, kotorye vozvrashajut JSX/React element
function App() {    

    // JSX - eto novqj syntax or React, kotoryj sovmeshaet v sebe JS i HTML v udobnom vide
    // JSX/React element imeet pravilo: vozvrashaetca tolko odin element ili komponent. Odin glavnyj i beskonechnoe mnozesto vtorostepennyh.
    // V JSX attribute 'class' pereimenovan v 'className'

    // React-Router-Dom eto biblioteka kotoraja pomogaet nam rabotat' s ssqlkami
    // kazdqj component Route otve4aet za otdelnuju ssylku 
    // v Route my peredajom te komponenty, kotorye my hotim videt' po dannoj v path property ssqlki
    // my mozhem peredavat' dannye s ssqlki komponentam
    // ':' oznachaet, 4to my vozmem vse 4to napisanno posle '/' i peredadim v peremennuju, kotoruju nazna4ili posle ':'
    // v nashem slu4aet http://localhost:3000/privet budet oznachat 4to my pokazyvaem newsGroup i Pagination komponenty
    // i peredajom im peremennuju q so znacheniem 'privet'
    return (
        <Container>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={
                <>
                    <NewsGroupComponent />
                    <PaginationComponent />
                </>
                } />
                <Route path="/:q" element={
                <>
                    <NewsGroupComponent />
                    <PaginationComponent />
                </>
                } />
                <Route path="/lang/:lang" element={
                <>
                    <NewsGroupComponent />
                    <PaginationComponent />
                </>
                } />
                <Route path="/contact" element={<ContactComponent />} />
                <Route path="/contact/:school" element={<SchoolComponent />} />
            </Routes>          
            <ErrorModalComponent />
        </Container>
    );
}

export default App;