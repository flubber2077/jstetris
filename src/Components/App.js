import Board from "./board.js";
import '../App.css';
import ReactDom from "react-dom"
import { Route, Switch, NavLink } from 'react-router-dom';

function App() {
    return (
        <div>
            <header>
                <h1>tetr.js</h1>
                <p>by <a href="https://github.com/montgomerykate">K. Montgomery</a> and <a href="https://github.com/flubber2077">D. Jordan</a></p>
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
                            start
                        </NavLink>
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default App;