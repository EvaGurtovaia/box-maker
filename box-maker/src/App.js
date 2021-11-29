import "./App.css";
import Box from "./Box";

function App() {
    return (
        <div className="App">
            <Box height={10} width={10} color="blue" />
            <Box height={20} width={30} color="grey" />
        </div>
    );
}

export default App;
