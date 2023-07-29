import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from "../online/online"
import CloseFriend from '../closeFriend/CloseFriend'

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className='bithdayContainer'>
          <img className='birhdayImg' src='assets/gift.png' alt='' />
          <span className='birthdayTest'><b>Pola Foster </b> and <b>3 other friends</b>   have a birhday today  </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='righbarFriendList'>
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }


  const ProfileRightbar = () => {
    return (<>
      <h1 className='rightbarTitle'>User Information</h1>
      <div className='rightbarInfo'>
        <div className='rightbarInfoItem'>
          <sapn className="rightbarInfoKey"> City: </sapn>
          <sapn className="rightbarInfoValue"> New York </sapn>
        </div>
        <div className='rightbarInfoItem'>
          <sapn className="rightbarInfoKey"> From: </sapn>
          <sapn className="rightbarInfoValue"> Madrid </sapn>
        </div>
        <div className='rightbarInfoItem'>
          <sapn className="rightbarInfoKey"> Relationship: </sapn>
          <sapn className="rightbarInfoValue"> Single </sapn>
        </div>
      </div>
      <h1 className='rightbarTitle'>User Friends</h1>
      <div className='rightbarFollowings'>
        <div className='rightbarFollowing'>
          <img src='assets/person/1.jpg' className='rightbarFollowingImg' ></img>
          <span className='rightgarFollowingName'> John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img src='assets/person/2.jpg' className='rightbarFollowingImg' ></img>
          <span className='rightgarFollowingName'> John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img src='assets/person/3.jpg' className='rightbarFollowingImg' ></img>
          <span className='rightgarFollowingName'> John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img src='assets/person/4.jpg' className='rightbarFollowingImg' ></img>
          <span className='rightgarFollowingName'> John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img src='assets/person/5.jpg' className='rightbarFollowingImg' ></img>
          <span className='rightgarFollowingName'> John Carter</span>
        </div>
        <div className='rightbarFollowing'>
          <img src='assets/person/6.jpg' className='rightbarFollowingImg' ></img>
          <span className='rightgarFollowingName'> John Carter</span>
        </div>
      </div>
    </>
    )
  }
  return (
    <div className='rightbar'>
      <div className='rightWrapper'>
        {profile ? <ProfileRightbar /> : <HomeRightbar/>}
      </div>
    </div>
  )
}
