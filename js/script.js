const fadsTitle = document.querySelectorAll(".qustions__title-h4");
const answerItem = document.querySelectorAll(".qustions__answer");
const answerText = document.querySelectorAll(".qustions__answer-text");


fadsTitle.forEach(function(item) {
	item.addEventListener("click", function(){
		let openTitle = item;
		let itemId = openTitle.getAttribute("data-answer");
		let openItem = document.querySelector(itemId);
		let textId = openTitle.getAttribute("data-text");
		let openAnswer = document.querySelector(textId);

		if (!openTitle.classList.contains('title--active')){
			fadsTitle.forEach(function(item){
				item.classList.remove('title--active');
			});
		};
		if (!openItem.classList.contains('answer--active')){
			answerItem.forEach(function(item){
				item.classList.remove('answer--active');
			});
		};
		if (!openAnswer.classList.contains('text--active')){
			answerText.forEach(function(item){
				item.classList.remove('text--active');
			});
		};
			openTitle.classList.toggle('title--active');
			openItem.classList.toggle('answer--active');
			openAnswer.classList.toggle('text--active');
	});
});