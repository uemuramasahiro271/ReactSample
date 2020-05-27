import React from 'react';
import '../css/OperatorBtn.css';

class OperatorBtn extends React.Component {

    btnClick() {
        this.props.hendleOperatorBtnClick(this.props.operator);
    }

    render() {
        return (
            <div>
                <button className="operator_btn" type="button" onClick={() => {this.btnClick()}}>{this.props.operator}</button>
            </div>
        );
    }
}

export default OperatorBtn;