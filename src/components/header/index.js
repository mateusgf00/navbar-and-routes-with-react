import React from 'react';
import { Menu, Container } from 'rbx';
import '../../styles/header.scss'

function Header() {
    return (
        <Container>
            <Menu>
                <Menu.List>
                    <Menu.List.Item className='menu-item'>Dashboard</Menu.List.Item>
                    <Menu.List.Item className='menu-item'>Empresas</Menu.List.Item>
                    <Menu.List.Item className='menu-item'>Usuarios</Menu.List.Item>
                    <Menu.List.Item className='menu-item'>Checklist</Menu.List.Item>
                    <Menu.List.Item className='menu-item'>Relatorios</Menu.List.Item>
                </Menu.List>
            </Menu>
        </Container>
    );
}

export default Header