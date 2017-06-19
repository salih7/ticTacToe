const prompt = require('prompt');
var a00 = ' ', a01 = ' ', a11 = ' ', 
    a10 = ' ', a20 = ' ', a21 = ' ', 
    a02 = ' ', a12 = ' ', a22 = ' ';
var b00 = ' ', b01 = ' ', b11 = ' ', 
    b10 = ' ', b20 = ' ', b21 = ' ', 
    b02 = ' ', b12 = ' ', b22 = ' ';
var winner = null;

var renderBoard = function(move, player) {
  switch(move) {
    case 'a00':
      a00 = 'x';
      break;
    case 'a01':
      a01 = 'x';
      break;
    case 'a11':
      a11 = 'x';
      break
    case 'a10':
      a10 = 'x';
      break;
    case 'a20':
      a20 = 'x';
      break;
    case 'a21':
      a21 = 'x';
      break;
    case 'a22':
      a22 = 'x';
      break;
    case 'a02':
      a02 = 'x';
      break;
    case 'a12':
      a12 = 'x';
      break;
    case 'b00':
      b00 = 'x';
      break;
    case 'b01':
      b01 = 'x';
      break;
    case 'b11':
      b11 = 'x';
      break
    case 'b10':
      b10 = 'x';
      break;
    case 'b20':
      b20 = 'x';
      break;
    case 'b21':
      b21 = 'x';
      break;
    case 'b22':
      b22 = 'x';
      break;
    case 'b02':
      b02 = 'x';
      break;
    case 'b12':
      b12 = 'x';
      break;
    default:
      console.log('Invalid input');
  }
  console.log('');
  console.log(`+-----+-----+-----+`);
  console.log(`|  ${a00 || b00}  |  ${a01}  |  ${a02}  |`)
  console.log(`+-----+-----+-----+`);
  console.log(`|  ${a01}  |  ${a11}  |  ${a12}  |`)  
  console.log(`+-----+-----+-----+`);
  console.log(`|  ${a02}  |  ${a21}  |  ${a22}  |`)
  console.log(`+-----+-----+-----+`);
  console.log('');
}

var ticTacToe = function(end) {
  prompt.start();

  //while(winner === null) {
    prompt.get('move', (err, result) => {
      if(err) {
        console.log(err);
      } else {
        if(end >= 10) {
          console.log('game over');
          process.end();
        }
        renderBoard(result.move);
        console.log(end);
        ticTacToe(end + 1);
      }
    });
    
  //}
}

ticTacToe(1);