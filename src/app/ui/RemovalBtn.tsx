import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const RemovalBtn = () => {
  return (
    <button className="btn btn-danger" onClick={handleClick}>
          Delete
          {/* <HiOutlineTrash size={24} className='text-red-400' /> */}
        </button>
  )
}

export default RemovalBtn