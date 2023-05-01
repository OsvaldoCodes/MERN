import React from 'react';
import { useParams } from 'react-router-dom';

const Parameters = (props) => {

    const { word, color, backColor } = useParams();

    return (
        <div>

            {
                isNaN(word)?
                <p style={ color? {color: color, backgroundColor: backColor} :null}>
                    The word is: {word}
                </p>
                
                :
                
                <p>
                    The number is: {word}
                </p>
            }

        </div>
    )
}

export default Parameters;