import React from 'react';
import NumberBtn from './NumberBtn';
import OperatorBtn from './OperatorBtn';
import '../css/Calculator.css';

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            operator: ""
        }
    }
    render() {
        return(
            <div className="frame">
                <div className="main_contents">
                    <table>
                        <tr>
                            <th><NumberBtn number="7" /></th>
                            <th><NumberBtn number="8" /></th>
                            <th><NumberBtn number="9" /></th>
                            <th><OperatorBtn operator="×" /></th>
                        </tr>
                        <tr>
                            <th><NumberBtn number="4" /></th>
                            <th><NumberBtn number="5" /></th>
                            <th><NumberBtn number="6" /></th>
                            <th><OperatorBtn operator="-" /></th>
                        </tr>
                        <tr>
                            <th><NumberBtn number="1" /></th>
                            <th><NumberBtn number="2" /></th>
                            <th><NumberBtn number="3" /></th>
                            <th><OperatorBtn operator="+" /></th>
                        </tr>
                        <tr>
                            <th><NumberBtn number="0" /></th>
                            <th><OperatorBtn operator="=" /></th>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Calculator;