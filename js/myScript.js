	var sChoice=0;
  	function alertMessage(dropdown) {
        sChoice=dropdown.value;
	    if(dropdown.value == "17.50") {
  		    alert("16oz burger is not healthy for you!");
  	    }
    }

	function calcular(){
	    alert("10% Discount on burger");
	}

	function checkcheese() {
        var yes = document.getElementById("yesExtracheese");  
	    if (yes.checked == true){  
		    alert("10% Discount" );
  	    }
	}


	function calc1() {
        let num = document.querySelector('#qty');
		var qty;
		// Handle number changes
		var yes = document.getElementById("yesExtracheese");  
		qty = parseInt(num.value);
		var burger = parseFloat(sChoice);		
		    if (yes.checked == true){  
		        alert((qty * burger) * 0.9);
  		    }
		    else{
		        alert((qty * burger));
		    }
		}
	
     