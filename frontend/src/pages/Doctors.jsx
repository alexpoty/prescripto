import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

function Doctors() {

  const { speciality } = useParams();
  const {doctors} = useContext(AppContext);

  return (
    <div>
        <div>
          
        </div>
    </div>
  )
}

export default Doctors