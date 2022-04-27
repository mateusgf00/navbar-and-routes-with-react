import React from 'react';
import { Navbar } from 'rbx';
import '../../styles/sidebar.scss'
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
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar