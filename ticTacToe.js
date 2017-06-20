const prompt = require('prompt');
var x00 = ' ', x01 = ' ', x11 = ' ', 
    x10 = ' ', x20 = ' ', x21 = ' ', 
    x02 = ' ', x12 = ' ', x22 = ' ';
var winner = null;

var renderBoard = function(move, player) {
  switch(move) {
    case 'a00':
      x00 = 'x';
      break;
    case 'a01':
      x01 = 'x';
      break;
    case 'a02':
      x02 = 'x';
      break
    case 'a10':
      x10 = 'x';
      break;
    case 'a11':
      x11 = 'x';
      break;
    case 'a12':
      x12 = 'x';
      break;
    case 'a20':
      x20 = 'x';
      break;
    case 'a21':
      x21 = 'x';
      break;
    case 'a22':
      x22 = 'x';
      break;
    case 'b00':
      x00 = 'o';
      break;
    case 'b01':
      x01 = 'o';
      break;
    case 'b02':
      x02 = 'o';
      break
    case 'b10':
      x10 = 'o';
      break;
    case 'b11':
      x11 = 'o';
      break;
    case 'b12':
      x12 = 'o';
      break;
    case 'b20':
      x20 = 'o';
      break;
    case 'b21':
      x21 = 'o';
      break;
    case 'b22':
      x22 = 'o';
      break;
    default:
      console.log('Invalid input');
  }
  
  console.log('');
  console.log(`+-----+-----+-----+`);
  console.log(`|  ${x00}  |  ${x01}  |  ${x02}  |`)
  console.log(`+-----+-----+-----+`);
  console.log(`|  ${x10}  |  ${x11}  |  ${x12}  |`)  
  console.log(`+-----+-----+-----+`);
  console.log(`|  ${x20}  |  ${x21}  |  ${x22}  |`)
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
        if(end >= 9) {
          console.log('GAME OVER!!!');
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