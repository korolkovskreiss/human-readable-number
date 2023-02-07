module.exports = function toReadable (number) {
    const numbersDec = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const numbersTeen = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  const numbersTy = ['twenty','thirty','forty','fifty',
'sixty','seventy','eighty','ninety'];
  let result = []
	const numberStr = number.toString()
  if (numberStr <= 9 ) {
  	numbersDec.forEach((val, id) => {
    	if (id === number){
      	result = val;
      }
    })
  }
  else if (a){}
  return result;
}
