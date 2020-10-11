import React, {Component} from 'react'
import Header from './Header';
import VideoBox from '../components/VideoBox';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            numBox: 1
        }
        this.addNewVideoBox = this.addNewVideoBox.bind(this)
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
        this.setState({
            numBox: this.state.numBox + 1
          });
    }
    removeLocalStorage() {

    }
    render() {
        const {data, loading ,numBox } = this.state;
        
        const children = [];
        let load = true;
        if(!loading){
            
        for (var i = 0; i < numBox; i += 1) {
            data.filter(dt => (dt["count"] < 5) )
            children.push(<VideoBox key={i} number={i} url={data["url"]}/>);
        };
        load = false;
        } else {
            console.log("len before",data.length)
        console.log(loading)
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
                                <a className="nav-link" onClick={this.addNewVideoBox}>Add Box </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" onClick={this.removeLocalStorage}>Clear LS</a>
                            </li>

                        </ul>
                    </div>
                </nav>
                {/* container */}
                <div className="container pt-5">
                    <div className="row">
                    {!load ? children : <p>getting data</p> }
                    </div>
                </div>

            </div>
        )
    }
}

export default Main
