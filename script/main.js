// Get the modal
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
var subsTelegram = document.querySelector('#subs_input');
var subsBtn = document.querySelector('#subs_btn');
var projectName = document.querySelector('#project_name');
var projectTelegram = document.querySelector('#project_telegram');
var projectPhone = document.querySelector('#project_phone');
var projectBtn = document.querySelector('project_btn');
var subsForm = document.getElementById('subs_form');
var projectForm = document.getElementById('project_form');
var conForm = document.getElementById('con_form');

 subsForm.addEventListener('submit',() => {
    createSubs();
    setTimeout(()=>{
        window.location.href='#subs_block';document.querySelectorAll('#subs_input').forEach(el=>el.value = '');
    },100);
 });


projectForm.addEventListener('submit',(event) =>{
    createProject();
    // event.preventDefault();
    // document.querySelectorAll('#project_phone, #project_telegram, #project_name').forEach(el=>el.value = '');
    setTimeout(()=>{
        window.location.href='#project_form';document.querySelectorAll('#project_phone, #project_telegram, #project_name').forEach(el=>el.value = '');
    },100);
});

conForm.addEventListener('submit',(event) =>{
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

        // event.preventDefault();
    // var conNameV = document.querySelector('#connect_name').value;
    // var conTelegramV = document.querySelector('#connect_telegram').value;
    // var conPhoneV = document.querySelector('#connect_phone').value;
    // var conQuestionV = document.querySelector('#connect_question').value;
    // document.querySelectorAll('#connect_name, #connect_telegram, #connect_phone, #connect_question').forEach(el=>el.value = '');
    // if(conNameV.length>1 && conTelegramV.length>1 && conQuestionV.length>1){

    // }

function modalhide(){
    setTimeout(() => {
        modal.style.display = "none";
    }, 200);
    $('body').removeClass('lock');
    $('.modal_content').removeClass('_animate');
}

async function createSubs(event) {
    let type = "subscribe";
    const sub ={
        type: type,
        telegram: subsTelegram.value,
    };
    fetch("http://www.homehadar.com:4444/home",{
        method: 'POST',
        body: JSON.stringify(sub),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => (res.json())
    )
};

async function createProject (event) {
    let projectRadio = document.querySelector('input[name="status"]:checked').value;
    let type = "project";
    const project = {
        type: type,
        telegram: projectTelegram.value,
        name: projectName.value,
        phoneNumber: projectPhone.value,
        projectStatus: projectRadio,
    };
    fetch("http://www.homehadar.com:4444/home", {
    method: 'POST',
    body: JSON.stringify(project),
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


// let input = document.querySelector('.input_phone');
// let caretPos = 5;
// input.addEventListener('focus',()=>{
//   setTimeout(()=>{
//     if( input.selectionStart < caretPos ){
//       input.setSelectionRange( caretPos, caretPos );
//     }
//   },0);
// });
// //
////

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
// var element = document.querySelector('.numbers_item_wrap');
// var isResizeble = false;

// var Visible = function (target) {
//   // Все позиции элемента
//   var targetPosition = {
//       top: window.pageYOffset + target.getBoundingClientRect().top,
//       left: window.pageXOffset + target.getBoundingClientRect().left,
//       right: window.pageXOffset + target.getBoundingClientRect().right,
//       bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//     },
//     // Получаем позиции окна
//     windowPosition = {
//       top: window.pageYOffset,
//       left: window.pageXOffset,
//       right: window.pageXOffset + document.documentElement.clientWidth,
//       bottom: window.pageYOffset + document.documentElement.clientHeight
//     };

//   if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//     targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//     targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//     targetPosition.left < windowPosition.right && isResizeble==false) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//     // Если элемент полностью видно, то запускаем следующий код
//     const time = 2000; // ms
//     const step = 3125; 
//         console.log(isResizeble);
//     function outNum(num, elem) {
//         let l = document.querySelector('#num1');
//         n = 0;
//         let t = Math.round(time/(num/step));
//         let interval = setInterval(() => {
//             n = n + step;
//             isResizeble=true;
//             if (n >= num) {
//                 clearInterval(interval);
//                 n===num-step;
//             }
//             l.innerHTML = n-step;
//         },
//             t);
//     }
//     const time2 = 2000; // ms
//     const step2 = 841; 

//     function outNum2(num2, elem) {
//         let l2= document.querySelector('#num2');
//         n2 = 0;
//         let t2 = Math.round(time2/(num2/step2));
//         let interval2 = setInterval(() => {
//             n2 = n2 + step2;
//             if (n2 >= num2) {
//                 clearInterval(interval2);
//                 n===num2-step2;
//             }
//             l2.innerHTML = n2-step2;
//         },
//             t2);
//     }
//     const time3 = 2000; // ms
//     const step3 = 16; 
//     function outNum3(num3, elem3) {
//         let l3 = document.querySelector('#num3');
//         n3 = 0;
//         let t3 = Math.round(time3/(num3/step3));
//         let interval3 = setInterval(() => {
//             n3 = n3 + step3;
//             if (n3 >= num3) {
//                 clearInterval(interval3);
//                 n===num3-step3;
//             }
//             l3.innerHTML = n3+1.8 -step3;
//         },
//             t3);
//     }
//     const time4 = 2000; // ms
//     const step4 = 1; 
//     function outNum4(num4, elem) {
//         let l4 = document.querySelector('#num4');
//         n4 = 0;
//         let t4 = Math.round(time4/(num4/step4));
//         let interval4 = setInterval(() => {
//             n4 = n4 + step4;
//             if (n4 >= num4) {
//                 clearInterval(interval4);
//                 n===num4-step4;
//             }
//             l4.innerHTML = n4-step4;
//         },
//             t4);
//     }

//     var el = document.getElementById('num1');
//     var el2 = document.getElementById('num2');
//     var el3 = document.getElementById('num3');
//     var el4 = document.getElementById('num4');

//     outNum(100000, 'num1');
//     setTimeout(() => {
//         el.textContent = "100.000";
//     }, 2200);
//     outNum2(47937, 'num2');
//     setTimeout(() => {
//         el2.textContent = "47.937";
//     }, 2200);
//     outNum3(352, 'num3');
//     setTimeout(() => {
//         el3.textContent = "353.8";
//     }, 2200);
//     outNum4(57, 'num4');
//     setTimeout(() => {
//         el4.textContent = "57";
//     }, 2200);

//   }
  
// };

// // Запускаем функцию при прокрутке страницы
// window.addEventListener('scroll', function() {
//   Visible (element);
// });

// // А также запустим функцию сразу. А то вдруг, элемент изначально видно
// Visible (element);
    
   
/////
// var time = 5,
//   cc = 1;
// $(window).scroll(function() {
//   $('.numbers_item_wrap').each(function() {
//     var
//       cPos = $(this).offset().top,
//       topWindow = $(window).scrollTop();
//     if (cPos < topWindow + 200) {
//       if (cc < 2) {
//         $(".number").addClass("viz");
//         $('div').each(function() {
//           var
//             i = 1,
//             num = $(this).data('num'),
//             step = (1*num) * (time / num),
//             that = $(this),
//             int = setInterval(function() {
//               if (i <= num) {
//                 that.html(i);
//               } else {
//                 cc = cc + 2;
//                 clearInterval(int);
//               }
//               i++;
//             }, step);
//         });
//       }
//     }
//   });
// });


// setTimeout(() => {
//     el4.textContent = "57";
// }, 2200);





