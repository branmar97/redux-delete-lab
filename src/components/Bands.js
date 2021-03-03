import React from 'react';
import Band from './Band';

const Bands = ({ bands }) => {
    renderBands = () => {
        bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)
    }
    
    return ( 
        <div>
            {this.renderBands()}
        </div>>
     );
}


export default Bands;