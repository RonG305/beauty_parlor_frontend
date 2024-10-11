import React from 'react'
import RoutesInterface from './typed'
import Home from '@/app/page'
import Services from '@/app/services/page'
import Products from '@/app/products/page'
import Bookings from '@/app/bookings/page'
import Favourites from '@/app/favourites/page'
import About from '@/app/about/page'
import Support from '@/app/support/page'

import { GoHome } from "react-icons/go";
import { FaServicestack } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import { GiLoveHowl } from "react-icons/gi"
import { GiArmoredBoomerang } from "react-icons/gi";
import { MdSupport } from "react-icons/md";

const routes:RoutesInterface[] = [
    {
        path: '/home',
        icon: <GoHome size={20} />,
        component: Home,
        id: 'home',
       
    },

    

 
    {
        path: '/services',
        icon: <FaServicestack size={20} />,
        component: Services,
        id: 'sevices',
       
    },

    {
        path: '/products',
        icon: <AiFillProduct size={20} />,
        component: Products,
        id: 'products',
      
    },

    {
        path: '/bookings',
        icon: <IoBookOutline size={20} />,
        component: Bookings,
        id: 'bookings',
       
    },

    {
        path: '/favourites',
        icon: <GiLoveHowl size={20} />,
        component: Favourites,
        id: 'favourites',
      
    },

    {
        path: '/about',
        icon: <GiArmoredBoomerang size={20} />,
        component: About,
        id: 'about',
       
    },

    {
        path: '/support',
        icon: <MdSupport size={20} />,
        component: Support,
        id: 'support',
      
    },


]

export default routes
