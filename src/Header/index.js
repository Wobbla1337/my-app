import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

function HeaderComponent() {
    // Link component pomogaet pravilno rabotat' s ssqlkami v React prilozenii
    // Link zapuskaet react-router, kotoryj v svoju o4ered' reshaet kakie komponenty pokazyvat'
    // blagodarja Link i Route u nas ne perezagruzaetca stranica, a tolko renderitca komponent
    return (
        <Navbar bg="light" className ="mb-5">
            <Container>
                <Link to="/" className="navbar-brand">              
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    News
                </Link>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/contact/school" className="nav-link">School</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderComponent;