import React from 'react';
import '../css/OperatorBtn.css';

class OperatorBtn extends React.Component {

    render() {
        return (
            <div>
                <button className="operator_btn" type="button">{this.props.operator}</button>
            </div>
        );
    }
}

export default OperatorBtn;