import React, { useContext } from 'react'
import ReservationList from './ReservationList'
import Login from './Login'
import { myContext } from './Context'

export default function Auth() {
  const state = useContext(myContext)
  // const isLogged = true
  return (
    <div>
      {
        state.isLogged ? <ReservationList /> : <Login />
      }
    </div>
  )
}
