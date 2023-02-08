module.exports = function toReadable (number) {
    const numbersDec = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const numbersTeen = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  const numbersTy = ['','','twenty','thirty','forty','fifty',
'sixty','seventy','eighty','ninety'];
  let result = ""
	const numberStr = number.toString()
  if (number <= 9) {
  	numbersDec.forEach((val, id) => {
    	if (id === number){
      	result = val;
      }
    })
  }
  else if (number <= 19){
  	numbersTeen.forEach((val, id) => {
    	if (id + 10 === number){
      	result = val;
      }
    })
  }
  else if (number <= 99) {
  	if ( Number(numberStr[1]) === 0 ) {
  		numbersTy.forEach((val, id) => {
    		if (id * 10 === number){
          result = val;
        }
    	})
  	}
  	else { 
    	numbersTy.forEach((val, id) => {
    		if (id  === Number(numberStr[0])){
          result = val + ' ';
        }
    	})
      numbersDec.forEach((val, id) => {
    		if (id === Number(numberStr[1])){
          result += val;
        }
      })
    }
	}
  else {
    	numbersDec.forEach((val, id) => {
    		if ( id === Number(numberStr[0])) {
      		result = val +" hundred";}})
          
      if ( Number(numberStr[1]) === 0 && Number(numberStr[2]) <= 9 && Number(numberStr[2]) !== 0){
         numbersDec.forEach((val, id) => {
            if (id === Number(numberStr[2])){
              result += " " + val;
     		 	}
  		  })
       }
    	else if ( Number(numberStr[1]) !== 0 && Number(numberStr[1]) * 10 + Number(numberStr[2]) <= 19 ) {
      		numbersTeen.forEach((val, id) => {
            if (id + 10 === Number(numberStr[1]) * 10 + Number(numberStr[2])){
              result += " " + val;
     		 	}
    		})
      }
      else if( Number(numberStr[1]) !== 0 && Number(numberStr[1]) * 10 + Number(numberStr[2]) > 19){
          numbersTy.forEach((val, id) => {
                  if (id === Number(numberStr[1])){
                    result += " " + val;
          }
       })
       		if (Number(numberStr[2]) > 0){
       			numbersDec.forEach((val, id) => {
            if (id === Number(numberStr[2])){
              result += " " + val;
            }
          })
       }
    }
  }
  return result;
}
