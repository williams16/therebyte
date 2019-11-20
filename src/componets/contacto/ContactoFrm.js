import React from 'react'
import TextGroup from '../common/TextGroup'
import TextAreaGroup from '../common/TextAreaGroup'
import SelectGroup from '../common/SelectGroup'
import BtnGroup from '../common/BtnGroup'

import {
  txtName, 
  txtEmail, 
  txtMensaje, 
  selectAsunto,
  btnAsunto } from "./textFieldData"

const ContactoFrm = () => {
  return (
    <div className="content">
      <form id="" method="Post" action="#" className="m-5">
        <div className="form-row ">
          <div className="form-group col-md-6 col-sm-6">
            <SelectGroup {...selectAsunto}/>
            <TextGroup {...txtName}/>
            <TextGroup {...txtEmail}/>
          </div>
          <div className="form-group col-md col-sm">
              <TextAreaGroup {...txtMensaje}/>
              <BtnGroup {...btnAsunto}/>
            </div>
        </div>
     </form>
    </div>

  )
}
        
export default ContactoFrm;