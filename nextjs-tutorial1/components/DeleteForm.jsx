'use client'
import { deleteTask } from '@/utils/actions'
import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () =>{
  const {pending} = useFormStatus()
  return(
  <button className='btn btn-xs btn-error' disabled={pending}>
      {pending? 'pending...' : 'delete'}
      delete
    </button>
)}

const DeleteForm = ({id}) => {
  return (
    <form action={deleteTask}>
        <input type='hidden' name='id' value={id}/>
        <button className='btn btn-xs btn-error'>
            Delete
        </button>
    </form>
  )
}

export default DeleteForm