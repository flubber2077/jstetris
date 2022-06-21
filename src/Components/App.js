import Board from "./board.js";

function App() {
    return (
        <div>
            <header>
                <h1>tetr.js</h1>
                <p>by <a href="https://github.com/montgomerykate">K. Montgomery</a> and <a href="https://github.com/flubber2077">D. Jordan</a></p>
            </header>
            <div className="tetris-parent" >
                <Board />
            </div>
        </div>
    );
}

export default App;