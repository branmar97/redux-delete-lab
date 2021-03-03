import React from 'react';
import Band from './Band';
import { connect } from 'react-redux'

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


export default connect(mapStateToProps)(Bands);