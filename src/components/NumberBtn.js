import React from 'react';
import '../css/NumberBtn.css';

class NumberBtn extends React.Component {

    btnClick() {
        //this.props.hendleNumberBtnClick(this.props.number);
    }

    render() {
        return (
            <div>
                <button className="number_btn" type="button" onClick={() => {this.btnClick()}}>{this.props.number}</button>
            </div>
        );
    }
}

export default NumberBtn;