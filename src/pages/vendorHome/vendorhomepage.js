import React from 'react'
import TabsPannel from '../../components/tabs/tabs'
import VendorProducts from '../../components/vendors/dashboard/vendorproducts';
import VendorTable from '../../components/vendors/dashboard/VendorTable';
import Vendortop from '../../components/vendortopbar/Vendortop';
function VendorHome(){
    return(
        <div className='overflow-x-hidden'>
        <Vendortop/>
         <VendorProducts/>
          <VendorTable/>
        </div>
    )
}

export default VendorHome