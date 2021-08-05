import React from 'react'


const New = ({noticia}) => {

    //extract data
    const {urlToImage, url, title, description, source} = noticia;

    const img = (urlToImage) ?
    <div className="card-image">
        <img src={urlToImage} alt={title} />  
        <span className="card-title">{source.name}</span> 
    </div>
    : null
    return ( 
        <div className="col s12 m6 l4">
            <div className='card'>
               {img}                
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">Read full new</a>
                </div>
            </div>
        </div>
     );
}
 
export default New;