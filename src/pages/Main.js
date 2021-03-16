import React, {Component} from 'react'
import VideoBox from '../components/VideoBox';
import Header from '../components/Header';
// import JSONResult from '../data/test.json';
import JSONResult from '../data/initial.json';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            numBox: 12,
            children: [],
            headerEl: [],
            arrNum: 0,
            vidNum: 0
        }
        this.addNewVideoBox = this
            .addNewVideoBox
            .bind(this);
        this.addSelectedBox = this
            .addSelectedBox
            .bind(this)

    }

    componentDidMount() {
        const items = JSONResult //… your array, filled with values
        const n = 37 //tweak this to add more items per line

        const result = new Array(Math.ceil(items.length / n))
            .fill()
            .map(_ => items.splice(0, n))
        console.log("result ", result)
        let arrN = Math.floor(Math.random() * result.length)
        this.setState({data: result[arrN], loading: false, arrNum: arrN})

    }

    // Old componentDidMount() {     fetch('./data/initial.json', {         headers:
    // {             'Content-Type': 'application/json',             'Accept':
    // 'application/json'         }     }).then((response) =>
    // response.json()).then((messages) => {         this.setState({data: messages,
    // loading: false})         console.log("messages", messages);     }); }
    addNewVideoBox(randFlag) {
        const {data} = this.state;
        this.setState({
            numBox: this.state.numBox + 1
        });
        const randomNum = Math.floor(Math.random() * data.length);
        const randomHash = Math.floor(Math.random() * 25);
        let item = data[randomNum];
        if (item["count"] < 4) {
            let counter = randFlag
                ? Math.floor(Math.random() * 3) + 1
                : 1;
            console.log("counter", counter)
            data[randomNum]["count"] = data[randomNum]["count"] + counter;
            data[randomNum]["id"] = data[randomNum]["count"] + data[randomNum]["url"]
            let className = 'badge-success'
            if (data[randomNum]["count"] === 1) {
                className = 'badge-success'
            }
            if (data[randomNum]["count"] === 2 || data[randomNum]["count"] === 3) {
                className = 'badge-warning'
            }
            if (data[randomNum]["count"] === 4) {
                className = 'badge-danger'
            }
            this
                .state
                .children
                .push(<VideoBox
                    key={item["url"] + randomHash}
                    number={randomNum}
                    url={item["url"]}
                    id={data[randomNum]["id"]}
                    count={item["count"]}
                    className={className}
                    removeBox={this
                    .removeBox
                    .bind(this)}/>);
            this.setState({
                vidNum: this.state.vidNum + 1
            });
        }
        //console.log('c', this.state.data)
    }
    addSelectedBox(url, count) {
        console.log('addSelectedBox', url, count)
        const randomHash = Math.floor(Math.random() * 105);
        let className = 'badge-success'
        if (count === 1) {
            className = 'badge-success'
        }
        if (count === 2 || count === 3) {
            className = 'badge-warning'
        }
        if (count === 4) {
            className = 'badge-danger'
        }
        count = count + 1
        this
            .state
            .children
            .push(<VideoBox
                key={url + randomHash}
                number={randomHash}
                url={url}
                count={count}
                id={url + randomHash}
                className={className}
                removeBox={this
                .removeBox
                .bind(this)}/>);
    }

    removeBox(id) {
        // console.log('remove box ', id)
        const newState = this.state;
        const index = newState
            .children
            .findIndex(a => a.props.id === id);
        //console.log(index)
        if (index === -1) 
            return;
        newState
            .children
            .splice(index, 1);

        this.setState(newState)
        //console.log('d', this.state.data)
    }
    populateHeader() {
        console.log('in this.populateHeader();')
        const rand2 = Math.floor(Math.random() * 100)
        console.log(this.state.data.length)
        for (let i = 0; i < this.state.data.length; i++) {
            const rand = Math.floor(Math.random() * 100)

            this
                .state
                .headerEl
                .push(<Header
                    key
                    ={rand2 + this.state.data[i].url + rand}
                    url
                    ={this.state.data[i].url}
                    count={this.state.data[i].count}
                    addSelectedBox
                    ={this.addSelectedBox}
                    i={i}/>)
        }
        this
            .state
            .headerEl
            .splice(this.state.data.length)
    }
    render() {
        const {loading, arrNum, vidNum} = this.state;

        //this.populateHeader();

        return (
            <div>
                {/* <Header /> */}

                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark mb-5">
                    <a className="navbar-brand ">
                        <span className="text-center">
                            ut-Access v-1.06 | x{arrNum}</span>
                    </a>
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

                </nav>

                {/* container */}

                {/* <div className="container-fluid my-3 py-5 mx-3" >
                <a
                                className="text-center btn btn-dark my-4 btn-lg btn-block"
                                onClick={() => this.toggleHeader}>Hide
                            </a>
                     <div className="row" id="header">
                         {!loading
                            ? this.state.headerEl
                            : <p>getting data</p>}
                     </div>
                </div> */}

                <div className="container-fluid my-5 py-5 mx-3">
                    <p className="text-center badge badge-pill badge-danger">Current Video Played: {vidNum}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <a
                                className="text-center btn btn-dark my-4 btn-lg btn-block"
                                onClick={() => this.addNewVideoBox(false)}>Add Box
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a
                                className="text-center btn btn-info my-4 btn-lg btn-block"
                                onClick={() => this.addNewVideoBox(true)}>Add Random Box
                            </a>
                        </div>
                    </div>

                    {/* {this.state.children.length ===0 ? <h1>Click on Add Box</h1>:<React.Fragment></React.Fragment>} */}
                    <div className="row">
                        {!loading
                            ? this.state.children
                            : <p>getting data</p>}
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <a
                                className="text-center btn btn-dark my-4 btn-lg btn-block"
                                onClick={() => this.addNewVideoBox(false)}>Add Box
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a
                                className="text-center btn btn-info my-4 btn-lg btn-block"
                                onClick={() => this.addNewVideoBox(true)}>Add Random Box
                            </a>
                        </div>
                    </div>
                    <p className="text-center badge badge-pill badge-danger">Current Video Played: {vidNum}</p>
                </div>

            </div>
        )
    }
}

export default Main
