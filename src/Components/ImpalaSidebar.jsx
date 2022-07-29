import React, {useEffect, useState} from 'react'
import {impalaQEData} from '../model/impala_sidebar';
import SidebarItem from './SidebarItem';
import {Link, Route, Routes} from 'react-router-dom'
import LinkSidebarItem from './LinkSideBarItem';

const ImpalaSidebar = () => {
  // const [nodesWithoutChildren, setNodesWithoutChildren] = useState([])
  // const [nodesWithChildren, setNodesWithChildren] = useState([])

  // function getNodesWithChildren(data) {
  //   console.log(data.filter((item) => item.children))
  //   return data.filter((item) => item.children);
  // }

  // function getNodesWithoutChildren(data) {
  //   console.log(data.filter((item) => !item.children))
  //   return data.filter((item) => !item.children);
  // }

  // useEffect(() => {
  //   setNodesWithChildren(getNodesWithChildren)
  //   setNodesWithoutChildren(getNodesWithoutChildren)
  // },[impalaQEData])

  return (
    <div className="main">
      <div className="sidebar">
        <Link className="sidebar-home" to="/">Onboarding Home</Link>
        { impalaQEData.map((item, index) => <SidebarItem key={index} item={item} />) }
      </div>
      <div className="container">
      { impalaQEData.map((item, index) => <LinkSidebarItem key={index} item={item} />) }
      </div>
    </div>
    
  );
};

export default ImpalaSidebar;