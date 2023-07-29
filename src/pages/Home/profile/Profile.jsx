import React from 'react'
import './profile.css'
import Topbar from '../../../components/Topbar/Topbar'
import Sidebar from '../../../components/sidebar/sidebar'
import Feed from '../../../components/feed/feed'
import Rightbar from '../../../components/rightbar/rightbar'



export default function Profile() {
    return (
        <>
            <Topbar />
            <div className='profile'>
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='ProfileCover'>
                            <img
                                className='profileCoverImg'
                                src='assets/post/5.jpg' alt=''

                            />

                            <img
                                className='profileUserImg'
                                src='assets/person/5.jpg' alt=''

                            />
                        </div>

                        <div className='profileInfo'>
                              <h4 className='profileInfoName'>Safak Kocaoglu</h4>
                              <span className='profileInfoDesc'>Hello My Friends!!!</span>
                        </div>

                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <Rightbar profile/>
                    </div>

                </div>



            </div>


        </>
    )
}
