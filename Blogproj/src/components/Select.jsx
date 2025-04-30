 import React, {useId} from 'react'
 
 function Select({
    options,
    label,
    className = "",
    ...props
 }, ref) {
    const id = useId()
   return (
     <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select 
         {...props}
         id = {id}
         ref={ref}
         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
         
            {options?.map((option) => (
               <option key={option} value={option}>
                  {option}
               </option>
            ))}

        </select>
        </div>
   )
 }
 //we have to write options here in the select tag and we also know that options is an array of objects
//we can also write options.map here but what if options doesn't have any value in it, this will lead to crash of the code
 export default React.forwardRef(Select)