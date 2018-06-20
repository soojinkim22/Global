import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  FormGroup, 
  Label, 
  Form, 
  FormFeedback, 
  Input, 
  Button
} from 'reactstrap';

export default class index extends React.Component {
  render() {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <title></title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

                {/* styles */}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/stylesheets/style.css" />
                {/* /styles */}

                {/* scripts */}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>                
                {/* /scripts */}
            </head>
            <body className="container-body">
                <Container className="container-title">Global Salon</Container>
                <Container>
                    <Row>
                    <Col xs="6">
                        <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" placeholder="with a placeholder" bsSize="sm" />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" placeholder="with a placeholder" bsSize="sm" />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs="6">
                        <FormGroup>
                        <Label for="name">Name Of English</Label>
                        <Input type="text" name="name" id="name" placeholder="with a placeholder" bsSize="sm" />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                        <Label for="birth">Birthday</Label>
                        <Input type="date" name="birthday" id="birthday" placeholder="with a placeholder" bsSize="sm" />
                        </FormGroup>
                    </Col>
                    </Row>          
                    <Row>
                    <Col xs="6">
                        <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="with a placeholder" bsSize="sm" />
                        <FormFeedback>Oh</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password placeholder" bsSize="sm" />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs="6">
                        <FormGroup>
                        <Label for="company">Company</Label>
                        <Input type="select" name="company" id="company" bsSize="sm">
                            <option>Select your company</option>
                            <option>Pasona Tquila Inc.</option>
                            <option>Pasona Panasonic Inc.</option>
                            <option>Pasona Inc.</option>
                            <option>Pasona Career Inc.</option>
                            <option>Global Salon Inc.</option>
                        </Input>
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <Row>
                        <Col><Label>Motivated</Label></Col>
                        </Row>
                        <Row>
                        <Col>
                            <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" /> Web
                            </Label>
                            </FormGroup>
                            <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" /> Ad
                            </Label>
                            </FormGroup>
                            <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" /> Invite friend
                            </Label>
                            </FormGroup>
                        </Col>
                        </Row>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Button color="primary">Sign Up</Button>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    </Col>
                    </Row>
                </Container>
            </body>
        </html>
    );
  }
}