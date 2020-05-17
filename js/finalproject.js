	//fixed header
	window.onscroll=function(){
		const docScrollTop=document.documentElement.scrollTop;

		if(window.innerWidth>991){
			if(docScrollTop>100){
				document.querySelector("header").classList.add("fixed")
			}
			else{
				document.querySelector("header").classList.remove("fixed")
			}
		}
	}


	//scroll top button
	const btnScrollToTop = document.querySelector("#btnScrollToTop");

	btnScrollToTop.addEventListener("click", function () {

		window.scrollTo(0, 0);
	});

	//active header
	const navbar = document.querySelector(".navbar");
	a = navbar.querySelectorAll("a");

	a.forEach(function(element){
		element.addEventListener("click",function(){
			for(let i=0; i<a.length; i++){
				a[i].classList.remove("active");
			}
			this.classList.add("active")
		})
	})

	function myFunction() {
		alert("To be updated...")
	}