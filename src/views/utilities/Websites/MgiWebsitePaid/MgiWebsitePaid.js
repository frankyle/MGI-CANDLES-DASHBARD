import React from 'react'
import SignalsSection from './SignalsSection'
import BreakevenSection from './BreakevenSection'
import SetupsSection from './SetupsSection'
import ProfitSection from './ProfitSection'
// import LossSection from './LossSection'
import Footer from '../MgiWebsiteFree/Footer'

const MgiWebsitePaid = () => {
  return (
    <div>
    <div><SignalsSection/></div>
    <div><BreakevenSection/></div>
    <div><SetupsSection/></div>
    <div><ProfitSection/></div>
    {/* <div><LossSection/></div> */}
    <div><Footer/></div>
      
    </div>
  )
}

export default MgiWebsitePaid