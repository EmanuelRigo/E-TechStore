import React from 'react'
import { Link } from 'react-router-dom'

function ConfirmAddress() {
  return (
    <div><h3>ConfirmAddress</h3>
    <Link to={"/confirmPay"}>continuar</Link>
    </div>
  )
}

export default ConfirmAddress