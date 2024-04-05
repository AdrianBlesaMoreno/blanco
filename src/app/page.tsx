"use client"
import { useEffect, useState } from "react";
import { FormEvent } from 'react'
import { navigate } from './actions'


export default function Lobby() {
  
  const [dataForm, setDataForm] = useState({
    username: '',
    room: ''
  });

  useEffect(() => {
    let value = localStorage.getItem("username") || ""
    setDataForm({...dataForm, username: value})
  }, []);

  const joinGame = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    localStorage.setItem('username', dataForm.username);
    navigate('Blanco', dataForm.room, dataForm.username);
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Blanco</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={joinGame}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Nick</label>
              <div className="mt-2">
                <input id="username" onChange={(e) => {setDataForm({...dataForm, username: e.target.value})}} value={dataForm.username} name="username" type="username" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="room" className="block text-sm font-medium leading-6 text-gray-900">Sala</label>
              </div>
              <div className="mt-2">
                <input id="room" name="room" onChange={(e) => {setDataForm({...dataForm, room: e.target.value})}} value={dataForm.room} autoComplete="current-room" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            O
            <a href="#" className="mx-3 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Crear sala</a>
          </p>
        </div>
      </div>
    </>
  );
}
