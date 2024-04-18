import React, { Component } from 'react';
import './App.css';

import WordResultList from './components/WordResultList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dictionaryObjects: [],
            wordSelected: null,
        };
    }

    componentDidMount() {
        fetch('http://localhost:1337/dictionary')
            .then(response => response.json())
            .then(data => {
                this.setState({ dictionaryObjects: data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    handleWordSelection = (word) => {
        // Handle word selection logic here
        console.log('Selected word:', word);
    }

    handleInputChange = (event) => {
        // Handle input change logic here
        const searchText = event.target.value;
        console.log('Search text:', searchText);
        // You can use this searchText to filter the dictionaryObjects and update the state accordingly
    }

    render() {
        return (
            <>
                <div className="app-body">
                    <div className="container-fluid app-content">

                        <div className="row">
                            <div className="col-12 col-md-3">
                                <div className="container search-bar mt-3">
                                    <h1>Hiligaynon Gid!</h1>
                                    <input className="form-control" type="search" placeholder="Search..." onChange={this.handleInputChange} />
                                </div>
                                <WordResultList dictionaryObjects={this.state.dictionaryObjects} onWordSelect={this.handleWordSelection} />
                            </div>

                            <div className="col-12 col-md-9 d-none d-md-block">
                                {this.state.wordSelected === null ? (
                                    <div className="container mt-5 welcome-message">
                                        <h1>Malipayong pag-abot sa aton sa aton diri! 📚</h1>
                                        <p>Diri, matag kibot sa pahina nagapakita og bag-ong kahayag sa bokabularyo, diin matag pulong usa ka yawi aron buksan ang kaalam ug paghangop. 🤔 Kon ikaw nagadungog sa kahulogan sa usa ka tinaga o nagasaysay sa mga kasayuran sa pinulongan, among diksyunaryo mao ang imong mapagtuo nga kauban. 📖</p>
                                        <p>Maglakbay kamo pinaagi sa kalibutan sa mga pulong, diin ang kuryusidad nagdumala ngadto sa pagdiskobre ug matag kahulogan usa ka puwang sa pagsab-og sa kahayag. 🌍 Gipahibalo namo kamo sa pag-eksplorar, pagkat-on, ug pagdayeg sa kasalapang sa pinulongan sulod niining mga pahina. 🌟</p>
                                        <p>Malipayong pag-abot sa atong santuwaryo sa pinulongan, diin ang mga pulong nagkinabuhi ug ang kuryusidad nahanap ang iyang panimalay. 🏡</p>
                                        <br />
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm-6 col-md-4 m-2">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Archives</h5>
                                                            <p className="card-text">Explore the historical records and documents.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-md-4 m-2">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Grammar</h5>
                                                            <p className="card-text">Learn about the rules and structure of language.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-md-4 m-2">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Literature</h5>
                                                            <p className="card-text">Discover the world of written and spoken artistic expression.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-md-4 m-2">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">History</h5>
                                                            <p className="card-text">Dive into the past and uncover the events that shaped our world.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-md-4 m-2">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">A.P.I</h5>
                                                            <p className="card-text">Dive into the past and uncover the events that shaped our world.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                ) : (
                                        /* <SelectedWord word={wordSelected} />*/
                                   <p>Have Selected Word</p>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default App;
