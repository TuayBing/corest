import React from 'react'
import FooterHeadersetting from '../../../Layout/Btn-Footer/FooterHeadersetting'
import User from './User'
import AddUser from './AddUser'
import BoxUser from './BoxUser'

const Index = () => {
  return (
    <div>
         <FooterHeadersetting>
          <User />
          <div className='flex flex-wrap'>
            <BoxUser />
            <AddUser />
          </div>
        </FooterHeadersetting>
    </div>
  )
}

export default Index