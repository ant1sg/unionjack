import { useState } from 'react'
import UJLogo from './assets/LogoUJ_White.png'
import AcidSerenade from './assets/AcidSerenades.png'
import AudioPlayer from 'react-modern-audio-player';
import './App.css'
import SocialGame from './assets/music/03.mp3';
import Godspeed from './assets/music/01.mp3';
import Echoes from './assets/music/02.mp3';

const playList = [
  {
    name: 'Social Game',
    writer: 'UnionJack',
    src: SocialGame,
    id: 1,

  },
  {
    name: 'Godspeed',
    writer: 'UnionJack',
    src: Godspeed,
    id: 2,
  },
  {
    name: 'Echoes',
    writer: 'UnionJack',
    src: Echoes,
    id: 3,
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center p-4">
      <div className='bg-blue-custom  border-2 border-black h-full w-full flex flex-col justify-start gap-8 pt-8 items-center bg-orange-image bg-cover'>
        <div className="flex flex-row justify-center w-full">
          <img src={UJLogo} className="animate-fadeInUp" alt="Union Jack" />
          <img src={AcidSerenade} className="animate-fadeInUp" alt="Acid Serenade" />
        </div>
        <div className='w-4/5 drop-shadow-xl '>
          <AudioPlayer 
            playList={playList} 
            audioInitialState={{
              muted: false,
              volume: 1,
              curPlayId: 1,
              repeatType: 'NONE',
              isPlaying: true,

              }}
            placement={{
              interface: {
                templateArea: {
                  progress: "row1-5",
                  playButton: "row1-4",
                  volume: "row1-8",
                  playListButton: "row1-9",
                },
            
              },
              playList: "bottom",
              player: "static",
            }}
            activeUI={{
              progress: "waveform",
              playList:"unSortable",
              trackTime:false,
              artwork: false,
              volume: true,
              trackInfo: true,
              
            }}
            playListOpen={true}
            /> 
        </div>
     

        
      </div>
    </div>
  )
}

export default App
