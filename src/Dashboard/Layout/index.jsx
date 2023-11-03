import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

import { Outlet, NavLink, Link } from "react-router-dom";
import { Breadcrumb, Button, Dropdown, Space } from "antd";
import logo from "../../assets/icons/logo.svg";
import "./style.scss";

const items = [
  
  {
    key: "0",
    label: (
      <Space className="flex items-center  gap-[2px]">
        <Link to={`/dashboard/user`}>
        <i className='bx bx-cog' ></i>{""} So'zlamalar
        
        </Link>
    
      </Space>
    ),
  },{
    key: "1",
    label: (
      <Space className="flex items-center gap-[3px]">
        <Link to={`/signin`}>
        <i className='bx bx-left-arrow-alt text-[20px] '></i>Chiqish
        </Link>
    
      </Space>
    ),
  },
 
];

const Index = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="ssss">
      <header className="flex items-center border-b-2 justify-between h-[80px] px-[50px] head">
        <img src={logo} />
        <div className="flex items-center gap-5 login">
          <button className="flex items-center" onClick={toggleSidebar}>
            <i className="bx bx-menu text-[30px]"></i>
          </button>
         <div className="flex items-center justify-between ">

         <Dropdown
              className="flex items-center"
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a className="cursor-pointer dropoo" onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="flex items-center gap-1 user">
                    <i className="bx bxs-user-circle text-[30px]"></i>
                  </div>
                  {localStorage.getItem(`user`)}
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </header>

      <div className="down">
        <div className={`sidebar ${sidebarVisible ? "" : "hidden"}`}>
          <ul>
            <li>
              <NavLink to="/dashboard" className="linked">
                <i className="bx bxs-home text-[24px] text-[#4968cc]"></i>
                <p className="text-[#0332cc]">Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/oquvchilar" className="linked">
                <i className="bx bx-child text-[24px] text-[#4968cc]"></i>
                <p className="text-[#0332cc]">O'quvchilar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/kurslar" className="linked">
                <i className="bx bxs-book-alt text-[24px] text-[#4968cc]"></i>
                <p className="text-[#0332cc]">Kurslar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/buyurtmachilar" className="linked">
                <i className="bx bxs-user-voice text-[24px] text-[#4968cc]"></i>
                <p className="text-[#0332cc]">Buyurtmachilar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/xizmatlar" className="linked">
                <i className="bx bxs-taxi text-[24px] text-[#4968cc]"></i>
                <p className="text-[#0332cc]">Xizmatlar</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <main className="">
          <div className="outlet">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
