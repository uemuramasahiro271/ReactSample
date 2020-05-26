import React from 'react';
import '../css/NumberBtn.css';

class NumberBtn extends React.Component {

    render() {
        return (
            <div>
                <button className="number_btn" type="button">{this.props.number}</button>
            </div>
        );
    }
}

export default NumberBtn;