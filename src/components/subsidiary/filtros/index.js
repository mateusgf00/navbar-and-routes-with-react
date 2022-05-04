import React, {  useState } from 'react';
import { Column, Field, Label, Control, Input, Button } from 'rbx';
import './filtros.scss'

function SubsidiaryFilters() {
    const [filial, setFilial] = useState("");
    const [cidade, setCidade] = useState("");
    return (
        <>
          <Column.Group>
              <Column size={6}>
                  <Field id="filial">
                      <Label size="small">Filial:</Label>
                      <Control>
                          <Input
                              type="filial"
                              required
                              name="filial"
                              value={filial}
                              onChange={e => setFilial(e.target.value)}
                          />
                      </Control>
                  </Field>
                  <Field>
                      <Label size="small">Cidade:</Label>
                      <Control>
                          <Input
                              type="cidade"
                              required
                              name="cidade"
                              value={cidade}
                              onChange={e => setCidade(e.target.value)}
                          />
                      </Control>
                  </Field>
                      <Column.Group breakpoint="mobile">
                          <Column size={3}>
                                  <Button>Novo</Button>
                          </Column>
                          <Column size={3}>
                                  <Button>Pesquisar</Button>
                          </Column>
                      </Column.Group>
              </Column>
          </Column.Group>
        </>
    )
}

export default SubsidiaryFilters;
