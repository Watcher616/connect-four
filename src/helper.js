
const isWinner = (gameBoard, currenMove, currentPlayer) =>{
    const board = [...gameBoard];
    board[currenMove] = currentPlayer;
const winLines = [
    [0,1,2,3,1],
    [4,5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],

    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],

    [0,5,10,15],
    [3,6,9,12]
]
for(let i = 0; i < winLines.length; i++){
    const [a,b,c,d] = winLines[i];
    if(board[a] > 0 && 
        board[a] === board[b] && 
        board[b] === board[c] && 
        board[c] === board[d]){
        return true;
    }   
}
return false;
}

export default isWinner;