const CardReservation = ({ data }) => {
  return (
    <div className="w-full bg-white border-gray-500 border shadow-md shadow-gray-300 p-6">
      <div className="flex gap-4">
        <p className="font-semibold">Nombre mascota: <span className="font-normal">{data.petName}</span></p>
        <p className="font-semibold">Fecha de cita: <span className="font-normal">{data.date}</span></p>
      </div>
      <div>
        <p className="font-semibold">Sintomas:</p>
        <p>{data.symtomps}</p>
      </div>
      <div className="flex gap-4">
        <p className="font-semibold">Nombre del dueño: <span className="font-normal">{data.name}</span></p>
        <p className="font-semibold">Email: <span className="font-normal">{data.email}</span></p>
      </div>
    </div>
  )
}

export default CardReservation
