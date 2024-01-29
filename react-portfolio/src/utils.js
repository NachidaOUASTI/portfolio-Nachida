/* La fonction getImageUrl est utile pour générerdes URL 
vers des ressources statiques dans votre application (dossier assets). 
ça peut être utilisé pour charger des images, des fichiers CSS, etc. */


export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };