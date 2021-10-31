import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Intervalo from "./components/Intervalo";

function App() {
    return (
        <div className="App">
            <h1>INTRODUÇÃO AO REDUX</h1>
            <div className="row">
                <Intervalo></Intervalo>
            </div>
            <div className="row">
                <Card title="Card2" green>
                    y
                </Card>
                <Card title="Card3" blue>
                    x
                </Card>
                <Card title="Card4" purple>
                    y
                </Card>
            </div>
        </div>
    );
}

export default App;
