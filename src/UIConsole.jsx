import PropTypes from 'prop-types';

function UIConsole(props){

    const handleClick = (event)=>{
        props.interaction(event.target);
     }

    return(
        <div className="ui-console-styles">
            <div className="console-btn" id="ac" onClick={handleClick}>AC</div>
            <div className="console-btn" id="percent" onClick={handleClick}>%</div>
            <div className="console-btn" id="plus-minus" onClick={handleClick}>+/-</div>
            <div className="console-btn" id="divide" onClick={handleClick}>/</div>
            <div className="console-btn" id="seven" onClick={handleClick}>7</div>
            <div className="console-btn" id="eight" onClick={handleClick}>8</div>
            <div className="console-btn" id="nine" onClick={handleClick}>9</div>
            <div className="console-btn" id="multiply" onClick={handleClick}>x</div>
            <div className="console-btn" id="four" onClick={handleClick}>4</div>
            <div className="console-btn" id="five" onClick={handleClick}>5</div>
            <div className="console-btn" id="six" onClick={handleClick}>6</div>
            <div className="console-btn" id="minus" onClick={handleClick}>-</div>
            <div className="console-btn" id="one" onClick={handleClick}>1</div>
            <div className="console-btn" id="two" onClick={handleClick}>2</div>
            <div className="console-btn" id="three" onClick={handleClick}>3</div>
            <div className="console-btn" id="plus" onClick={handleClick}>+</div>
            <div className="console-btn" id="zero" onClick={handleClick}>0</div>
            <div className="console-btn" id="empty"></div>
            <div className="console-btn" id="decimal" onClick={handleClick}>.</div>
            <div className="console-btn" id="equals" onClick={handleClick}>=</div>
        </div>
    )
}

UIConsole.propTypes = {
    interaction: PropTypes.func,
    savedButton: PropTypes.string,
}

export default UIConsole