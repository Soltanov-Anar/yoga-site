 window.addEventListener('DOMContentLoaded', function() {

  'use strict';
  let Readinfo = prompt("Введите класс блока списка", ".info-header"),
      Readtab = prompt("Введите класс списка", "info-header-tab"),
      ReadtabContent = prompt("Введите класс контента", ".info-tabcontent"),
      info = document.querySelector(Readinfo),
      tab = document.getElementsByClassName(Readtab),
      tabContent = document.querySelectorAll(ReadtabContent);

      console.log(info);
      console.log(tab);
      console.log(tabContent);

 
      function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
          tabContent[i].classList.remove('show');
          tabContent[i].classList.add('hide');
        }
      }

      hideTabContent(1);

      function showTabContent(b) {
          if (tabContent[b].classList.contains('hide')) {
              tabContent[b].classList.remove('hide');
              tabContent[b].classList.add('show');
          }
      }

  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains(Readtab)) {
        for(let i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    });

    // timer

    let deadLine = '2020-06-24';


    function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse( new Date() ),
          seconds = Math.floor( (t/1000) %  60),
          minutes = Math.floor( ( t/1000/60) % 60),
          hours = Math.floor((t/1000/3600) % 24)-3;
        /*   hours = Math.floor((t/1000/60/60) % 24), */
        /*  days = Math.floor((t/1000*60*60*24)); */
      
        return {
          'total' : t,
          'hours' : hours,
          'minutes' : minutes,
          'seconds' : seconds,
        };
      }
        function setClock(id, endtime) {
          let timer = document.getElementById(id),
              hours = timer.querySelector('.hours'),
              minutes = timer.querySelector('.minutes'),
              seconds = timer.querySelector('.seconds'),
              timeInterval = setInterval(updateClock, 1000);

          
        function updateClock() {
          let t = getTimeRemaining(endtime);

              function addZero(num) {
                if(num <= 9) {
                    return '0' + num;
                } else return num;
              };

              hours.textContent = addZero(t.hours);
              minutes.textContent = addZero(t.minutes); 
              seconds.textContent = addZero(t.seconds);  

              if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
              }
        }

    }

        setClock('timer', deadLine);

      // Modal

      let more = document.querySelector('.more'),
          overlay = document.querySelector('.overlay'),
          close = document.querySelector('.popup-close'),
          descriptionBtn = document.querySelectorAll('.description-btn');


      more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
      });

      close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
      });

      descriptionBtn.forEach(function (i) {
            i.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('description-btn-splash');
            document.body.style.overflow = 'hidden';
      })});

      close.addEventListener('click', function() {
        overlay.style.display = 'none';
        descriptionBtn.classList.remove('description-btn-splash');
        document.body.style.overflow = '';
      });

      // form

      let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
      };

      let form = document.getElementsByClassName('main-form')[0],
          formBottom = document.getElementById('form'),
          input = document.getElementsByTagName('input'),
          statusMessage = document.createElement('div');

          statusMessage.classList.add('status');

          console.log(form);
          console.log(formBottom);
          console.log(input);
          console.log(statusMessage);

      function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
          e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {
        
            return new Promise(function(resolve, reject) {
              let request = new XMLHttpRequest();

              request.open('POST', 'server.php');

              request.setRequestHeader('Content-Type',
              'application/x-www-form-urlencoded');

              request.onreadystatechange = function() {
                if (request.readyState < 4) {
                  resolve();
                } else if (request.readyState === 4 &&
                           request.status == 200) { 
                         resolve();
                    } else {
                        reject();
                      }
                  }
            request.send(data);
        })
      } // End postData

      function clearInput() {
        for (let i = 0; i < input.lenght; i++ ) {
          input[i].value = '';
        }
      }

      postData(formData)
          .then(()=> statusMessage.innerHTML = message.loading)
          .then(()=> statusMessage.innerHTML = message.success)
          // .then(()=> {
          //       thanksModal.style.display = 'block';
          //       mainModal.style.display = 'none';
          //       statusMessage.innerHTML = '';
          // })
          .catch(() => statusMessage.innerHTML = message.failure)
          .then(clearInput)
          
        });         
      }
        sendForm(form);
        sendForm(formBottom);

      
        //Slider

      let slideIndex = 1,
          slides = document.querySelectorAll('.slider-item'),
          prev = document.querySelector('.prev'),
          next = document.querySelector('.next'),
          dotsWrap = document.querySelector('.slider-dots'),
          dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);
      
      function showSlides(n) {

          if (n > slides.length) {
              slideIndex = 1;
          }

          if (n < 1) {
            slideIndex = slides.length;
          }

          slides.forEach((item) => item.style.display = 'none');
          // for (let i = 0; i < slides.length; i++) {
          //   slides[i].style.display = 'none';
          // }

          dots.forEach((item) => item.classList.remove('dot-active'));
          
          slides[slideIndex - 1].style.display = 'block';
          dots[slideIndex - 1].classList.add('dot-active'); 
      }

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      prev.addEventListener('click', function() {
         plusSlides(-1);
      });

      next.addEventListener('click', function() {
        plusSlides(1);
      });

      dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
          if(event.target.classList.contains('dot')
          && event.target == dots[i-1]) {
            currentSlide(i);
          }  
      }
  });

  // Calc
    
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
          personsSum = +this.value;
          total = (daysSum + personsSum) * 4000;

          if(persons.value == ''
            || restDays.value == '') {
              totalValue.innerHTML = 0;
          } else {
            totalValue.innerHTML = total;
          }
        });

        restDays.addEventListener('change', function() {
          daysSum = +this.value;
          total = (daysSum + personsSum) * 4000;

          if(restDays.value == ''
            || persons.value == '' ) {
              totalValue.innerHTML = 0;
          } else {
            totalValue.innerHTML = total;
          }
        });

        place.addEventListener('change', function() {

          if(restDays.value == ''
            || persons.value == '' ) {
              totalValue.innerHTML = 0;
            } else {
              let a = total;
              totalValue.innerHTML = a * this.options[this.selectedIndex].value;
             }
        });


 });