import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import { IoLogOutOutline } from "react-icons/io5";

export const SidebarData = [
    {
        title: 'ホーム',
        path: '/',
        icon: <MdHome/>,
        cName: 'nav-text'
    },
    {
        title: 'ユーザー情報',
        path: '/footer',
        icon: <FaUser/>,
        cName: 'nav-text'
    },
    {
        title: 'ログアウト',
        path: '/logout',
        icon:  <IoLogOutOutline/>,
        cName: 'nav-text'
    },
   
]
