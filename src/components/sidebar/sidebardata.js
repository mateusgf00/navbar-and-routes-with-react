import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const SideBarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/home"
    },{
        title:"Filiais",
        icon:<BusinessIcon/>,
        link:"/filiais"
    },{
        title:"Usuarios",
        icon:<GroupIcon/>,
        link:"/usuarios"
    },{
        title:"Checklist",
        icon:<CheckBoxIcon/>,
        link:"/checklist"
    },{
        title: "Agendamento",
        icon:<ScheduleIcon/>,
        link:"/agendamento"
    },{
        title: "Relatorios",
        icon:<AssessmentIcon/>,
        link:"/relatorios"
    }
]