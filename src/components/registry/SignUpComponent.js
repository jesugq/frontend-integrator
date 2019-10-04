import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button, FormText, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SignUpComponent.css";

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
            this.state = {
            'name': '',
            'phone': '',
            'email': '',
            'password': '',
            validate: {
                emailState: '',
            },
          }
          this.handleChange = this.handleChange.bind(this);   
        }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
          } else {
            validate.emailState = 'has-danger'
          }
          this.setState({ validate })
        }
    
      handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
        });
      }
    
      submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${ this.state.email }`)
      }

    render() {
        const { email, password } = this.state;
        return (
            <Container className="SignUp">
                <h2>Registrarse</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Nombre</Label>
                            <Input 
                                type="text"
                                name="nombre"
                                id="exampleName"
                                placeholder="Pantufla Baggins"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Teléfono</Label>
                            <Input
                            type="number"
                            name="telefono"
                            id="examplePhone"
                            placeholder="2222222222"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Correo Electrónico</Label>
                            <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                            value= { email }
                            valid={ this.state.validate.emailState === 'has-success' }
                            invalid={ this.state.validate.emailState === 'has-danger' }
                            onChange={ (e) => {
                                        this.validateEmail(e)
                                        this.handleChange(e)
                                      } }
                            />
                            <FormFeedback>Por favor ingresa un correo válido.</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                        <Label for="examplePassword">Contraseña</Label>
                        <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        />
                        </FormGroup>
                    </Col>
                    <Button>Registrar</Button>
                </Form>
            </Container>
        )
    }
}

export default SignUpComponent;