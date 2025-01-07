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
import  { useState, useEffect } from 'react';



const playlist = [
  { src: TTC, title: 'The cracks' },
  { src: Epigram, title: 'Epigram' },
  { src: Distillorama, title: 'Distillorama' },
  { src: Godspeed, title: 'Godspeed' },
  { src: Idols, title: 'Idols' },
]

function App() {
 
  const [currentTrack, setTrackIndex] = useState(0)

  // Initialize Matomo Tag Manager
  useEffect(() => {
    window._mtm = window._mtm || [];
    window._mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://matomo.asg-dev.fr/js/container_AkTkZi46.js';
    document.head.appendChild(script);
  }, []);

  // Track song changes
  const handleClickTrack = (index: number) => {
    console.log("Playing song "+index);
    
    setTrackIndex(index);
    // Force replay if same track
    if (index === currentTrack) {
      const audioElement = document.getElementsByClassName('rhap_main-controls-button')[1] as HTMLButtonElement;
      const isPlaying = audioElement?.getAttribute('aria-label') === 'Pause';
      
      if (audioElement && !isPlaying) {
        audioElement.click();
        // Push track change event to Matomo
        window._mtm.push({
          'event': 'songChange',
          'songTitle': playlist[index].title
        });
      }
    }
    else{
      // Push track change event to Matomo
      window._mtm.push({
        'event': 'songChange',
        'songTitle': playlist[index].title
      });
    }
    
  }
  const clickContact = () => {
    window._mtm.push({
      'event': 'contact',
    });
     window.location.href = 'mailto:unionjackpunx@gmail.com';
  }

  // Track next/previous clicks
  const handleClickNext = () => {
    const nextIndex = currentTrack < playlist.length - 1 ? currentTrack + 1 : 0;
    window._mtm.push({
      'event': 'nextSong',
      'songTitle': playlist[nextIndex].title
    });
    setTrackIndex(nextIndex);
  };

  const handleClickPrevious = () => {
    const prevIndex = currentTrack > 0 ? currentTrack - 1 : playlist.length - 1;
    window._mtm.push({
      'event': 'previousSong',
      'songTitle': playlist[prevIndex].title
    });
    setTrackIndex(prevIndex);
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
            
              <div className="flex flex-row max-md:flex-col gap-4 w-3/4 justify-center items-center">
                <div className="w-1/2 max-md:w-full">                
                  <img src={AcidSerenade} alt='Acid Serenade' className='w-full h-full object-contain'/> 
                </div>
                
                <div className="w-1/2 max-md:w-full flex flex-col justify-left items-left align-left h-full justify-between grow" >
                  <div className='p-4 justify-center uppercase text-clamp-4xl font-anton text-white leading-[1.2] max-lg:text-[1.5rem] max-md:text-[1rem]'>
                    <p>Listen to five songs from our upcoming album</p>
                  </div>
                  
                  <div className="p-4 align-left list-none">
                    {playlist.map((track, index) => (
                      <li>
                        <button
                        key={index}
                        onClick={() => handleClickTrack(index)} >
                          <p className={`${index===currentTrack ? 'text-yellow-custom' : 'text-white' } hover:text-yellow-custom font-anton uppercase text-[2rem] leading-8 max-md:text-[2rem] max-md:leading-6 `}>
                          
                       {index+1} - {track.title}</p>
                      </button>
                      </li>
                    ))}
                  
                  </div>
                  <div className='h-full flex items-end mt-20 max-md:mt-5 max-md:justify-center'>
                    <button 
                      onClick={clickContact}
                      className='hover:text-yellow-custom hover:bg-transparent hover:border-yellow-custom border-2 border-black bg-white text-black px-4 py-2 font-anton uppercase text-[2rem] 
                      max-md:text-[1.5rem] leading-8 flex items-center gap-2'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <p className='leading-8'>Contact us</p>
                    </button>
                  </div>
                </div>
                
              </div>

      
            </div>


      </div>
      
      <div className='w-full p-4 max-md:p-1 gap-4 flex flex-row bg-white animate-fadeInUp h-[20vh]'>
            <div className='w-1/4 max-md:w-1/3 flex items-center'> <img src={UJLogo} className="max-w-[300px] h-full object-contain w-full" alt="Union Jack logo" /></div>
                    
              <AudioPlayer
              
                autoPlay={true}
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
