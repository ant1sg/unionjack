import UJLogo from './assets/LogoUJ_White.png'
import AcidSerenade from './assets/UnionJack_AcidSerenades.jpg'
import './App.css'
import SocialGame from './assets/music/03.mp3';
import Godspeed from './assets/music/01.mp3';
import Echoes from './assets/music/02.mp3';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import  { useState } from 'react';



const playlist = [
  { src: SocialGame, title: 'Social Game' },
  { src: Godspeed, title: 'Godspeed' },
  { src: Echoes, title: 'Echoes' },
]

function App() {
  const [currentTrack, setTrackIndex] = useState(0)
  const handleClickNext = () => {
      console.log('click next')
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };
  
  const handleClickPrevious = () => {
    console.log('click previous')
      setTrackIndex((currentTrack) =>
          currentTrack > 0 ? currentTrack - 1 : playlist.length - 1
      );
  };
  
  const handleEnd = () => {
    console.log('end')
    setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
  }
  
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center p-4">
      <div className='bg-blue-custom  border-2 border-black h-full w-full flex flex-row max-md:flex-col justify-start gap-8 pt-8 items-center bg-orange-image bg-no-repeat bg-right-bottom overflow-scroll'>
        <div className='w-2/3 max-md:w-full flex flex-col justify-center items-center'>
          <div className="flex flex-row flex-wrap justify-center w-full">
            <img src={UJLogo} className="animate-fadeInUp" alt="Union Jack logo" />
          </div>
          <div className="text-white max-w-prose px-4 animate-fadeIn">

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, debitis. Aperiam, accusamus nobis explicabo fugit odit ut obcaecati illo ducimus perspiciatis, autem, ratione facere laudantium aliquid libero sint nam iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, debitis. Aperiam, accusamus nobis explicabo fugit odit ut obcaecati illo ducimus perspiciatis, autem, ratione facere laudantium aliquid libero sint nam iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, debitis. Aperiam, accusamus nobis explicabo fugit odit ut obcaecati illo ducimus perspiciatis, autem, ratione facere laudantium aliquid libero sint nam iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, debitis. Aperiam, accusamus nobis explicabo fugit odit ut obcaecati illo ducimus perspiciatis, autem, ratione facere laudantium aliquid libero sint nam iure. 
          </div>
        </div>
        <div className='w-1/3 max-md:w-full drop-shadow-xl flex flex-row justify-center animate-fadeInLeft'>
        <AudioPlayer
          src={playlist[currentTrack].src}
          showJumpControls={false}
          showSkipControls={true}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPrevious}
          onEnded={handleEnd}
          layout="stacked-reverse" 
          customAdditionalControls={[]}
          customVolumeControls={[]} 
          header={
            <div className='flex flex-col justify-center items-center gap-2'>
              <img src={AcidSerenade} alt='Acid Serenade' className='w-1/2'/> 
              <p className="flex flex-row justify-center"><strong>{playlist[currentTrack].title}</strong></p>
            </div>
        }
          customControlsSection={
            [ 
              RHAP_UI.ADDITIONAL_CONTROLS,             
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.VOLUME_CONTROLS,
           ]}
            style={{
              width: 'clamp(300px, 75%, 1200px)',
              borderRadius: '20px',
              padding: '4em 2em',
              backgroundColor: '#007db5',
              color: 'white',
              border: '4px solid #e75600',
              boxShadow: '2px 2px 5px #000000',
              margin: '2em auto',
            }} 
        />
        </div>
     

        
      </div>
    </div>
  )
}

export default App
