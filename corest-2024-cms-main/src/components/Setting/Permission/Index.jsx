import React from 'react'
import FooterHeadersetting from '../../../Layout/Btn-Footer/FooterHeadersetting'
import Permission from './Permission'
import AddPermission from './AddPermission'


const Index = () => {
  return (
    <div>
         <FooterHeadersetting>
          <Permission/>
          <div className='flex flex-wrap'>
            <AddPermission />
          </div>
        </FooterHeadersetting>
    </div>
  )
}

export default Index