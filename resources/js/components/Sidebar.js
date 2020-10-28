import React, { Component } from 'react';
import {Navbar, Nav, ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {AiOutlineTwitter, AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai';
class Sidebar extends Component {

    constructor(props) {
        super(props);
        // props
    }

    render() {
        return (
            <>
                <header className="header text-center">
                    <h1 className="blog-name pt-lg-4 mb-0">Rashadul's Blog</h1>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="profile-section">
                            <img className="profile-img rounded-circle mx-auto" src="http://placehold.it/250x250" />
                            <div className="bio-data">
                                Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.
                                <a href="#">Find out more about me</a>
                                <ListGroup horizontal className="b-0 mx-auto">
                                    <ListGroup.Item><a href="/"><AiOutlineTwitter /></a></ListGroup.Item>
                                    <ListGroup.Item><a href="/"><AiFillLinkedin /></a></ListGroup.Item>
                                    <ListGroup.Item><a href="/"><AiFillInstagram   /></a></ListGroup.Item>
                                    <ListGroup.Item><a href="/"><AiFillGithub /></a></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>


                        <Nav>
                            <Link to="/">Blog Home</Link>
                            <Link to="/blog-post">Blog Post</Link>
                            <Link to="/about-me">About Me</Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                    </Navbar>
                </header>

                {this.props.children}
            </>
        );
    }
}

export default Sidebar;