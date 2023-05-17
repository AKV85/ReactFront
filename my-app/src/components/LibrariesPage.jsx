import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const LibrariesPage = () => {
    return (
        <Container>
            <h1>Examples of Different Libraries</h1>
            <hr />
            <h2>React Bootstrap</h2>
            <p>
                React Bootstrap is a popular UI library for React. It provides a set of
                reusable components that are easy to use and customizable. Here are some
                examples:
            </p>
            <Row>
                <Col>
                    <button className="btn btn-primary">Primary Button</button>
                </Col>
                <Col>
                    <button className="btn btn-secondary">Secondary Button</button>
                </Col>
            </Row>
            <hr />
            <h2>React Icons</h2>
            <p>
                React Icons is a library of popular icons that can be easily used in
                React applications. Here's an example:
            </p>
            <IconContext.Provider value={{ size: '3em', color: 'purple' }}>
                <div>
                    <FaReact />
                </div>
            </IconContext.Provider>
        </Container>
    );
};

export default LibrariesPage;
