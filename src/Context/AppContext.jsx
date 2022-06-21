import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import  { apiKey } from '../Api/movieApi';
import { fireBaseAuth } from '../Firestore/fireStore';


const StateContext = createContext()


const AppContext = ({children}) => {

    const [showTrailer, setShowTrailer] = useState({open: false, id: ""})
    const [user, setUser] = useState({})

    const [searchResults, setSearchResults] = useState([]);

    const signUp = (inputEmail,inputPassword) => {
      return createUserWithEmailAndPassword(fireBaseAuth,inputEmail,inputPassword)
    }

    const logIn = (inputEmail,inputPassword) => {
      return signInWithEmailAndPassword(fireBaseAuth,inputEmail,inputPassword)
    }

    const logOut = () => {
      return signOut(fireBaseAuth);
    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(fireBaseAuth ,(currentUser) => {
          if(currentUser?.email) {
            setUser(currentUser)
          }
          else {
            setUser(currentUser)
          }
      })

      return () => {
        unsubscribe();
      }
    })

    const getVideo = async(input) => {
        const keyLength = Object.keys(input);
        let type = "";
        if(keyLength.includes("media_type")) {
          type = input.media_type === "movie" ? "movie" : "tv"
        }
        else {
          type = keyLength.length === 14 ? "movie" : "tv"
        }
        let response = await fetch(`https://api.themoviedb.org/3/${type}/${input.id}/videos?api_key=${apiKey}&language=en-US`);
        const {results} = await response.json();
        return results;
      }
      

    const playTrailer = async(inputData) => {
        const trailers = await getVideo(inputData);
        const video = trailers.find((item) => item.name === "Official Trailer")
         setShowTrailer({open: true, id: trailers[0].key})
     }

     const closeTrailer = () => {
      setShowTrailer({open: false, id: ""})
    }

     const allState = {
      showTrailer, 
      setShowTrailer, 
      getVideo, 
      playTrailer,
      user,
      signUp,
      logIn,
      logOut,
      searchResults, 
      setSearchResults,
      closeTrailer
     }

  return (
    <>
    <StateContext.Provider value={{ allState }}>
        {children}
    </StateContext.Provider>
    </>
  )
}

const UseStateContext = () => {
    return useContext(StateContext);
}


export default AppContext
export {UseStateContext}
