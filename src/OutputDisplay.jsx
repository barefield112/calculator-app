import PropTypes from 'prop-types';

function OutputDisplay(props){

    return(
        <div id="Output" className="output-display-styles">
            {props.output}
        </div>
    )
}

OutputDisplay.propTypes = {
    output: PropTypes.string
}

export default OutputDisplay