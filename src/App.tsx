import UJLogo from './assets/UJ_PromoShot2025.jpg'
import AcidSerenade from './assets/AcidSerenades_FrontV2-web.jpg'
import './App.css'
import Epigram from './assets/music/03_EPIGRAM_streaming.mp3';
import Godspeed from './assets/music/02_GODSPEED_streaming.mp3';
import TTC from './assets/music/01_THE CRACKS_streaming.mp3';
import Distillorama from './assets/music/06_DISTILLORAMA_streaming.mp3';
import Idols from './assets/music/04_IDOLS_streaming.mp3';
import SocialGame from './assets/music/05_SOCIAL GAME_streaming.mp3';
import GoldAndDiamonds from './assets/music/07_GOLD-AND-DIAMONDS_streaming.mp3';
import DissonantRadio from './assets/music/08_DISSONANT RADIO_streaming.mp3';
import Medusa from './assets/music/09_MEDUSA_streaming.mp3';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import  { useState, useEffect } from 'react';
import thecracks from './assets/thecracks.jpg';
import epigram from './assets/epigram.jpg';
import distillorama from './assets/distillorama.jpg';
import godspeed from './assets/godspeed.jpg';
import idols from './assets/idols.jpg';
import socialgame from './assets/socialgame.jpg';
import { FaSpotify, FaApple, FaYoutube, FaDeezer, FaBandcamp, FaCompactDisc } from 'react-icons/fa';


const playlist = [
  { src: TTC, title: 'The cracks',image:thecracks,alt:'The cracks cover artwork. A black and white photo of an old lady in a jumper swater holding her face in her hands. ',links:[{'youtube':'https://www.youtube.com/watch?v=5txQ_USL-1M'},{'spotify':'https://open.spotify.com/track/5bppEH1PqGPs6gQnS7bCUy'},{'Deezer':'https://dzr.page.link/4GEj7YSktYdt4UJs6'},{'Apple Music':'https://music.apple.com/us/album/the-cracks-single/1798833081'}]},
  { src: Godspeed, title: 'Godspeed',image:godspeed,alt:'Godspeed cover artwork. A purple rose lying on sheets of paper. The colors seems to be ultra-violet' },
  { src: Epigram, title: 'Epigram',image:epigram,alt:'Epigram cover artwork. A black and white photo of a cross shaped gravestone in a forest' },
  { src: Idols, title: 'Idols',image:idols,alt:'Idols cover artwork. A sepia toned picture of a topless tattooed man getting a tattoo on his left arm. ' },
  { src: SocialGame, title: 'Social Game',image:socialgame,alt:'Social Game cover artwork. A bloody fist standing right up in the air on a white background. ',links:[{'Deezer':'https://dzr.page.link/knA5pjVv3DTT7xm16'},{'Apple Music':'https://music.apple.com/fr/album/social-game-single/1813021286'},{'Spotify':'https://open.spotify.com/intl-fr/track/69UTGTFkEf6IQYIsLRIsNo?si=d29746d16a134e04'}]},
  { src: Distillorama, title: 'Distillorama',image:distillorama,alt:'Distillorama cover artwork. An old black Favorit typewriter on a white background' },
  { src: GoldAndDiamonds, title: 'Gold & Diamonds',image:AcidSerenade,alt:'' },
  { src: DissonantRadio, title: 'Dissonant Radio',image:AcidSerenade,alt:'' },
  { src: Medusa, title: 'Medusa',image:AcidSerenade,alt:'' },
]

function App() {
 
  const [currentTrack, setTrackIndex] = useState(0)
  const [loadedPlaylist, setLoadedPlaylist] = useState(playlist)
  const [singleTrack, setSingleTrack] = useState(false)
  
  // Initialize Matomo Tag Manager
  useEffect(() => {
    window._mtm = window._mtm || [];
    window._mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://matomo.asg-dev.fr/js/container_AkTkZi46.js';
    document.head.appendChild(script);

    const params = new URLSearchParams(window.location.search);
    const trackParam = params.get('track');
    if (trackParam !== null && trackParam !== undefined && parseInt(trackParam) >= 1 && parseInt(trackParam) <= 5 ) {
      setLoadedPlaylist(playlist.slice(parseInt(trackParam)-1,parseInt(trackParam)));
      setSingleTrack(true);
    }
  }, []);

  
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
      'songTitle': loadedPlaylist[nextIndex].title
    });
    setTrackIndex(nextIndex);
  };

  const handleClickPrevious = () => {
    const prevIndex = currentTrack > 0 ? currentTrack - 1 : loadedPlaylist.length - 1;
    window._mtm.push({
      'event': 'previousSong',
      'songTitle': loadedPlaylist[prevIndex].title
    });
    setTrackIndex(prevIndex);
  };
  
  const handleEnd = () => {
    console.log('end')
    setTrackIndex((currentTrack) =>
            currentTrack < loadedPlaylist.length - 1 ? currentTrack + 1 : 0
        );
  }

  return (
    <div className="bg-white h-screen max-h-screen flex flex-col justify-center item-s-center p-4">
      <div className='grow bg-blue-custom border-2 border-black  w-full flex flex-col justify-start bg-[url("./assets/FondBack-noborder.jpg")] bg-cover bg-no-repeat bg-right-bottom overflow-auto'>
      
          <div className='w-full bg-[length:50vw] bg-[url("./assets/orange2.png")]  h-full bg-no-repeat bg-right-bottom  flex flex-row  gap-8 lg:pt-8 items-center overflow-scroll justify-center '>
            
              <div className={`flex ${singleTrack ? 'flex-col' : 'flex-row'} max-md:flex-col gap-4 w-3/4 justify-center items-center`}>
                <div className="w-1/2 min-lg:max-w-[500px] max-md:w-2/3">
                <div className={`flex justify-center ${singleTrack ? 'w-full' : ''}`}>
                  {singleTrack && <img src={loadedPlaylist[0].image} alt={`${loadedPlaylist[0].alt}`} className='w-full max-w-[500px] h-full object-contain'/>}
                  {!singleTrack && <img src={AcidSerenade} alt='Acid Serenade' className='w-3/4 h-full object-contain'/>}
                </div>
               
                </div>


                {singleTrack && loadedPlaylist[0].links && (
                  <div className="flex flex-col gap-4 justify-center items-center mt-4 w">
                    {loadedPlaylist[0].links.map((link, index) => {
                      const platform = Object.keys(link)[0];
                      const url = link[platform as keyof typeof link];
                      return (
                        <a
                          key={index}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='hover:text-yellow-custom hover:bg-transparent hover:border-yellow-custom border-2 border-black bg-white text-black px-4 py-2 font-anton uppercase leading-8 flex items-center w-full'
                        >
                          {platform.toLowerCase() === 'spotify' && <p className='text-[2rem] max-md:text-[1rem] flex flex-row items-center gap-4  '><FaSpotify className="w-16 h-16 max-lg:w-10 max-lg:h-10 max-md:w-8 max-md:h-8" /> Spotify</p>}
                          {platform.toLowerCase() === 'apple music' && <p className='text-[2rem] max-md:text-[1rem]   flex flex-row items-center gap-4  '><FaApple className="w-16 h-16 max-lg:w-10 max-lg:h-10 max-md:w-8 max-md:h-8" /> Apple music</p>}
                          {platform.toLowerCase() === 'youtube' && <p className='text-[2rem] max-md:text-[1rem] flex flex-row items-center gap-4  '><FaYoutube className="w-16 h-16 max-lg:w-10 max-lg:h-10 max-md:w-8 max-md:h-8" /> Youtube</p>}
                          {platform.toLowerCase() === 'deezer' && <p className='text-[2rem] max-md:text-[1rem] flex flex-row items-center gap-4  '><FaDeezer className="w-16 h-16 max-lg:w-10 max-lg:h-10 max-md:w-8 max-md:h-8" /> Deezer</p>}

                        </a>
                      );
                    })}
                      <button 
                      onClick={clickContact}
                      className='w-full hover:text-yellow-custom text-center hover:bg-transparent hover:border-yellow-custom border-2 border-black bg-white text-black px-4 py-2 font-anton uppercase text-[2rem] 
                      max-md:text-[1.5rem] leading-8 flex items-center gap-2'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 max-lg:w-10 max-lg:h-10 max-md:w-8 max-md:h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <p className='leading-8'>Contact us</p>
                    </button>
                  </div>
                )}

                
                <div className="w-1/2 max-md:w-full flex flex-col justify-left items-left align-left h-full justify-between grow" >
                {!singleTrack &&

                  <><div className='p-4 justify-center  uppercase text-clamp-4xl font-anton text-white leading-[1.2] text-[1.95rem] max-lg:text-[1.5rem] max-md:text-[1rem]'>
                    <p className='text-center w-full'>Listen to our new album "Acid Serenades"</p>
                  </div>
                   <div className="p-4 align-left list-none">
                    {/* <ul>
                    {loadedPlaylist.map((track, index) => (
                      <li key={index}>
                        <button
                        key={index}
                        onClick={() => handleClickTrack(index)} >
                          <p className={`${index===currentTrack ? 'text-yellow-custom' : 'text-white' } hover:text-yellow-custom font-anton uppercase text-[2rem] leading-8 max-md:text-[1rem] max-md:leading-6 `}>
                          
                       {index+1} - {track.title}</p>
                      </button>
                      </li>
                    ))}
                    </ul> */}
                    <div className="flex flex-col gap-4 justify-center items-center mt-4 max-md:mt-1">
                    <a href="https://www.beer-records.com/shop/union-jack-acid-serenades/" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-custom hover:bg-transparent hover:border-yellow-custom border-2 border-black bg-white text-black px-4 py-2 font-anton uppercase leading-8 flex items-center w-full' >                    
                      <p className='text-[1.5rem] max-md:text-[1rem] flex flex-row items-center gap-4  '><FaCompactDisc className="w-8 h-8" /> Buy 12" vinyl</p></a>
                    <a href="https://unionjack.bandcamp.com/album/acid-serenades" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-custom hover:bg-transparent hover:border-yellow-custom border-2 border-black bg-white text-black px-4 py-2 font-anton uppercase leading-8 flex items-center w-full' >
                      <p className='text-[1.5rem] max-md:text-[1rem] flex flex-row items-center gap-4  '><FaBandcamp className="w-8 h-8" /> Bandcamp</p></a>
                    <a href="https://open.spotify.com/intl-fr/artist/2e4FKa4Paf68dTcW3wozsc?si=dsKwUCriT0uTIX44nMxbPA" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-custom hover:bg-transparent hover:border-yellow-custom border-2 border-black bg-white text-black px-4 py-2 font-anton uppercase leading-8 flex items-center w-full' >                    
                        <p className='text-[1.5rem] max-md:text-[1rem] flex flex-row items-center gap-4  '><FaSpotify className="w-8 h-8" /> Spotify</p></a>
                    <a href="https://music.apple.com/fr/artist/union-jack/1154548251" target="_blank" rel="noopener noreferrer" className='align-center hover:text-yellow-custom hover:bg-transparent hover:border-yellow-custom border-2 border-black bg-white text-black px-4 py-2 font-anton uppercase leading-8 flex items-center w-full' >
                      <p className='text-[1.5rem] max-md:text-[1rem] flex flex-row items-center gap-4  '><FaApple className="w-8 h-8" /> Apple music</p></a> 
                    <a href="https://www.deezer.com/fr/artist/75027712" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-custom hover:bg-transparent hover:border-yellow-custom border-2 border-black bg-white text-black px-4 py-2 font-anton uppercase leading-8 flex items-center w-full' >
                      <p className='text-[1.5rem] max-md:text-[1rem] flex flex-row items-center gap-4  '><FaDeezer className="w-8 h-8" /> Deezer</p></a>
                    </div>
                  </div></>}
                  {!singleTrack &&
                  <div className={`h-full flex items-end mt-20 max-md:mt-2 justify-center`}>
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
                  }
                </div>
                
                
                
              </div>

      
            </div>


      </div>
      
      <div className='w-full p-4 max-md:p-1 gap-4 flex flex-row bg-white animate-fadeInUp h-[20vh]'>
            <div className='w-1/4 max-md:w-1/3 flex items-center'> <img src={UJLogo} className="max-w-[300px] h-full object-contain w-full" alt="Union Jack logo" /></div>
                    
              <AudioPlayer
              
                autoPlay={true}
                src={loadedPlaylist[currentTrack].src}
                showJumpControls={false}
                showSkipControls={!singleTrack}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
                onEnded={handleEnd}
                layout="stacked-reverse"
                customAdditionalControls={[]}
                customVolumeControls={[]}
                
                header={
                  <div className='flex flex-col justify-center items-center gap-2 w-full'>
                    <p className="flex flex-row justify-center uppercase text-clamp-2xl font-anton">{loadedPlaylist[currentTrack].title}</p>
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
