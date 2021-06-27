import {useState, useEffect} from 'react'
import NavBar from './NavBar'

const NasaPhoto = () => {
    const [photoData, setPhotoData] = useState(null)

    
    useEffect(()=> {
        fetchPhoto();
        async function fetchPhoto(){
            const res = await fetch(
                "https://api.nasa.gov/planetary/apod?api_key=m4LONax9yncJ4SSqPgWCPuBOAvFJ1M5diNTLvmwE"
            )
            const data = await res.json();
            setPhotoData(data)
            console.log(data)
        }
    }, [])

    if(!photoData) return <div />
    return (
        <div>
            <NavBar />
            <h2>{photoData.title}</h2>
            <p>{photoData.date}</p>
            
            {photoData.media_type === 'image' ? <img 
            src={photoData.url} 
            alt={photoData.title} /> : <iframe
            title='space-video'
            src={photoData.url}
            frameBorder='0'
            gesture='media'
            allow='encrypted-media'
            allowFullScreen
            className='photo'
            /> }
        </div>
    )
}

export default NasaPhoto
