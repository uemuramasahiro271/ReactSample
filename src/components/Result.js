import React from 'react';
import '../css/Result.css';

class Result extends React.Component {

    render() {
        return (
            <div className="contents">
                <div className="result_text">{this.props.result}</div>
                <div className="operator_text">{this.props.operator}</div>
            </div>
        );
    }
}

export default Result;