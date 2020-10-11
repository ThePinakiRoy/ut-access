import React, {Component} from 'react'
import Header from './Header';
import VideoBox from '../components/VideoBox';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            numBox: 12,
            children:[]
        }
        this.addNewVideoBox = this
            .addNewVideoBox
            .bind(this)
    }

    componentDidMount() {

        fetch('./data/initial.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then((response) => response.json()).then((messages) => {
            this.setState({data: messages, loading: false})
            console.log("messages", messages);
        });
    }
    addNewVideoBox() {
        const {data} = this.state;
        this.setState({
            numBox: this.state.numBox + 1
        });
        const randomNum = Math.floor(Math.random() * data.length);
        const randomHash = Math.floor(Math.random() * 25);
                let item = data[randomNum];
                if (item["count"] < 5) {
                    data[randomNum]["count"] = data[randomNum]["count"] + 1;
                    data[randomNum]["id"] = data[randomNum]["count"]+data[randomNum]["url"]
                    let className = 'badge-success'
                    if (data[randomNum]["count"] == 1 || data[randomNum]["count"] == 2) {
                        className = 'badge-success'
                    }
                    if (data[randomNum]["count"] == 3 || data[randomNum]["count"] == 4) {
                        className = 'badge-warning'
                    }
                    if (data[randomNum]["count"] == 5) {
                        className = 'badge-danger'
                    }
                    this.state.children.push(<VideoBox
                        key={item["url"]+randomHash}
                        number={randomNum}
                        url={item["url"]}
                        id={data[randomNum]["id"]}
                        count={item["count"]}
                        className={className}
                        removeBox={this.removeBox.bind(this)}/>);
                }
                console.log('c',this.state.children)
    }
    removeBox (id) {
        console.log('remove box ',id)
        const newState = this.state;
        const index = newState.children.findIndex(a => a.props.id === id);
        console.log(index)
        if (index === -1) return;
        newState.children.splice(index, 1);
    
        this.setState(newState)
    }
    removeLocalStorage() {}
    render() {
        const { loading} = this.state;
       
        let load = true;
        if (!loading) {
            load = false;
        } 
        return (
            <div>
                {/* <Header /> */}

                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">ut-Access</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item active">
                                <a className="nav-link" onClick={this.addNewVideoBox}>Add Box
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" onClick={this.removeLocalStorage}>Clear LS</a>
                            </li>

                        </ul>
                    </div>
                </nav>
                {/* container */}
                <div className="container pt-5">
                    {this.state.children.length ==0 ? <h1>Click on Add Box</h1>:<React.Fragment></React.Fragment>}
                    <div className="row">
                        {!load
                            ? this.state.children
                            : <p>getting data</p>}
                    </div>
                </div>

            </div>
        )
    }
}

export default Main
