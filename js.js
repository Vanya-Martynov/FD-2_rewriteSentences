(function () {
	


	function generateSentense (){
		let test = [];
		for(let i = 0; i < arguments.length; i++){
			test[i] = arguments[i];
		}
		let arrayOfString = test.pop().split(' ');
		

		
			if (test.length > arrayOfString.length){
				for(let i = 0; i < arrayOfString.length; i++){
				let time = setTimeout(function(){console.log(arrayOfString[i]);}, (test[i]*1000));
				}
			}else if (test.length < arrayOfString.length){
					 
					for(let k = 0; k < test.length; k++){
					let index = setTimeout(function(){console.log(arrayOfString[k]);}, (test[k]*1000));
					}
				
		 		
					for(let i = test.length; i < arrayOfString.length; i++){
					let ind = setTimeout(function(){console.log(arrayOfString[i]);}, (test[test.length - 1]*1000));
					}
			}

	}


	generateSentense(4,1,2,8, 'Привет мой друг сегодня круто')







}());