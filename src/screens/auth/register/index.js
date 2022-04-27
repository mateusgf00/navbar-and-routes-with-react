import React, { Fragment } from 'react';
import { Column, Section, Title, Container, Card } from 'rbx';
import LogoImage from '../../../assets/images/1.png';
import '../../../styles/auth.scss';
import RegisterForm  from '../../../components/auth/register';

const RegisterScreen = () =>(
    <Fragment>
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={4}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group centered>
                                        <Column size={8}>
                                            <img src={LogoImage} />
                                        </Column>
                                    </Column.Group>
                                    <RegisterForm/>
                                </Section>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default RegisterScreen;