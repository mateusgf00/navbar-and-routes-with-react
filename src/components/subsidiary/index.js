import React, { Fragment } from 'react';
import { Column, Title, Card } from 'rbx';
import SubsidiaryFilters from './filtros';
import './subsidiary.scss';

function SubsidiaryForm() {
    return (
        <Fragment>
            <SubsidiaryFilters />
            <Column.Group multiline id="column-group">
                <Column size="one-quarter">
                    <Card>
                        <Card.Content>
                            <p>Filial: 1</p>
                            <p>Cidade: São Paulo</p>
                            
                        </Card.Content>
                        <Card.Footer as="footer">
                            <Card.Footer.Item as="a">
                                <span>
                                    Abrir
                                </span>
                            </Card.Footer.Item>
                            <Card.Footer.Item as="a">
                                <span>
                                    Editar
                                </span>
                            </Card.Footer.Item>
                        </Card.Footer>
                    </Card>
                </Column>
                <Column size="one-quarter">
                    <Card>
                        <Card.Content>
                            <p>Filial: 2</p>
                            <p>Cidade: Rio de Janeiro</p>
                            
                        </Card.Content>
                        <Card.Footer as="footer">
                            <Card.Footer.Item as="a">
                                <span>
                                    Abrir
                                </span>
                            </Card.Footer.Item>
                            <Card.Footer.Item as="a">
                                <span>
                                    Editar
                                </span>
                            </Card.Footer.Item>
                        </Card.Footer>
                    </Card>
                </Column>
                <Column size="one-quarter">
                    <Card>
                        <Card.Content>
                            <p>Filial: 3</p>
                            <p>Cidade: Rio de Janeiro</p>
                            
                        </Card.Content>
                        <Card.Footer as="footer">
                            <Card.Footer.Item as="a">
                                <span>
                                    Abrir
                                </span>
                            </Card.Footer.Item>
                            <Card.Footer.Item as="a">
                                <span>
                                    Editar
                                </span>
                            </Card.Footer.Item>
                        </Card.Footer>
                    </Card>
                </Column>
                <Column size="one-quarter">
                    <Card>
                        <Card.Content>
                            <p>Filial: 4</p>
                            <p>Cidade: Londres</p>
                            
                        </Card.Content>
                        <Card.Footer as="footer">
                            <Card.Footer.Item as="a">
                                <span>
                                    Abrir
                                </span>
                            </Card.Footer.Item>
                            <Card.Footer.Item as="a">
                                <span>
                                    Editar
                                </span>
                            </Card.Footer.Item>
                        </Card.Footer>
                    </Card>
                </Column>
                <Column size="one-quarter">
                    <Card>
                        <Card.Content>
                            <p>Filial: 5</p>
                            <p>Cidade: Nova Iorque</p>
                            
                        </Card.Content>
                        <Card.Footer as="footer">
                            <Card.Footer.Item as="a">
                                <span>
                                    Abrir
                                </span>
                            </Card.Footer.Item>
                            <Card.Footer.Item as="a">
                                <span>
                                    Editar
                                </span>
                            </Card.Footer.Item>
                        </Card.Footer>
                    </Card>
                </Column>
            </Column.Group>
        </Fragment>

    )
}

export default SubsidiaryForm;