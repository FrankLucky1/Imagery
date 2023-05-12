import React from 'react'

const FormField = ({labelName, value, type, handleChange,name, placeholder, handleSurpriseMe, isSurpriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label 
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'
          >
            {labelName}
          </label>
          {isSurpriseMe && (
            
            <button 
              className='font-semibold text-xs bg-[#ECECF1] py-1 px-3 ml-2 rounded-[5px] text-black'
              type='button'
              onClick={handleSurpriseMe}>
                Surprise me
            </button>
          )}
      </div>
      <input 
        type={type}
        id={name}
        name={name}
        value={value}
        required
        placeholder={placeholder}
        onChange={handleChange}

        className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'

       />
    </div>
  )
}

export default FormField