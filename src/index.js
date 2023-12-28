import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import logo from './icons8-ducati-144.png'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <a href="https://gijendrap.github.io/CODSOFT-level1-task1/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        gJ
        
      </a>
      <div style={{ position: 'absolute', top: 50, left: '19rem', fontSize: '25px',fontWeight:'bold', fontFamily:'monospace'}}>Ducati Scrambler</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}> © Ducati</div>
      <div style={{ position: 'absolute', top: 200, right: 380, fontSize: '13px', fontFamily:'monospace' }}>Engine Type</div>
      <div style={{ position: 'absolute', top: 200, right: 50, fontSize: '13px', fontFamily:'monospace', lineHeight:'20px', }}>L-Twin, Desmodromic <br></br>distribution, 2 valves per cylinder,<br></br> air cooled</div>
      <div style={{ position: 'absolute', top: 280, right: 380, fontSize: '13px', fontFamily:'monospace' }}>Max Power</div>
      <div style={{ position: 'absolute', top: 280, right: 170, fontSize: '13px', fontFamily:'monospace' }}>74.01 PS @ 8250 rpm</div>
      <div style={{ position: 'absolute', top: 320, right: 380, fontSize: '13px', fontFamily:'monospace' }}>Front Brake</div>
      <div style={{ position: 'absolute', top: 320, right: 275, fontSize: '13px', fontFamily:'monospace' }}>Disc</div>
      <div style={{ position: 'absolute', top: 360, right: 380, fontSize: '13px', fontFamily:'monospace' }}>Max Torque</div>
      <div style={{ position: 'absolute', top: 360, right: 175, fontSize: '13px', fontFamily:'monospace' }}>65.2 Nm @ 7000 rpm</div>
      <div style={{ position: 'absolute', top:100, right: 80, fontSize: '13px', lineBreak:'anywhere', lineHeight:'20px',  fontFamily:'monospace' }}>The BS6 Ducati Scrambler Dark is priced at Rs. 7.99 lakh while the<br></br> BS6 Scrambler Icon is priced at Rs. 8.49 lakh. <br></br>All prices are ex-showroom, India.</div>
      <div style={{ position: 'absolute', top: '20px', left:'20px', width: '35px', height: '35px' }}>
      <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
    </div>     
    <button>
    <p>Book Now</p>
    <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
</button>
    
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
)
