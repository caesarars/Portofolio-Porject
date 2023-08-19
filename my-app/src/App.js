import React from 'react';

import { NavBarComponent } from './component/home/navbar/NavBarComponent';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { ProjectsHomeComponent } from './component/projects/ProjectsHomeComponent';
import { LandingComponent } from './component/home/landing/LandingComponent';
import { NotesComponent } from './component/projects/notes/NotesComponent';
import PdfDashboardComponent from './component/projects/pdf/PdfDashboardComponent';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBarComponent />}>
      <Route index element={<LandingComponent />} />
      <Route path="projects" element={<ProjectsHomeComponent />}>
        <Route path='notes' element={<NotesComponent/>} />
        <Route path='pdf' element={<PdfDashboardComponent />} />
      </Route>
    </Route>
  )
)
 

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
