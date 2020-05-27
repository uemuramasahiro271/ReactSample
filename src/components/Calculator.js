import React from 'react';
import NumberBtn from './NumberBtn';
import OperatorBtn from './OperatorBtn';
import Result from './Result';
import '../css/Calculator.css';

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            operator: "",
            result: 0,
        }
    }

    hendleNumberBtnClick(number) {

        this.setState({number: number});

        this.setState({result: number});
    }

    hendleOperatorBtnClick(operator) {
        this.setState({operator: operator});
    }

    render() {
        return(
            <div className="frame">
                <div className="main_contents">
                    <Result 
                        result={this.state.result}
                        operator={this.state.operator} />
                    <table>
                        <tr>
                            <th><NumberBtn number="7" hendleNumberBtnClick={this.hendleNumberBtnClick.bind(this)} /></th>
                            <th><NumberBtn number="8" hendleNumberBtnClick={this.hendleNumberBtnClick.bind(this)} /></th>
                            <th><NumberBtn number="9" hendleNumberBtnClick={this.hendleNumberBtnClick.bind(this)} /></th>
                            <th><OperatorBtn operator="×" hendleOperatorBtnClick={this.hendleOperatorBtnClick.bind(this)} /></th>
                        </tr>
                        <tr>
                            <th><NumberBtn number="4" hendleNumberBtnClick={this.hendleNumberBtnClick.bind(this)} /></th>
                            <th><NumberBtn number="5" hendleNumberBtnClick={this.hendleNumberBtnClick.bind(this)} /></th>
                            <th><NumberBtn number="6" hendleNumberBtnClick={this.hendleNumberBtnClick.bind(this)} /></th>
                            <th><OperatorBtn operator="-" hendleOperatorBtnClick={this.hendleOperatorBtnClick.bind(this)} /></th>
                        </tr>
                        <tr>
                            <th><NumberBtn number="1" hendleNumberBtnClick={this.hendleNumberBtnClick.bind(this)} /></th>
                            <th><NumberBtn number="2" hendleNumberBtnClick={this.hendleNumberBtnClick.bind(this)} /></th>
                            <th><NumberBtn number="3" hendleNumberBtnClick={this.hendleNumberBtnClick.bind(this)} /></th>
                            <th><OperatorBtn operator="+" hendleOperatorBtnClick={this.hendleOperatorBtnClick.bind(this)} /></th>
                        </tr>
                        <tr>
                            <th><NumberBtn number="0" hendleNumberBtnClick={this.hendleNumberBtnClick.bind(this)} /></th>
                            <th><OperatorBtn operator="=" hendleOperatorBtnClick={this.hendleOperatorBtnClick.bind(this)} /></th>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Calculator;