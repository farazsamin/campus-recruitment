import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Posts from '../Posts/Posts';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-4 mt-5 pt-5">
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6">
                   <Posts></Posts>
                   <Posts></Posts>
                   <Posts></Posts>
                   <Posts></Posts>
                   <Posts></Posts>
                   <Posts></Posts>
                   <Posts></Posts>
                   <Posts></Posts>
                   <Posts></Posts>
                   <Posts></Posts>
                   <Posts></Posts>
                   <Posts></Posts>

                </div>
            </div>
        </>
        
    );
};

export default Home;