'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ravesh style dadan be sorat external
var styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '80%',
        color: 'green'
    }
    ///////////////////////////////////////////////////////
};
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { rows: [] };
        _this.submit = _this.submit.bind(_this); //?????????????
        return _this;
    }

    _createClass(App, [{
        key: 'submit',
        value: function submit(e) {
            e.preventDefault();
            var rows = this.state.rows; // === ba this.state.rows

            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var age = document.getElementById('age').value;
            // console.log(age);
            rows.push({ firstName: firstName, lastName: lastName, age: age });
            this.setState({ rows: rows }); //ta zamani ke in ro nanevisim render nemikonad chon ta state taqir nakonad render farakhani nemishavad
        }
    }, {
        key: 'render',
        value: function render() {
            var rows = this.state.rows; // === ba this.state.rows

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    { className: 'title' },
                    ' table'
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.submit },
                    React.createElement('input', { type: 'text', id: 'firstName' }),
                    React.createElement('input', { type: 'text', id: 'lastName' }),
                    React.createElement('input', { type: 'number', id: 'age' }),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'add'
                    )
                ),
                React.createElement(
                    'table',
                    { className: 'table' },
                    React.createElement(
                        'thead',
                        { className: 'table' },
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'th',
                                null,
                                'firstName'
                            ),
                            React.createElement(
                                'th',
                                null,
                                ' lastName  '
                            ),
                            React.createElement(
                                'th',
                                null,
                                ' age '
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        { className: 'container' },
                        rows.map(function (row, index) {
                            //alan ma map zadim ke yeseri row ro map konim be tr
                            return (
                                //agar in ro nazanim moshkeli pish nemiomad faqad ye warning midad va in ba khater in ke react 
                                React.createElement(
                                    'tr',
                                    { key: index },
                                    React.createElement(
                                        'td',
                                        null,
                                        row.firstName
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        row.lastName
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        row.age
                                    )
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);
///////////////////////////////////////////////////////

var root = document.getElementById('root');
ReactDOM.render(React.createElement(App, null), root);
