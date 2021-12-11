$(document).ready(function () {
    const cells= $('.cell');
    let turn = 'X'
    const X= 'X'
    const O= 'O'
    const player= $('#player')
    const reStart =$('#reStart')
    const winnerSpan =$('#winner')
    const turnSpan= $('#turn')
    const parWinner =$('#parWinner')
    const parTurn= $('#parTurn')
    
    
    cells.click(cellClicked)
    parWinner.hide()
    
    
    function cellClicked (){
      
    
       
    if($(this).text()=== '' ) {
        if(turn === X){
            $(this).text('X').css('color', 'transparent').prepend('<img src="images/x1.png" height="50%" width="60%";>')
            
            turnSpan.text('O')
            checkWinner(X)
            turn=O 
            } else {
             $(this).text('O').css('color', 'transparent').prepend('<img src="images/o1.png" height="60%" width="60%";>')
            
             turnSpan.text('X')
            checkWinner(O)
            turn=X
            }
    }
    else {
        $(this).css('background-color', 'red')
        setTimeout(() => {
            $(this).css('background-color', 'transparent') 
        }, 1000);
    }   
    }
    
    
    function checkWinner(currentPlayer){
        // check Hor
    if (
          $(cells[0]).text() ===  $(cells[1]).text() &&
          $(cells[1]).text() ===  $(cells[2]).text() &&
          $(cells[0]).text() !== ''
        
        ) {
            console.log('winner')
            playerWin(currentPlayer)
        } 
           else  if (
            $(cells[3]).text() ===  $(cells[4]).text() &&
            $(cells[4]).text() ===  $(cells[5]).text() &&
            $(cells[3]).text() !== ''
            
            ) {
                console.log('winner')
                playerWin(currentPlayer)
            } 
    
            else  if (
             $(cells[6]).text() ===  $(cells[7]).text() &&
             $(cells[7]).text() ===  $(cells[8]).text() &&
             $(cells[6]).text() !== ''
                
            ) {
             console.log('winner')
             playerWin(currentPlayer)
             } 
        
            // vertical
            else  if (
             $(cells[0]).text() ===  $(cells[3]).text() &&
            $(cells[3]).text() ===  $(cells[6]).text() &&
            $(cells[0]).text() !== ''
                
            ) {
            console.log('winner')
            playerWin(currentPlayer)
                } 
        
             else  if (
             $(cells[1]).text() ===  $(cells[4]).text() &&
             $(cells[4]).text() ===  $(cells[7]).text() &&
             $(cells[1]).text() !== ''
                    
             ) {
             console.log('winner')
             playerWin(currentPlayer)
             } 
             else  if (
             $(cells[2]).text() ===  $(cells[5]).text() &&
             $(cells[5]).text() ===  $(cells[8]).text() &&
             $(cells[2]).text() !== ''
                   
             ) {
             console.log('winner')
             playerWin(currentPlayer)
             } 
               // Daiagnol
            else  if (
             $(cells[0]).text() ===  $(cells[4]).text() &&
            $(cells[4]).text() ===  $(cells[8]).text() &&
            $(cells[0]).text() !== ''
                
            ) {
            console.log('winner')
            playerWin(currentPlayer)
                } 
        
             else  if (
             $(cells[2]).text() ===  $(cells[4]).text() &&
             $(cells[4]).text() ===  $(cells[6]).text() &&
             $(cells[2]).text() !== ''      
             ) {
             console.log('winner')
             playerWin(currentPlayer)
             } 
    } 
    
    
    
    function playerWin(thewinner){
        winnerSpan.text(thewinner)
        parWinner.show()
         parTurn.hide()
         setTimeout(() => {
            restartTheGame()
         }, 3000);
    }
    
    
    
    reStart.click(restartTheGame)
    
    function restartTheGame(){
        location.reload()
       }
       
    
    })
    