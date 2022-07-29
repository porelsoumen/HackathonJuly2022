import React from 'react'
import {useLocation} from "react-router-dom";
import {coreSidebarData} from '../model/core_sidebar';
import SidebarItem from './SidebarItem';

const CoreSidebar = () => {
  const location = useLocation()
  let data = []
 
  return (
    <div className="sidebar">
      { coreSidebarData.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
  );
};

export default CoreSidebar;