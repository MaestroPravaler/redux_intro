import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <h1>INTRODUÇÃO AO REDUX</h1>
            <div className="row">
                <Card title="Card1" red>
                    x
                </Card>
                <Card title="Card2" green>
                    y
                </Card>
            </div>
            <div className="row">
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
