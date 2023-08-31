import HeadingText from '../../atoms/heading/heading'
import CardForm from '../../organisms/cards/form'
import RemarkText from '../../atoms/remark-text/remark-text'
import ShowReservations from '../../organisms/cards/show-reservations'
const Main = () => {
  return (
    <>
      <header className='m-12'>
        <HeadingText text={"Seguimiento Pacientes"} remarkText={"Veterinaria"}/>
      </header>
      <div className='flex gap-3 justify-around'>
        <div className='w-full flex flex-col gap-5 items-center'>
          <h2 className="text-bold text-2xl text-black">Seguimiento de pacientes</h2>
          <RemarkText
            text="Añade pacientes y"
            remarkableText="Administralos"
            fontSize="font-semibold text-xl"
          />
          <CardForm />
        </div>
        <div className='w-full flex flex-col gap-5 items-center'>
          <h2 className="text-bold text-2xl text-black">No hay pacientes</h2>
          <RemarkText
            text="Comienza agregando pacientes y"
            remarkableText="aparecerán en este lugar"
            fontSize="font-semibold text-xl"
          />
          <ShowReservations />
        </div>
      </div>
    </>
  )
}

export default Main