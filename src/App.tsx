import UJLogo from './assets/UJ_PromoShot2025.jpg'
import AcidSerenade from './assets/AcidSerenades_FrontV2-web.jpg'
import './App.css'
import Epigram from './assets/music/epigram.mp3';
import Godspeed from './assets/music/godspeed.mp3';
import TTC from './assets/music/thecracks.mp3';
import Distillorama from './assets/music/distillorama.mp3';
import Idols from './assets/music/idols.mp3';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import  { useState } from 'react';



const playlist = [
  { src: TTC, title: 'The cracks' },
  { src: Epigram, title: 'Epigram' },
  { src: Distillorama, title: 'Distillorama' },
  { src: Godspeed, title: 'Godspeed' },
  { src: Idols, title: 'Idols' },
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
    <div className="bg-white h-screen max-h-screen flex flex-col justify-center item-s-center p-4">
      <div className='grow bg-blue-custom border-2 border-black  w-full flex flex-col justify-start bg-[url("./assets/FondBack-noborder.jpg")] bg-cover bg-no-repeat bg-right-bottom overflow-auto'>
      
          <div className='w-full bg-[length:50vw] bg-[url("./assets/orange2.png")]  h-full bg-no-repeat bg-right-bottom  flex flex-row  gap-8 lg:pt-8 items-center overflow-scroll justify-center '>
            
              <div className="flex flex-row gap-4 w-3/4 justify-center items-center">
                <div className="w-1/2">                
                  <img src={AcidSerenade} alt='Acid Serenade' className='w-full h-full object-contain'/> 
                </div>
                <div className="w-1/2 flex flex-col justify-left items-left align-left">
                  <div className='p-4 justify-center uppercase text-clamp-3xl font-anton text-white'>
                    <p>Listen to five songs from our upcoming album</p>
                  </div>
                  
                  <div className="p-4 align-left list-none">
                    {playlist.map((track, index) => (
                      <li>
                        <button
                        key={index}
                        onClick={() => setTrackIndex(index)}
                        className="text-white hover:text-gray-200 font-anton uppercase text-xl"
                      >
                        {track.title}
                      </button>
                      </li>
                    ))}
                  
                  </div>
                </div>
                
              </div>

      
            </div>


      </div>
      
      <div className='w-full p-4 gap-4 flex flex-row bg-white animate-fadeInUp h-[20vh]'>
            <div className='w-1/4 '> <img src={UJLogo} className="max-w-[300px]" alt="Union Jack logo" /></div>
                    
              <AudioPlayer
              
                autoPlay={true}
                autoPlayAfterSrcChange={true}
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
                  <div className='flex flex-col justify-center items-center gap-2 w-full'>
                    <p className="flex flex-row justify-center uppercase text-clamp-2xl font-anton">{playlist[currentTrack].title}</p>
                  </div>
                }
                customControlsSection={
                  [ 
                    RHAP_UI.ADDITIONAL_CONTROLS,             
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.VOLUME_CONTROLS,
                  ]}
                  style={{

                    minHeight: '100%',
                   
                    padding: '1em 2em',
                    backgroundColor: 'white',
                    color: 'black',
                  }}
             />
            </div>
    </div>
  )
}

export default App
