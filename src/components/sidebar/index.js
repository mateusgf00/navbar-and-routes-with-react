import React from 'react';
import { Navbar } from 'rbx';
import './sidebar.scss'
import { SideBarData } from './sidebardata';
import { valueToPercent } from '@mui/base';
import logoImagem from '../../assets/images/2.png'

function SideBar() {
    return (
        <div className='Sidebar'>
            <img src={logoImagem}/>
            <ul className='SidebarList'>
                {SideBarData.map((val, key) => {
                    return (
                        <li className="row"
                            key={key}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}>
                            <a id='icon'>{val.icon}</a>
                            <a id='title'>{val.title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar