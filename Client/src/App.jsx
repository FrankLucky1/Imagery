import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {logo} from './assets';
import {Home, CreatePost} from './Pages'


const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b
      border-b-[#e6ebf4]  '>
        <Link to='/'>
         <h1 className='text-2xl'> <span className='text-4xl text-purple-600 font-serif'>I</span>magery</h1>
        </Link>
        <Link to='/create' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-4 rounded-md'>
          Create Post
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)] ' >
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/create' element={<CreatePost/>} />
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
