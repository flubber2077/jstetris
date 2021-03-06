import Board from "./board.js";
import NavBar from "./NavBar.js";
import '../App.css';
import ReactDom from "react-dom"
import { Route, Switch, NavLink } from 'react-router-dom';

function App() {
    return (
        <div>
            <header>
                <h1>tetr.js</h1>
                <h2>by <a href="https://github.com/montgomerykate">K. Montgomery</a> and <a href="https://github.com/flubber2077">D. Jordan</a></h2>
                <NavBar />
            </header>

            <Switch>
                <Route path="/game">
                    <div className="tetris-parent" >
                        <Board />
                    </div>
                </Route>

                <Route path='/'>
                    <div className='start-button'>
                        <NavLink to ='/game'>
                            START
                        </NavLink>
                        <h4>Controls</h4>
                        <p>Left/Right: Move</p>
                        <p>Up: Rotate</p>
                        <p>Down: Advance</p>
                        <p>Complete rows in order to clear them, clear four rows at once for the most points</p>
                        <p>A block landing on the top row is Game Over</p>

                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default App;