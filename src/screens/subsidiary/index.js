import React from "react";
import { Column } from 'rbx';
import SideBar from "../../components/sidebar";
import SubsidiaryForm from "../../components/subsidiary";
import './subsidiary.scss'

const SubsidiaryScreen = () => (
    <div style={{display: 'grid', height: '100%'}}>
        <Column.Group centered id="columngroup" gapSize={8}>
            <Column size={3} id="sidebar">
                <SideBar />
            </Column>
            <Column>
                <SubsidiaryForm />
            </Column>
        </Column.Group>
    </div>
);

export default SubsidiaryScreen;
