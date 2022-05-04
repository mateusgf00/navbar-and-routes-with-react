import React, { useState, useEffect } from 'react';
import { Column, Title, Card } from 'rbx';
import SubsidiaryFilters from './filtros';
import './subsidiary.scss';

const cards =[{
  key: 1,
  filial: '1',
  cidade: 'São paulo'
},{
  key: 2,
  filial: '2',
  cidade: 'São paulo'
},{
  key: 3,
  filial: '3',
  cidade: 'São paulo'
},{
  key: 4,
  filial: '4',
  cidade: 'São paulo'
},{
  key: 5,
  filial: '5',
  cidade: 'São paulo'
},{
  key: 6,
  filial: '6',
  cidade: 'São paulo'
}];

const SubsidiaryForm = () => (
    <>
      <SubsidiaryFilters />
      <Column.Group multiline id="column-group">
        {cards?.map((card) => (
          <Column size="one-quarter" key={card?.filial}>
            <Card>
              <Card.Content>
                <p>Filial: {card?.filial}</p>
                <p>Cidade: {card?.cidade}</p>

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
        ))}
      </Column.Group>
    </>
)

export default SubsidiaryForm;
