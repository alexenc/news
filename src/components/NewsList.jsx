import React from 'react'
import New from './New';

const NewsList = ({news}) => {
    return ( 
        <div className="row">
            {news.map(noticia => (
                <New 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
     );
}
 
export default NewsList;