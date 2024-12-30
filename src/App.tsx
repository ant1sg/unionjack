import UJLogo from './assets/UJ_PromoShot2025.jpg'
import AcidSerenade from './assets/AcidSerenades_FrontV2-web.jpg'
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
    <div className="bg-white h-screen flex flex-col justify-center item-s-center p-4">
      <div className='bg-blue-custom border-2 border-black h-full w-full flex flex-row max-md:flex-col justify-start gap-8 pt-8 items-center bg-[url("./assets/FondBack-noborder.jpg")] bg-cover bg-no-repeat bg-right-bottom overflow-scroll'>
        <div className='w-1/3 max-md:w-full flex flex-col justify-center items-center'>
          <div className="flex flex-row flex-wrap justify-end w-full">
            <img src={UJLogo} className="animate-fadeInUp w-clamp-xl" alt="Union Jack logo" />
          </div>
          
        </div>
        <div className='w-2/3 max-md:w-full drop-shadow-xl flex flex-col justify-center animate-fadeInLeft'>
          <div className="text-white py-8 animate-fadeIn text-clamp-xl w-full flex flex-col justify-left items-left ">
            <div className='w-3/4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, debitis. Aperiam, accusamus nobis explicabo fugit odit ut obcaecati illo ducimus perspiciatis, autem, ratione facere laudantium aliquid libero sint nam iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, debitis. Aperiam, accusamus nobis explicabo fugit odit ut obcaecati illo ducimus perspiciatis, autem, ratione facere laudantium aliquid libero sint nam iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, debitis. Aperiam, accusamus nobis explicabo fugit odit ut obcaecati illo ducimus perspiciatis, autem, ratione facere laudantium aliquid libero sint nam iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, debitis. Aperiam, accusamus nobis explicabo fugit odit ut obcaecati illo ducimus perspiciatis, autem, ratione facere laudantium aliquid libero sint nam iure. 
            </div>
          </div>
          <div className='w-5/6 p-4 gap-4 flex flex-row bg-white'>
            <div className='w-1/4 bg-black p-1 h-full'>             
              <img src={AcidSerenade} alt='Acid Serenade' className='w-full h-full object-cover'/> 
            </div>
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
            <div className='flex flex-col justify-center items-center gap-2 w-1/4'>
              
              <p className="flex flex-row justify-center uppercase text-clamp-xl "><strong>{playlist[currentTrack].title}</strong></p>
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
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: '4em 2em',
              backgroundColor: 'black',
              color: 'white',
            }}
        />
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default App
