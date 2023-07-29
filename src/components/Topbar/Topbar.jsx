import React from 'react'
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import './Topbar.css'
export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>facebook</span>
      </div>

      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input placeholder='search for friend , post or video' className='searchinput' />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink topbarLinkHeading'>Homepage</span>
          <span className='topbarLink topbarLinkHeading'>Timeline</span>

        </div>
        <div className='topbarIcon'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>
              1
            </span>
          </div>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>
              1
            </span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>
              1
            </span>
          </div>
        </div>
        <img src='/assets/person/1.jpg' alt='' className='topbarImg'/>
      </div>

    </div>
  )
}
