import React, { ReactNode } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import DashboardWrapper from '../components/DashboardWrapper/DashboardWrapper';
import DashboardProps from './index';


  const Dashboard= ({ children }: DashboardProps)  => {
    return (
      <div className="dashboard-container text-sm overflow-x-hidden">
        <DashboardWrapper />
        <div className="dashboard-content overflow-x-hidden">
          <main className="content-area ">{children}</main>
          {/* <Footer /> */}
        </div>
      </div>
    );
  };
  
  export default Dashboard;
