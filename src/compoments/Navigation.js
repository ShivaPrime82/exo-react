import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <Nav variant="pills" defaultActiveKey="/" className="d-flex justify-content-end">
            <Nav.Item>
                <Nav.Link as={Link} to="/" eventKey="/">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link as={Link} to="/comments/create" eventKey="link-1">Créer un commentaire</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/comments/delete" eventKey="link-2">Supprime un commentaire</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;