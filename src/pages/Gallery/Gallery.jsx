import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './Gallery.css';
import Navbar from '../../components/Navbar/Navbar';

function Gallery() {
  const [imageData, setImageData] = useState([
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
  ]);
    const [showFlowers, setShowFlowers] = useState(true);
    const [showCars, setShowCars] = useState(true);
    const [showAnimals, setShowAnimals] = useState(true);
    
    function flowersChanged() {
      setShowFlowers(!showFlowers);
    }
    function carsChanged() {
      setShowCars(!showCars);
    }
    function animalsChanged() {
      setShowAnimals(!showAnimals);
    }
    
    function filterImages(category) {
      if (category === 1 && showFlowers) {
        return true;
      }
      if (category === 2 && showAnimals) {
        return true;
      }
      if (category === 3 && showCars) {
        return true;
      }
      return false;
    }

    function downloadPhoto(id) {
      const updatedGallery = imageData.map(image => {
        if (image.id === id) {
          return {...image, downloads: image.downloads + 1};
        }
        return image;
      });
      setImageData(updatedGallery);
    }
  return (
    <>
    <Navbar />
      <h1>Kategorie Zdjęć</h1>
      <nav>
        <div class="form-check form-switch form-check-inline">
          <input 
            class="form-check-input" 
            type="checkbox" 
            id="kwiaty"
            checked={showFlowers}
            onChange={flowersChanged}></input>
          <label class="form-check-label" for="kwiaty">Kwiaty</label>
        </div>
        <div class="form-check form-switch form-check-inline">
          <input 
            class="form-check-input" 
            type="checkbox" 
            id="zwierzeta"
            checked={showAnimals}
            onChange={animalsChanged}></input>
          <label class="form-check-label" for="zwierzeta">Zwierzęta</label>
        </div>
        <div class="form-check form-switch form-check-inline">
          <input 
            class="form-check-input" 
            type="checkbox" 
            id="samochody"
            checked={showCars}
            onChange={carsChanged}></input>
          <label class="form-check-label" for="samochody">Samochody</label>
        </div>
      </nav>

      <div className='d-flex flex-wrap'>
        {imageData.map(image => {
          if (filterImages(image.category)) {
            return (
              <div key={image.id}>
                <img src={`/assets/${image.filename}`} alt={image.alt} className='border rounded' style={{ margin: '5px' }} />
                <h4>Pobrania: {image.downloads}</h4>
                <button className="btn btn-success" onClick={() => downloadPhoto(image.id)}>Pobierz</button>
              </div>
            );
          };

          return null;
        })}
      </div>
    </>
  );
}

export default Gallery;
