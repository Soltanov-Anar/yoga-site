let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так..."
  };

  let Secondform = document.getElementById('form'),
  Secondinput = Secondform.getElementsByTagName('input'),
  SecondStatusMessage = document.createElement('div');

  SecondStatusMessage.classList.add('status');

  Secondform.addEventListener('submit', function(event) {
      event.preventDefault();
      Secondform.appendChild(SecondStatusMessage);

      let requestTwo = new XMLHttpRequest();

      requestTwo.open('POST', 'server.php');
      requestTwo.setRequestHeader('Content-type',
      'application/json; charset=utf-8');

      let DoubleformData = new FormData(form);

      let objTwo = {};
      DoubleformData.forEach(function(value, key){
          objTwo[key] = value;
      });
      let Doublejson = JSON.stringify(objTwo);

      requestTwo.send(Doublejson);

      requestTwo.addEventListener('readystatechange', function(){
          if(requestTwo.readyState < 4) {
              SecondStatusMessage.innerHTML = message.loading;
          } else if(requestTwo.readyState === 4 &&
              requestTwo.status == 200) {
                  SecondStatusMessage.innerHTML = message.success;
              } else {
                  SecondStatusMessage.innerHTML = message.failure;    
              }
      });

      for(let i =0; i < Secondinput.length; i++) {
          input[i].value = '';
      }
  });