import React, { Fragment } from "react";
import { Column, Section, Title, Container, Card } from 'rbx';
import SideBar from "../../components/sidebar";
import SubsidiaryForm from "../../components/subsidiary";
import './subsidiary.scss'

function SubsidiaryScreen() {
    return (
        <Fragment>
            <Column.Group centered id="columngroup" gapSize={8}>
                <Column size={3} id="sidebar">
                    <SideBar />
                </Column>
                <Column>
                    <SubsidiaryForm />
                </Column>
            </Column.Group>
        </Fragment>
    )
}


export default SubsidiaryScreen;