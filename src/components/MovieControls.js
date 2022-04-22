import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState' 
import { Watched } from './Watched'

//eye icon in first button and in second delete 
//third button remove from watched  
//weird names thanks to our package from awesomeFonts
export const MovieControls = ({movie, type}) => {
  const {removeMovieFromWatchlist, addMovieToWatched ,moveToWatchlist, removeMovieFromWatched}= useContext(GlobalContext)

  return (
    <div className='inner-card-controls'> 
        {type==='watchlist'&&(
            <>
            <button className='ctrl-btn' onClick={()=>addMovieToWatched(movie)}> 
                <i className='fa-fw far fa-eye'> </i > 
            </button>
            <button className='ctrl-btn'
            onClick={()=>removeMovieFromWatchlist(movie.id)}
            >             
                <i className='fa-fw fa fa-times'></i > 
            </button>
            </>       
        )}

        {type==='watched' &&
      (
        <>
        <button className='ctrl-btn' onClick={()=> moveToWatchlist(movie)}>
          <i className='fa-fw far fa-eye-slash'></i>
        </button>
        <button className='ctrl-btn' onClick={()=> removeMovieFromWatched(movie.id)}>
          <i className='fa-fw fa fa-times'></i > 
        </button>
        </>
      )}
    </div>
  )
}
