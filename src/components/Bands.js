import React from 'react';
import Band from './Band';
import { connect } from 'react-redux'

const Bands = ({ bands }) => {
    renderBands = () => {
        bands.map(band => <Band id={band.id} name={band.text} />)
    }
    
    return ( 
        <ul>
            {this.renderBands()}
        </ul>
     );
}
 
const mapStateToProps = ({ bands }) => ({ bands })


export default connect(mapStateToProps)(Bands);