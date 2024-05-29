import {BrowserRouter} from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas } from './components'
export default function App() {

  return (
    <>

    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-patten bg-cover'></div>
    </div>
    </BrowserRouter>
    </>
  )
}
