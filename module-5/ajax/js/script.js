// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
		// Unobtrusive event binding
		document.querySelector("button")
			.addEventListener("click", function () {
				
				// Call server to get the name
				$ajaxUtils
				.sendGetRequest("data/name.json", 
					function (res) {
						// This is the callback function
						var message = res['firstName'] + ' ' + res['lastName'];

						if(res['likesChineseFood']) {
							message += ' likes Chinese food';
						}
						else {
							message += ' doesn\'t like Chinese food';
						}

						message += ' and uses ' + (res['numberOfDisplays']+1) + ' displays for coding.';

						// console.log(message);

						document.querySelector("#content")
							.innerHTML = "<h2>" + message + "!</h2>";
					});
			});
  	}
);





