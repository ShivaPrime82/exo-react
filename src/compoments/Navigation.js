import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {

    // eslint-disable-next-line no-restricted-globals
    const check = location.pathname === "/" ? "active" : "";
    // eslint-disable-next-line no-restricted-globals
    const check1 = location.pathname === "/comments/create" ? "active" : "";
    //const check1 = location.pathname.match(/^\/comments/ + /^\create/) ? "active" : "";
    // eslint-disable-next-line no-restricted-globals
    const check2 = location.pathname === "/comments/delete" ? "active" : "";
    //const check2 = location.pathname.match(/^\/comments/ + /^\delete/) ? "active" : "";

    return (
        <Nav variant="pills" className="d-flex justify-content-end">
            <Nav.Item>
                <Nav.Link as={Link} to="/" active={check}>Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link as={Link} to="/comments/create" active={check1}>Créer un commentaire</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/comments/delete" active={check2}>Supprime un commentaire</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;