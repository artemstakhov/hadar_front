$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__link').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').removeClass('lock');
    })
});

var modal = document.getElementById('connect_modal');

// Get the button that opens the modal
var btn = document.getElementById("connect_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function openModal() {
    modal.style.display = "block";
    $('body').addClass('lock');
    setTimeout(() => {
        $('.modal_content').addClass('_animate');
    }, 100);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function hideModal () {
    setTimeout(() => {
        modal.style.display = "none";
    }, 200);
    $('body').removeClass('lock');
    $('.modal_content').removeClass('_animate');
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        setTimeout(() => {
            modal.style.display = "none";
        }, 200);
        $('body').removeClass('lock');
        $('.modal_content').removeClass('_animate');
    }
}
////
var conName = document.querySelector('#connect_name');
var conTelegram = document.querySelector('#connect_telegram');
var conPhone = document.querySelector('#connect_phone');
var conBtn = document.querySelector('#connect_submit');
var conQuestion = document.querySelector('#connect_question');
var conForm2 = document.getElementById('con_form2');

conForm2.addEventListener('submit',(event) =>{
    createQuestion();
    // event.preventDefault();
    // document.querySelectorAll('#project_phone, #project_telegram, #project_name').forEach(el=>el.value = '');
    setTimeout(()=>{
        window.location.href='#connect_block';document.querySelectorAll('#connect_name, #connect_telegram, #connect_phone, #connect_question').forEach(el=>el.value = '');
    },500);
    setTimeout(() => {
        modal.style.display = "none";
    }, 400);
    setTimeout(() => {
        $('body').removeClass('lock');
        $('.modal_content').removeClass('_animate');
    }, 100);

});
async function createQuestion (event) {
    let type="question";
    const questionObj = {
        type: type,
        telegram: conTelegram.value,
        phoneNumber: conPhone.value,
        name: conName.value,
        question: conQuestion.value,
    };
    fetch("http://www.homehadar.com:4444/home", {
    method: 'POST',
    body: JSON.stringify(questionObj),
    headers: {
        'Content-Type': 'application/json'
    },
    }).then((res) =>(res.json())
    ).then((res) => {
        if (res.status === 200) {
            console.log("Post successfully created!")
        }
    })
};
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
            
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_animate');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_animate');
				}
			}
            
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}