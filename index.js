// ravesh style dadan be sorat external
let styles = {
    container:
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '80%',
        color :'green'
    }
}
///////////////////////////////////////////////////////
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: [] }
        this.submit = this.submit.bind(this);//chon az arrow fun estefade nakardim felan bind mikonim
    }

    submit(e) {
        e.preventDefault();
        const { rows } = this.state;// === ba this.state.rows
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        // console.log(age);
        rows.push({ firstName, lastName, age })
        this.setState({ rows })//ta zamani ke in ro nanevisim render nemikonad chon ta state taqir nakonad render farakhani nemishavad
    }

    render() {
        const { rows } = this.state;// === ba this.state.rows
        return (
            <div>
                <h1 className="title"> table</h1>
                <form onSubmit={this.submit}>
                    <input type="text" id='firstName' />
                    <input type="text" id='lastName' />
                    <input type="number" id='age' />
                    <button type="submit">add</button>
                </form>
                <table className="table">
                    <thead className="table">
                     <tr>
                        <th>firstName</th>
                        <th> lastName  </th>
                        <th> age </th>
                    </tr>
                 </thead>
                 <tbody className="container">
                     {
                         rows.map((row, index) =>
                          {//alan ma map zadim ke yeseri row ro map konim be tr
                         return (
                                 //agar in ro nazanim moshkeli pish nemiomad faqad ye warning midad va in ba khater in ke react 
                                 <tr key={index}> 
                                <td>{row.firstName}</td>
                                <td>{row.lastName}</td>
                                <td>{row.age}</td>
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

const root = document.getElementById('root')
ReactDOM.render(<App />, root) 