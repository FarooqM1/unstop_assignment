import React from 'react'
import { BsGrid1X2Fill } from 'react-icons/bs'
import { MdOutlineNoteAlt } from 'react-icons/md';
import { BsQuestionSquare } from 'react-icons/bs';
import { BiNotepad } from 'react-icons/bi';
import { Link } from 'react-router-dom'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    Menu
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <Link to="/dashboard" className='linkstyle'>
                    <li className='sidebar-list-item'>
                        <div><BsGrid1X2Fill className='icon' /></div>
                        <div>Dashboard</div>
                    </li>
                </Link>
                <Link to="/" className='linkstyle ' >
                    <li className='sidebar-list-item active' >
                        <div><MdOutlineNoteAlt className='icon' /></div>
                        <div>Assessment</div>
                    </li>
                </Link>
                <Link to="/mylibrary" className='linkstyle'>
                    <li className='sidebar-list-item'>
                        <div><BsQuestionSquare className='icon' /></div>
                        <div>My Library</div>
                    </li>
                </Link>
                <Link to="/" className='linkstyle'>
                    <li className='sidebar-list-item sharebutton'>
                        <div className='adminbutton'>Admin</div>
                    </li>
                </Link>

                <Link to="/roundstatus" className='linkstyle'>
                    <li className='sidebar-list-item'>
                        <div><BiNotepad className='icon' /></div>
                        <div>Round Status</div>
                    </li>
                </Link>
            </ul>
        </aside>
    )
}

export default Sidebar