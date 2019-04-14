// ravesh style dadan be sorat external
let styles = {
    container:
    {
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
}
///////////////////////////////////////////////////////
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            firstName: '',
            lastName: '',
            age: 0,
            sex: false
        }
        // this.submit = this.submit.bind(this);//chon az arrow fun estefade nakardim felan bind mikonim
        this.onChange = this.onChange.bind(this);//bind ro ham mishe in ja kard ham to on jayi ke farakhani mikonim
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
    addNew() {
        let { rows, firstName, lastName, age, sex } = this.state;
        rows.push({ firstName, lastName, age, sex, id:uuidv4() });
        this.setState({ rows });
    }
    ////////////////////////////////////////////////////////////////////////////
    onChange(event) {
        let { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            this.setState({ [name]: checked })
        }
        else {
            this.setState({ [name]: value })
        }
    }
    ////////////////////////////////First Solution with index for delete it is no nice////////////////////////////////////////////
    onDelete(index) {
        const { rows } = this.state;
        rows.splice(index, 1);
        this.setState({ rows });
    }
    ///////////////////////////////////second solution/////////////////////////////////////////
    // onDelete(id) {
    //     let { rows } = this.state;
    //     rows = rows.filter(value => value.id !== id);
    //     this.setState({ rows });
    // }
    ////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////
    render() {
        // const { rows } = this.state;// === ba this.state.rows
        let { rows, firstName, lastName, age, sex } = this.state;
        return (
            <div>
                <h1 className="title"> table</h1>
                {/* <form onSubmit={this.submit}>
                    <input type="text" id='firstName' />
                    <input type="text" id='lastName' />
                    <input type="number" id='age' />
                    <button type="submit">add</button>
                </form> */}
                <table className="table">
                    <thead className="table">
                        <tr>
                            <th>firstName</th>
                            <th> lastName  </th>
                            <th> age </th>
                            <th> sex </th>
                            <th> action </th>
                        </tr>
                        <tr>
                            <td><input defaultValue={firstName} name="firstName" style={styles.input} type="text" onChange={this.onChange} /></td>
                            <td><input defaultValue={lastName} name="lastName" style={styles.input} type="text" onChange={this.onChange} /></td>
                            <td><input defaultValue={age} name="age" style={styles.input} type="number" onChange={this.onChange} /></td>
                            <td><input checked={sex} name="sex" style={styles.input} type="checkbox" onChange={this.onChange} /></td>
                            <td><button onClick={this.addNew.bind(this)}>Add</button></td>
                        </tr>
                    </thead>
                    <tbody className="container">
                        {
                            rows.map((row, index) => {//alan ma map zadim ke yeseri row ro map konim be tr
                                return (
                                    //agar key ro nazanim moshkeli pish nemiomad faqad ye warning midad va in ba khater in ke react 
                                    <tr key={index}>
                                     {/* <tr key={row.id} index={index}> */}
                                        <td>{row.firstName}</td>
                                        <td>{row.lastName}</td>
                                        <td>{row.age}</td>
                                        <td>{row.sex}</td>
                                        <td> <button onClick={this.onDelete.bind(this)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>)
    }
}
///////////////////////////////////////////////////////
// function uuidv4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }
/////////////////////////////////////////////////////////////
const root = document.getElementById('root')
ReactDOM.render(<App />, root) 