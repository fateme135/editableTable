'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    },
    table: {
        width: '70%',
        maxWidth: '900px',
        textAlign: 'center',
        background: '#FFF',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    },
    input: {
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ff6f5f',
        width: '100%'
    }
    ///////////////////////////////////////////////////////
};
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            rows: [],
            firstName: '',
            lastName: '',
            age: 0,
            sex: false
            // this.submit = this.submit.bind(this);//chon az arrow fun estefade nakardim felan bind mikonim
        };_this.onChange = _this.onChange.bind(_this); //bind ro ham mishe in ja kard ham to on jayi ke farakhani mikonim
        return _this;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////
    // submit(e) {
    //     e.preventDefault();
    //     const { rows } = this.state;// === ba this.state.rows
    //     const firstName = document.getElementById('firstName').value;
    //     const lastName = document.getElementById('lastName').value;
    //     const age = document.getElementById('age').value;
    //     // console.log(age);
    //     rows.push({ firstName, lastName, age })
    //     this.setState({ rows })//ta zamani ke in ro nanevisim render nemikonad chon ta state taqir nakonad render farakhani nemishavad
    // }
    ////////////////////////===onsubmit/////////////////////////////////////////////////


    _createClass(App, [{
        key: 'addNew',
        value: function addNew() {
            var _state = this.state,
                rows = _state.rows,
                firstName = _state.firstName,
                lastName = _state.lastName,
                age = _state.age,
                sex = _state.sex;

            rows.push({ firstName: firstName, lastName: lastName, age: age, sex: sex, id: uuidv4() });
            this.setState({ rows: rows });
        }
        ////////////////////////////////////////////////////////////////////////////

    }, {
        key: 'onChange',
        value: function onChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value,
                type = _event$target.type,
                checked = _event$target.checked;

            if (type === "checkbox") {
                this.setState(_defineProperty({}, name, checked));
            } else {
                this.setState(_defineProperty({}, name, value));
            }
        }
        ////////////////////////////////First Solution with index for delete it is no nice////////////////////////////////////////////

    }, {
        key: 'ondelete',
        value: function ondelete(index) {
            var rows = this.state.rows;

            rows.splice(index, 1);
            this.setState({ rows: rows });
        }
        ///////////////////////////////////second solution/////////////////////////////////////////
        // ondelete(id) {

        //     let { rows } = this.state;
        //     rows = rows.filter(value => value.id !== id);
        //     this.setState({ rows });
        //     debugger;
        // }
        ////////////////////////////////////////////////////////////////////////////

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // const { rows } = this.state;// === ba this.state.rows
            var _state2 = this.state,
                rows = _state2.rows,
                firstName = _state2.firstName,
                lastName = _state2.lastName,
                age = _state2.age,
                sex = _state2.sex;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    { className: 'title' },
                    ' table'
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
                            ),
                            React.createElement(
                                'th',
                                null,
                                ' sex '
                            ),
                            React.createElement(
                                'th',
                                null,
                                ' action '
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                React.createElement('input', { defaultValue: firstName, name: 'firstName', style: styles.input, type: 'text', onChange: this.onChange })
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement('input', { defaultValue: lastName, name: 'lastName', style: styles.input, type: 'text', onChange: this.onChange })
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement('input', { defaultValue: age, name: 'age', style: styles.input, type: 'number', onChange: this.onChange })
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement('input', { checked: sex, name: 'sex', style: styles.input, type: 'checkbox', onChange: this.onChange })
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement(
                                    'button',
                                    { onClick: this.addNew.bind(this) },
                                    'Add'
                                )
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
                                    { key: row.id },
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
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        row.sex
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        ' ',
                                        React.createElement(
                                            'button',
                                            { onClick: _this2.ondelete.bind(_this2) },
                                            'Delete'
                                        )
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


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
/////////////////////////////////////////////////////////////
var root = document.getElementById('root');
ReactDOM.render(React.createElement(App, null), root);
