import * as Yup from 'yup';
import { Formik, Form } from 'formik'
import InputForm from '../../atoms/inputs/form/input'
import DatePickerForm from '../../atoms/inputs/form/datepicker'
import TextAreaForm from '../../atoms/inputs/form/textarea';

const CreateReservationForm = () => {
  const schemaValidation = Yup.object().shape({
    name: Yup.string().required(),
    petName: Yup.string().required(),
    email: Yup.string().email().required().nullable(true),
    date: Yup.string().required(),
    symtomps: Yup.string().required()
  })

  const onSubmit = data => {
    const arrayData = JSON.parse(localStorage.getItem('list-px')) || []
    arrayData.push(data)
    localStorage.setItem('list-px', JSON.stringify(arrayData))
  }

  return (
    <Formik
      initialValues={{
        petName: '',
        name: '',
        email: '',
        date: '',
        symtomps: ''
      }}
      validationSchema={schemaValidation}
      onSubmit={onSubmit}
    >
      {( values, setValues, setFieldValue) => (
        <Form className='flex flex-col gap-3'>
          <InputForm name="petName" label="Nombre de mascota"/>
          <InputForm name="name" label="Nombre del dueño" />
          <InputForm name="email" label="Email" />
          <DatePickerForm name="date" label="Fecha" />
          <TextAreaForm name="symtomps" label="Sintomas" />
          <button
            type='submit'
            className="rounded-md bg-indigo-100 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm mt-3"
          >
            Agregar paciente
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default CreateReservationForm