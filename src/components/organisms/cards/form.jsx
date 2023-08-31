import CreateReservationForm from '../../molecules/forms/create-reservation'
import RemarkText from '../../atoms/remark-text/remark-text'
const CardForm = () => {
  return (
    <div
      className='w-full h-full bg-white border-gray-500 border
      shadow-md shadow-gray-300 p-12'
    >
      <CreateReservationForm />
    </div>
  )
}

export default CardForm
