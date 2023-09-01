import CardReservation from './reservation'
import { useId } from 'react'

const ShowReservations = () => {
  const arrayData = JSON.parse(localStorage.getItem('list-px'))
  console.log("🚀 ~ file: show-reservations.jsx:6 ~ ShowReservations ~ arrayData:", arrayData)

  return (
    <div className='w-full overflow-hidden h-screen'>
      <div className='flex flex-col gap-10 max-h-[530px] overflow-auto'>
        {arrayData
          ? (arrayData.map((item, index) =>
            <CardReservation data={item} key={index} />
          ))
          : (
            "No existen reservaciones"
          )
        }
      </div>
    </div>
  )
}

export default ShowReservations
