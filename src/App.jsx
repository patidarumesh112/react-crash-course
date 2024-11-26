// import React from 'react'

// const App = () => {
//   const name = 'John';
//   const x =10;
//   const y =20;
//   const styles= {color:"red",fontSize:"24px"};
//   const isLoggedIn = true;
// const names = ['umesh', 'chetan','ramo'];
//   return (
//     <>
//     <div className='text-5xl'>App</div>
//     <p style={styles}>Hello {name}</p>
//     <p>Sum is {x+y}</p>

//     <ul>
//       {names.map((name,index) => (
//       <li key={index}>{name}</li>

//     ))}
//     </ul>
//     { isLoggedIn && <h1>hello member</h1>}
//     </>
//   )
// }

// export default App
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobs from './pages/AddJobs';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-jobs' element={<AddJobs/>}/>
      <Route path='*' element={<NotFoundPage/>}/>

    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
//   (
//     <>
//       <Navbar></Navbar>
// <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs"></Hero>
//      <HomeCards/>
//      <JobListings/>
//      <ViewAllJobs/>
//     </>

//   )
}

export default App