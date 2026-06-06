import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";      // رمز عبور    

function Input() {
    const [name, setName] = useState("");


  return (
    <div className='mx-auto w-2xs'>
        <div className="relative w-72 flex justify-center">
         <FaUser className="icon absolute left-3 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80]" />
            <input className='text-[#9E9E9E80] h-12 w-80 border border[#9E9E9E80] rounded-md mt-4'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="شماره موبایل"
            />
        </div>

      <div className="relative w-72 flex justify-center">
        <FaLock className="icon absolute left-3 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80]" />
        <input className='text-[#9E9E9E80] h-12 w-80 border border[#9E9E9E80] rounded-md mt-4'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="رمز عبور"
        />
      </div>

    </div>
  )
}

export default Input