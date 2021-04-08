import React, {useState, useEffect} from "react";
import {
    NavLink,
    Switch,
    Route,
    useRouteMatch,
    Redirect
} from "react-router-dom";

import {CgFeed} from "react-icons/cg";
import {FaHistory, FaUmbrellaBeach} from "react-icons/fa";
import {ImStatsDots} from "react-icons/im";

import Feed from "../Feeds/Feed";
import Beaches from "../Beaches";
import History from "../History";
import GlobalLeaderboard from "../GlobalLeaderboard";

const Dashboard = () => {
    const { path } = useRouteMatch();

    return(
        <div className="flex flex-row">
            <div className="px-5 py-5 mr-6">   
            <div className="flex flex-col mb-12 ">             
                <div className="mb-3 uppercase">Actions</div>
                
                <div className="flex flex-row items-center mt-2">
                    <div className="">
                        <CgFeed />
                    </div>
                    <NavLink to={`${path}/feed`} className="ml-3 uppercase">Feed</NavLink>
                </div>
                <div className="flex flex-row items-center mt-2">
                    <div className="">
                    <FaUmbrellaBeach />
                    </div>
                    <NavLink to={`${path}/beaches`} className="ml-3 uppercase">Beaches</NavLink>
                </div>
                <div className="flex flex-row items-center mt-2">
                    <div className="">
                    <FaHistory />
                    </div>
                    <NavLink to={`${path}/history`} className="ml-3 uppercase">History</NavLink>
                </div>
                <div className="flex flex-row items-center mt-2">
                    <div className="">
                    <ImStatsDots />
                    </div>
                    <NavLink to={`${path}/globalleaderboard`} className="ml-3 uppercase">Leaderboard</NavLink>
                </div>
            </div>
            <div className="flex flex-col mb-12"> 
                <div className="mb-3 uppercase">
                    Communities 
                </div>
            </div>
                {/* Change the below code to render contains from database */}
                {/* <div className="folder-icons">
                    <div className="avatar">
                    <div className="online">
                    </div>
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" />
                    </div>
                    <div className="names">Don Allen
                    </div>
        
                </div> */}
                
                </div>
            
            <div className="flex flex-col bg-gray-200 w-full shadow-inner px-5 py-5 ml-5">
                
                <Switch>
                    <Route path={`${path}/feed`} component={Feed} />
                    <Route path={`${path}/beaches`} component={Beaches} />
                    <Route path={`${path}/history`} component={History} />
                    <Route path={`${path}/globalleaderboard`} component={GlobalLeaderboard} />
                    <Redirect to={`${path}/feed`} />
                </Switch>
              
                
           
            </div>
        </div>
    );
};

export default Dashboard;