import { ErrorMessage, useField } from 'formik'
import DatePicker, { registerLocale } from 'react-datepicker'
import { es } from 'date-fns/locale'
import { format } from 'date-fns'
registerLocale('es', es)
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerForm = ({ label, required, dateFormat, selectableDates, dateFormatOut, ...props}) => {
  const [field, meta, helpers] = useField(props)

  const yearsListFrom = from => {
    const currentYear = new Date().getFullYear()
    return (Array((currentYear +1) - from).fill('').map((_, index) => ({
      id: from + index,
      label: from + index
    })))
  }

  return (
    <div className="w-full">
      {label && label}
      <div className="w-full">
        <DatePicker
          placeholderText="Selecciona una fecha"
          selected={field.value ? new Date(`${field.value}, 00:00:00`) : ''}
          dateFormat={dateFormat || 'dd/MM/yyyy'}
          locale="es"
          onChange={date => helpers.setValue(format(date, dateFormatOut || 'yyyy-MM-dd'))}
          className='block w-auto rounded-md border-0 py-1.5 
          text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
          focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4'
        />
        <ErrorMessage name={field.name} component="span" className="mt-1 text-sm text-red-600" />
      </div>
    </div>
  )
}

export default DatePickerForm
