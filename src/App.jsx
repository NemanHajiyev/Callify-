import { MdCall } from 'react-icons/md'
import './App.css';
import image from './Images/image.png';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const startCall = () => { }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className='App'>
      <nav className='navbar'>
        <div className='nav-left'>
          <MdCall size={25} />
          <h2>Callify</h2>
        </div>
        <div className='nav-center'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Service</li>
            <li>Portfolio</li>
            <li>Contact US</li>
          </ul>
        </div>
        <div className='nav-right'>
          <button>Sign Up</button>
          <button style={{ backgroundColor: "white", color: "black" }}>Login</button>
        </div>
      </nav>

      <main className='Main'>
        <div className='main-left'>
          <h1 className='title'>Video Call</h1>
          <h3 className='subtitle'>Bridge the distance, live the moment together :)</h3>
          <div className='main-buttons'>
            <button
              onClick={startCall}
              className='call-btn'>Start Call</button>
            <button
              onClick={handleOpen}
              className='learn-btn'>Learn More</button>
          </div>
        </div>
        <div className='main-right'>
          <img src={image} />
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <h1 style={{ color: "black" }}>Video Call Guidelines</h1>
            <p style={{ color: "black" }}>
              <br /><br />
              1. Make sure you have a stable internet connection.
              A strong and stable internet connection is essential for a smooth video call. If you experience interruptions, try switching to a different network.
              <br /><br />
              2. Test your audio and video before the call.
              Ensure your microphone, speakers, and camera are working properly before starting the call. This will prevent technical issues during the conversation.
              <br /><br />
              3. Mute your microphone when not speaking.
              If you're in a larger group, mute your microphone when you're not talking to reduce background noise.
              <br /><br />
              4. Keep distractions to a minimum.
              For the best video call experience, avoid multitasking or using your phone during the conversation. Stay focused!
            </p>
          </Box>
        </Modal>

      </main>
    </div>
  )
}

export default App
