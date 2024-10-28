import { useState } from "react";

export default function LudoBoard() {
    
    const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    
    const updateMove = (color) => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            [color]: prevMoves[color] + 1
        }));
    };

    return (
        <div>
            <p>Game Begins!</p>
            
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={() => updateMove("blue")}>+1</button>
                
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow" }} onClick={() => updateMove("yellow")}>+1</button>
                
                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={() => updateMove("green")}>+1</button>
                
                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={() => updateMove("red")}>+1</button>
            </div>
        </div>
    );
}
