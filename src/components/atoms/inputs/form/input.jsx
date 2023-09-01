import { ErrorMessage, useField } from 'formik'

const InputForm = ({ type = 'text', label, required, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      {label && label}
      <div>
        <input
          className='block w-full rounded-md border-0 py-1.5 
            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4'
          type={type}
          {...field}
          {...props}
        />
        <ErrorMessage name={field.name} component="span" className="mt-1 text-sm text-red-600" />
      </div>
    </div>
  )
}

export default InputForm
