import App from './App';

const app = async () => {
  document.getElementById('app').appendChild(await App());

  $(document).ready(function(){

//START ADD CLEAR LOCALSTORAGE BUTTON TO DOM
    let input = $(`
      <div class="form-group">
        <button type="submit" id="delete-localstorage" class="btn btn-primary">clear localStorage</button>
      </div>
      `);

    $('#formID').append(input);
//END ADD CLEAR LOCALSTORAGE BUTTON TO DOM

//START CHECK PASSWORD AND CLEAR LOCALSTORAGE ANND REMOVE MISSING ITEMS FROM LIST
    $('#delete-localstorage').click(function() {
      var testV = 1;
      var pass1 = prompt('Please Enter Your Password',' ');
      while (testV < 3) {
      if (!pass1)
      history.go(-1);
      if (pass1.toLowerCase() == "letmein") {
      alert('You Got it Right!');
      document.querySelector('#summary').innerHTML = ''
      localStorage.clear()
      break;
      }
      testV+=1;
      var pass1 =
      prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
      }
      if (pass1.toLowerCase()!="password" & testV ==3)
      history.go(-1);
      return " ";
    });
//END CHECK PASSWORD AND CLEAR LOCALSTORAGE ANND REMOVE MISSING ITEMS FROM LIST

//START ADD OCCUPIED LANDRY TO LOCALSTORAGE
    function addLaundryOccupiedToLocalStorage(checkboxName, wrapperName, localStorageKey, localStorageValue) {
      $(checkboxName).click(function() {
        if (this.checked) {
            $(wrapperName).hide();
            //openedDivs= openedDivs.filter(function(value) { return value !== "header-div" });
            localStorage.setItem(localStorageKey, localStorageValue);
        }
        else {
            $(wrapperName).show();
            localStorage.removeItem(localStorageKey);
        }
        });
    }

    addLaundryOccupiedToLocalStorage('#tornfalksgrand2_booked', '#tornfalksgrand2_wrapper', 'tornfalk2', 'tornfalksgrand2_occupied');
    addLaundryOccupiedToLocalStorage('#tornfalksgrand12_booked', '#tornfalksgrand12_wrapper', 'tornfalk12', 'tornfalksgrand12_occupied');
    addLaundryOccupiedToLocalStorage('#tornfalksgrand16_booked', '#tornfalksgrand16_wrapper', 'tornfalk16', 'tornfalksgrand16_occupied');
    addLaundryOccupiedToLocalStorage('#tornfalksgrand7_booked', '#tornfalksgrand7_wrapper', 'tornfalk7', 'tornfalksgrand7_occupied');
    addLaundryOccupiedToLocalStorage('#tornfalksgrand5_booked', '#tornfalksgrand5_wrapper', 'tornfalk5', 'tornfalksgrand5_occupied');
    addLaundryOccupiedToLocalStorage('#stenfalksgrand1_booked', '#stenfalksgrand1_wrapper', 'stenfalk1', 'stenfalksgrand1_occupied');
    addLaundryOccupiedToLocalStorage('#stenfalksgrand2_booked', '#stenfalksgrand2_wrapper', 'stenfalk2', 'stenfalksgrand2_occupied');
    addLaundryOccupiedToLocalStorage('#stenfalksgrand10_booked', '#stenfalksgrand10_wrapper', 'stenfalk10', 'stenfalksgrand10_occupied');
    addLaundryOccupiedToLocalStorage('#stenfalksgrand14_booked', '#stenfalksgrand14_wrapper', 'stenfalk14', 'stenfalksgrand14_occupied');
    addLaundryOccupiedToLocalStorage('#stenfalksgrand18_booked', '#stenfalksgrand18_wrapper', 'stenfalk18', 'stenfalksgrand18_occupied');
    //END ADD OCCUPIED LANDRY TO LOCALSTORAGE

    // $("#tornfalksgrand2_booked").click(function() {
    // if (this.checked) {
    //     $("#tornfalksgrand2_wrapper").hide();
    //     //openedDivs= openedDivs.filter(function(value) { return value !== "header-div" });
    //     localStorage.setItem("tornfalk2", "occupied");
    // }
    // else {
    //     $("#tornfalksgrand2_wrapper").show();
    //     localStorage.removeItem('tornfalk2');
    // }
    // });

    // function getValueFromLocalStorageAndUpdateDOMWhenReload(localStorageValue, wrapperName, checkboxName){
    //   Object.keys(localStorage).forEach((key) => {
    //     console.log(localStorage.getItem(key));
    //     if (localStorage && localStorage.getItem(key) === localStorageValue) {
    //       $(wrapperName).hide();
    //       $(checkboxName).prop('checked', true);
    //       // let element = document.getElementById('tornfalksgrand2_booked');
    //       // element.checked = true;
    //     } else {
    //       $(wrapperName).show();
    //       $(checkboxName).prop('checked', false);
    //     }
    //   });
    // }

//START RETRIEVE OCCUPIED LANDRY FROM LOCALSTORAGE CHECK CHECKBOX AND HIDE WRAPPER
    Object.keys(localStorage).forEach((key) => {
      console.log(localStorage.getItem(key));
      if (localStorage.getItem(key) === 'tornfalksgrand2_occupied') {
        $('#tornfalksgrand2_wrapper').hide();
        $('#tornfalksgrand2_booked').prop('checked', true);
      }
      if(localStorage.getItem(key) === 'tornfalksgrand12_occupied') {
        $('#tornfalksgrand12_wrapper').hide();
        $('#tornfalksgrand12_booked').prop('checked', true);
      }
      if(localStorage.getItem(key) === 'tornfalksgrand16_occupied') {
        $('#tornfalksgrand16_wrapper').hide();
        $('#tornfalksgrand16_booked').prop('checked', true);
      }
      if(localStorage.getItem(key) === 'tornfalksgrand7_occupied') {
        $('#tornfalksgrand7_wrapper').hide();
        $('#tornfalksgrand7_booked').prop('checked', true);
      }
      if(localStorage.getItem(key) === 'tornfalksgrand5_occupied') {
        $('#tornfalksgrand5_wrapper').hide();
        $('#tornfalksgrand5_booked').prop('checked', true);
      }
      if(localStorage.getItem(key) === 'stenfalksgrand1_occupied') {
        $('#stenfalksgrand1_wrapper').hide();
        $('#stenfalksgrand1_booked').prop('checked', true);
      }
      if(localStorage.getItem(key) === 'stenfalksgrand2_occupied') {
        $('#stenfalksgrand2_wrapper').hide();
        $('#stenfalksgrand2_booked').prop('checked', true);
      }
      if(localStorage.getItem(key) === 'stenfalksgrand10_occupied') {
        $('#stenfalksgrand10_wrapper').hide();
        $('#stenfalksgrand10_booked').prop('checked', true);
      }
      if(localStorage.getItem(key) === 'stenfalksgrand14_occupied') {
        $('#stenfalksgrand14_wrapper').hide();
        $('#stenfalksgrand14_booked').prop('checked', true);
      }
      if(localStorage.getItem(key) === 'stenfalksgrand18_occupied') {
        $('#stenfalksgrand18_wrapper').hide();
        $('#stenfalksgrand18_booked').prop('checked', true);
      }
    });
//END RETRIEVE OCCUPIED LANDRY FROM LOCALSTORAGE CHECK CHECKBOX AND HIDE WRAPPER
    // Object.keys(localStorage).forEach((key) => {
    //   if (localStorage.getItem(key) === 'tornfalksgrand12_occupied') {
    //     $('#tornfalksgrand12_wrapper').hide();
    //     $('#tornfalksgrand12_booked').prop('checked', true);
    //   } else {
    //     $('#tornfalksgrand12_wrapper').show();
    //     $('#tornfalksgrand12_booked').prop('checked', false);
    //   }
    // });

    // Object.keys(localStorage).forEach((key) => {
    //   console.log(localStorage.getItem(key));
    //   if (localStorage && localStorage.getItem(key) === 'tornfalksgrand16_occupied') {
    //     $('#tornfalksgrand16_wrapper').hide();
    //     $('#tornfalksgrand16_booked').prop('checked', true);
    //     // let element = document.getElementById('tornfalksgrand2_booked');
    //     // element.checked = true;
    //   } else {
    //     $('#tornfalksgrand16_wrapper').show();
    //     $('#tornfalksgrand16_booked').prop('checked', false);
    //   }
    // });

    // Object.keys(localStorage).forEach((key) => {
    //   console.log(localStorage.getItem(key));
    //   if (localStorage && localStorage.getItem(key) === 'tornfalksgrand7_occupied') {
    //     $('#tornfalksgrand7_wrapper').hide();
    //     $('#tornfalksgrand7_booked').prop('checked', true);
    //     // let element = document.getElementById('tornfalksgrand2_booked');
    //     // element.checked = true;
    //   } else {
    //     $('#tornfalksgrand7_wrapper').show();
    //     $('#tornfalksgrand7_booked').prop('checked', false);
    //   }
    // });

    // Object.keys(localStorage).forEach((key) => {
    //   console.log(localStorage.getItem(key));
    //   if (localStorage && localStorage.getItem(key) === 'tornfalksgrand5_occupied') {
    //     $('#tornfalksgrand5_wrapper').hide();
    //     $('#tornfalksgrand5_booked').prop('checked', true);
    //     // let element = document.getElementById('tornfalksgrand2_booked');
    //     // element.checked = true;
    //   } else {
    //     $('#tornfalksgrand5_wrapper').show();
    //     $('#tornfalksgrand5_booked').prop('checked', false);
    //   }
    // });

    
//START HIDE ALERT MESSAGES
    $('.alert-success').hide();
    $('.alert-danger').hide();
//END HIDE ALERT MESSAGES

//START SUB MENU DROPDOWN
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');
  
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
      });
  
      return false;
    });
//END SUB MENU DROPDOWN

//START ADD NAV SHADOW
    $(window).scroll(function() {
      if ($(window).scrollTop() > 10) {
          $('nav').addClass('nav_shadow');
      } else {
          $('nav').removeClass('nav_shadow');
      }
    });
//END ADD NAV SHADOW
//START BACK TO TOP BUTTON
    let btn = $('#backtotopbutton');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
//END BACK TO TOP BUTTON

//START HIDE AND SHOW LAUNDRYWRAPPER WHEN OCCUPIED CHECKBOX IS CHECKED

    // function hideAndShowLaundryWrapper(checkboxName, wrapperName) {

    //   $(checkboxName).change(function () {                
    //     $(wrapperName).toggle(!this.checked);
    //   }).change();

    // };

    // hideAndShowLaundryWrapper('#tornfalksgrand2_booked', '#tornfalksgrand2_wrapper');

//END HIDE AND SHOW LAUNDRYWRAPPER WHEN OCCUPIED CHECKBOX IS CHECKED

//START ADD CHECKBOX VALUE TO LOCALSTORAGE
  function setUpChangeListener(name) {
    const sel = `input[name^="${name}"]`;
    $(sel).on('change', function() {
      let allItems = $(sel + ":checked").map(function() {
        return this.value;
      }).get();
      localStorage.setItem(name, JSON.stringify(allItems));
    });
  };//end setUpChangeListener function
  setUpChangeListener('tornfalksgrand2');
  setUpChangeListener('tornfalksgrand12');
  setUpChangeListener('tornfalksgrand16');
  setUpChangeListener('tornfalksgrand7');
  setUpChangeListener('tornfalksgrand5');
  setUpChangeListener('stenfalksgrand2');
  setUpChangeListener('stenfalksgrand10');
  setUpChangeListener('stenfalksgrand14');
  setUpChangeListener('stenfalksgrand18');
  setUpChangeListener('stenfalksgrandett');
  setUpChangeListener('larkfalksgrand2');
  setUpChangeListener('larkfalksgrand13');
  setUpChangeListener('larkfalksgrand11');
  setUpChangeListener('larkfalksgrand5');
  setUpChangeListener('bivraksgrand5');
  setUpChangeListener('bivraksgrand9A');
  setUpChangeListener('bivraksgrand9B');
  setUpChangeListener('bivraksgrandheavylaundry');
  setUpChangeListener('ormvraksgrand6');
  setUpChangeListener('ormvraksgrand8');
  setUpChangeListener('ormvraksgrand1');
  setUpChangeListener('fiskgjusegrand6');
  setUpChangeListener('fiskgjusegrand8');
  setUpChangeListener('fiskgjusegrand11');
  setUpChangeListener('fiskgjusegrand3');
//END ADD CHECKBOX VALUE TO LOCALSTORAGE

//START CHECK IF ALL CHECKBOXES ARE CHECKED
    document.querySelector('#check-tornfalksgrand2').addEventListener('click', (e) => {
      e.preventDefault();
      let check = true;
      $('#tornfalk2 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#tornfalk2 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#tornfalksgrand2_wrapper').hide();
        $('#tornfalksgrand2_success').show();
        $('#tornfalksgrand2_danger').hide();
        $('.tornfalksgrand2_booked_wrapper').hide();
      }else{
        $('#tornfalksgrand2_success').hide();
        $('#tornfalksgrand2_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      localStorage.setItem('missingItems', JSON.stringify(filteredItems));

      

      // if(localStorage.getItem("missingItems") === null) {
        document.getElementById('summary').innerHTML = ''
        let ul = document.createElement('ul');
        ul.classList.add('list-group');
        document.getElementById('summary').appendChild(ul);
        filteredItems.forEach(function (item) {
          let li = document.createElement('li');
          li.classList.add('list-group-item');
          ul.appendChild(li);
          let result = item.replace(/_/g, " ");
          let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
          li.innerHTML = capitalized
        });
      // } else {

      // }
    });

    document.querySelector('#check-tornfalksgrand12').addEventListener('click', (e) => {
      e.preventDefault();
      $('#tornfalksgrand2_success').hide();
      let check = true;
      $('#tornfalk12 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#tornfalk12 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#tornfalksgrand12_wrapper').hide();
        $('#tornfalksgrand12_success').show();
        $('#tornfalksgrand12_danger').hide();
        $('.tornfalksgrand12_booked_wrapper').hide();
      }else{
        $('#tornfalksgrand12_success').hide();
        $('#tornfalksgrand12_danger').show();
      }
      

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      localStorage.setItem('missingItems', JSON.stringify(filteredItems));

      document.getElementById('summary').innerHTML = ''
        let ul = document.createElement('ul');
        ul.classList.add('list-group');
        document.getElementById('summary').appendChild(ul);
        filteredItems.forEach(function (item) {
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            ul.appendChild(li);
            let result = item.replace(/_/g, " ");
            let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
            li.innerHTML = capitalized
        });

    });

    document.querySelector('#check-tornfalksgrand16').addEventListener('click', (e) => {
      e.preventDefault();
      $('#tornfalksgrand12_success').hide();
      let check = true;
      $('#tornfalk16 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#tornfalk16 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#tornfalksgrand16_wrapper').hide();
        $('#tornfalksgrand16_success').show();
        $('#tornfalksgrand16_danger').hide();
        $('.tornfalksgrand16_booked_wrapper').hide();
      }else{
        $('#tornfalksgrand16_success').hide();
        $('#tornfalksgrand16_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["tornfalksgrand12"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-tornfalksgrand7').addEventListener('click', (e) => {
      e.preventDefault();
      $('#tornfalksgrand16_success').hide();
      let check = true;
      $('#tornfalk7 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#tornfalk7 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#tornfalksgrand7_wrapper').hide();
        $('#tornfalksgrand7_success').show();
        $('#tornfalksgrand7_danger').hide();
        $('.tornfalksgrand7_booked_wrapper').hide();
      }else{
        $('#tornfalksgrand7_success').hide();
        $('#tornfalksgrand7_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["tornfalksgrand7"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-tornfalksgrand5').addEventListener('click', (e) => {
      e.preventDefault();
      $('#tornfalksgrand7_success').hide();
      let check = true;
      $('#tornfalk5 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#tornfalk5 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#tornfalksgrand5_wrapper').hide();
        $('#tornfalksgrand5_success').show();
        $('#tornfalksgrand5_danger').hide();
        $('.tornfalksgrand5_booked_wrapper').hide();
      }else{
        $('#tornfalksgrand5_success').hide();
        $('#tornfalksgrand5_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["tornfalksgrand5"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-stenfalksgrand2').addEventListener('click', (e) => {
      e.preventDefault();
      $('#tornfalksgrand5_success').hide();
      let check = true;
      $('#stenfalk2 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#stenfalk2 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#stenfalksgrand2_wrapper').hide();
        $('#stenfalksgrand2_success').show();
        $('#stenfalksgrand2_danger').hide();
        $('.stenfalksgrand2_booked_wrapper').hide();
      }else{
        $('#stenfalksgrand2_success').hide();
        $('#stenfalksgrand2_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["stenfalksgrand2"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-stenfalksgrand10').addEventListener('click', (e) => {
      e.preventDefault();
      $('#stenfalksgrand2_success').hide();
      let check = true;
      $('#stenfalk10 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#stenfalk10 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#stenfalksgrand10_wrapper').hide();
        $('#stenfalksgrand10_success').show();
        $('#stenfalksgrand10_danger').hide();
        $('.stenfalksgrand10_booked_wrapper').hide();
      }else{
        $('#stenfalksgrand10_success').hide();
        $('#stenfalksgrand10_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["stenfalksgrand10"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-stenfalksgrand14').addEventListener('click', (e) => {
      e.preventDefault();
      $('#stenfalksgrand10_success').hide();
      let check = true;
      $('#stenfalk14 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#stenfalk14 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#stenfalksgrand14_wrapper').hide();
        $('#stenfalksgrand14_success').show();
        $('#stenfalksgrand14_danger').hide();
        $('.stenfalksgrand14_booked_wrapper').hide();
      }else{
        $('#stenfalksgrand14_success').hide();
        $('#stenfalksgrand14_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["stenfalksgrand14"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-stenfalksgrand18').addEventListener('click', (e) => {
      e.preventDefault();
      $('#stenfalksgrand14_success').hide();
      let check = true;
      $('#stenfalk18 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#stenfalk18 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#stenfalksgrand18_wrapper').hide();
        $('#stenfalksgrand18_success').show();
        $('#stenfalksgrand18_danger').hide();
        $('.stenfalksgrand18_booked_wrapper').hide();
      }else{
        $('#stenfalksgrand18_success').hide();
        $('#stenfalksgrand18_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["stenfalksgrand18"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-stenfalksgrandett').addEventListener('click', (e) => {
      e.preventDefault();
      $('#stenfalksgrand18_success').hide();
      let check = true;
      $('#stenfalk1 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#stenfalk1 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#stenfalksgrandett_wrapper').hide();
        $('#stenfalksgrand1_success').show();
        $('#stenfalksgrand1_danger').hide();
        $('.stenfalksgrandett_booked_wrapper').hide();
      }else{
        $('#stenfalksgrand1_success').hide();
        $('#stenfalksgrand1_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["stenfalksgrand1"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              let spellChange = capitalized.replace(/\bStenfalksgrandett\b/g, 'Stenfalksgränd 1');
              li.innerHTML = spellChange
          });

    });

    document.querySelector('#check-larkfalksgrand2').addEventListener('click', (e) => {
      e.preventDefault();
      $('#stenfalksgrand1_success').hide();
      let check = true;
      $('#larkfalk2 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#larkfalk2 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#larkfalksgrand2_wrapper').hide();
        $('#larkfalksgrand2_success').show();
        $('#larkfalksgrand2_danger').hide();
        $('.larkfalksgrand2_booked_wrapper').hide();
      }else{
        $('#larkfalksgrand2_success').hide();
        $('#larkfalksgrand2_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["larkfalksgrand2"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-larkfalksgrand13').addEventListener('click', (e) => {
      e.preventDefault();
      $('#larkfalksgrand2_success').hide();
      let check = true;
      $('#larkfalk13 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#larkfalk13 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#larkfalksgrand13_wrapper').hide();
        $('#larkfalksgrand13_success').show();
        $('#larkfalksgrand13_danger').hide();
        $('.larkfalksgrand13_booked_wrapper').hide();
      }else{
        $('#larkfalksgrand13_success').hide();
        $('#larkfalksgrand13_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["larkfalksgrand13"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-larkfalksgrand11').addEventListener('click', (e) => {
      e.preventDefault();
      $('#larkfalksgrand13_success').hide();
      let check = true;
      $('#larkfalk11 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#larkfalk11 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#larkfalksgrand11_wrapper').hide();
        $('#larkfalksgrand11_success').show();
        $('#larkfalksgrand11_danger').hide();
        $('.larkfalksgrand11_booked_wrapper').hide();
      }else{
        $('#larkfalksgrand11_success').hide();
        $('#larkfalksgrand11_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["larkfalksgrand11"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-larkfalksgrand5').addEventListener('click', (e) => {
      e.preventDefault();
      $('#larkfalksgrand11_success').hide();
      let check = true;
      $('#larkfalk5 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#larkfalk5 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#larkfalksgrand5_wrapper').hide();
        $('#larkfalksgrand5_success').show();
        $('#larkfalksgrand5_danger').hide();
        $('.larkfalksgrand5_booked_wrapper').hide();
      }else{
        $('#larkfalksgrand5_success').hide();
        $('#larkfalksgrand5_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["larkfalksgrand11"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-bivraksgrand5').addEventListener('click', (e) => {
      e.preventDefault();
      $('#larkfalksgrand5_success').hide();
      let check = true;
      $('#bivrak5 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#bivrak5 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#bivraksgrand5_wrapper').hide();
        $('#bivraksgrand5_success').show();
        $('#bivraksgrand5_danger').hide();
        $('.bivraksgrand5_booked_wrapper').hide();
      }else{
        $('#bivraksgrand5_success').hide();
        $('#bivraksgrand5_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["larkfalksgrand5"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-bivraksgrand9A').addEventListener('click', (e) => {
      e.preventDefault();
      $('#bivraksgrand5_success').hide();
      let check = true;
      $('#bivrak9A input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#bivrak9A input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#bivraksgrand9A_wrapper').hide();
        $('#bivraksgrand9A_success').show();
        $('#bivraksgrand9A_danger').hide();
        $('.bivraksgrand9A_booked_wrapper').hide();
      }else{
        $('#bivraksgrand9A_success').hide();
        $('#bivraksgrand9A_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["bivraksgrand9A"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-bivraksgrand9B').addEventListener('click', (e) => {
      e.preventDefault();
      $('#bivraksgrand9A_success').hide();
      let check = true;
      $('#bivrak9B input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#bivrak9B input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#bivraksgrand9B_wrapper').hide();
        $('#bivraksgrand9B_success').show();
        $('#bivraksgrand9B_danger').hide();
        $('.bivraksgrand9B_booked_wrapper').hide();
      }else{
        $('#bivraksgrand9B_success').hide();
        $('#bivraksgrand9B_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["bivraksgrand9B"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-bivraksgrandheavylaundry').addEventListener('click', (e) => {
      e.preventDefault();
      $('#bivraksgrand9B_success').hide();
      let check = true;
      $('#bivrakheavylaundry input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#bivrakheavylaundry input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#bivraksgrandheavylaundry_wrapper').hide();
        $('#bivraksgrandheavylaundry_success').show();
        $('#bivraksgrandheavylaundry_danger').hide();
        $('.bivraksgrandheavylaundry_booked_wrapper').hide();
      }else{
        $('#bivraksgrandheavylaundry_success').hide();
        $('#bivraksgrandheavylaundry_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["bivraksgrand9B"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              let spellChange = capitalized.replace(/\bBivraksgrandheavylaundry\b/g, 'Bivråksgränd grovtvättstuga')
              li.innerHTML = spellChange
          });

    });

    document.querySelector('#check-ormvraksgrand6').addEventListener('click', (e) => {
      e.preventDefault();
      $('#bivraksgrandheavylaundry_success').hide();
      let check = true;
      $('#ormvrak6 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#ormvrak6 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#ormvraksgrand6_wrapper').hide();
        $('#ormvraksgrand6_success').show();
        $('#ormvraksgrand6_danger').hide();
        $('.ormvraksgrand6_booked_wrapper').hide();
      }else{
        $('#ormvraksgrand6_success').hide();
        $('#ormvraksgrand6_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["ormvraksgrand6"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-ormvraksgrand8').addEventListener('click', (e) => {
      e.preventDefault();
      $('#ormvraksgrand6_success').hide();
      let check = true;
      $('#ormvrak8 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#ormvrak8 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#ormvraksgrand8_wrapper').hide();
        $('#ormvraksgrand8_success').show();
        $('#ormvraksgrand8_danger').hide();
        $('.ormvraksgrand8_booked_wrapper').hide();
      }else{
        $('#ormvraksgrand8_success').hide();
        $('#ormvraksgrand8_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["ormvraksgrand8"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-ormvraksgrand1').addEventListener('click', (e) => {
      e.preventDefault();
      $('#ormvraksgrand8_success').hide();
      let check = true;
      $('#ormvrak1 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#ormvrak1 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#ormvraksgrand1_wrapper').hide();
        $('#ormvraksgrand1_success').show();
        $('#ormvraksgrand1_danger').hide();
        $('.ormvraksgrand1_booked_wrapper').hide();
      }else{
        $('#ormvraksgrand1_success').hide();
        $('#ormvraksgrand1_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["ormvraksgrand8"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-fiskgjusegrand6').addEventListener('click', (e) => {
      e.preventDefault();
      $('#ormvraksgrand1_success').hide();
      let check = true;
      $('#fiskgjuse6 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#fiskgjuse6 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#fiskgjusegrand6_wrapper').hide();
        $('#fiskgjusegrand6_success').show();
        $('#fiskgjusegrand6_danger').hide();
        $('.fiskgjusegrand6_booked_wrapper').hide();
      }else{
        $('#fiskgjusegrand6_success').hide();
        $('#fiskgjusegrand6_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["ormvraksgrand8"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-fiskgjusegrand8').addEventListener('click', (e) => {
      e.preventDefault();
      $('#fiskgjusegrand6_success').hide();
      let check = true;
      $('#fiskgjuse8 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#fiskgjuse8 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#fiskgjusegrand8_wrapper').hide();
        $('#fiskgjusegrand8_success').show();
        $('#fiskgjusegrand8_danger').hide();
        $('.fiskgjusegrand8_booked_wrapper').hide();
      }else{
        $('#fiskgjusegrand8_success').hide();
        $('#fiskgjusegrand8_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["ormvraksgrand8"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-fiskgjusegrand11').addEventListener('click', (e) => {
      e.preventDefault();
      $('#fiskgjusegrand8_success').hide();
      let check = true;
      $('#fiskgjuse11 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#fiskgjuse11 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#fiskgjusegrand11_wrapper').hide();
        $('#fiskgjusegrand11_success').show();
        $('#fiskgjusegrand11_danger').hide();
        $('.fiskgjusegrand11_booked_wrapper').hide();
      }else{
        $('#fiskgjusegrand11_success').hide();
        $('#fiskgjusegrand11_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["fiskgjusegrand11"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });

    document.querySelector('#check-fiskgjusegrand3').addEventListener('click', (e) => {
      e.preventDefault();
      $('#fiskgjusegrand11_success').hide();
      let check = true;
      $('#fiskgjuse3 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#fiskgjuse3 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#fiskgjusegrand3_wrapper').hide();
        $('#fiskgjusegrand3_success').show();
        $('#fiskgjusegrand3_danger').hide();
        $('.fiskgjusegrand3_booked_wrapper').hide();
      }else{
        $('#fiskgjusegrand3_success').hide();
        $('#fiskgjusegrand3_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["fiskgjusegrand3"]);

      document.getElementById('summary').innerHTML = ''
          let ul = document.createElement('ul');
          ul.classList.add('list-group');
          document.getElementById('summary').appendChild(ul);
          filteredItems.forEach(function (item) {
              let li = document.createElement('li');
              li.classList.add('list-group-item');
              ul.appendChild(li);
              let result = item.replace(/_/g, " ");
              let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
              li.innerHTML = capitalized
          });

    });
//END CHECK IF ALL CHECKBOXES ARE CHECKED

//START RETRIEVE LOCALSTORAGE ITEMS
    function retrieveCheckedItemsFromLocalStorage(name) {
      if(localStorage && localStorage[name]){
        var localStoredData = JSON.parse(localStorage[name]);
        var checkboxes = document.getElementsByClassName(name);
        for(var i=0; i < checkboxes.length; i++){
            for(var j=0; j < localStoredData.length; j++){
                if(checkboxes[i].value == localStoredData[j]){
                    checkboxes[i].checked = true;
                }
            }
        }
      }
    };//end retrieveCheckedItemsFromLocalStorage function
    retrieveCheckedItemsFromLocalStorage('tornfalksgrand2')
    retrieveCheckedItemsFromLocalStorage('tornfalksgrand12')
    retrieveCheckedItemsFromLocalStorage('tornfalksgrand16')
    retrieveCheckedItemsFromLocalStorage('tornfalksgrand7')
    retrieveCheckedItemsFromLocalStorage('tornfalksgrand5')
    retrieveCheckedItemsFromLocalStorage('stenfalksgrand2')
    retrieveCheckedItemsFromLocalStorage('stenfalksgrand10')
    retrieveCheckedItemsFromLocalStorage('stenfalksgrand14')
    retrieveCheckedItemsFromLocalStorage('stenfalksgrand18')
    retrieveCheckedItemsFromLocalStorage('stenfalksgrandett')
    retrieveCheckedItemsFromLocalStorage('larkfalksgrand2')
    retrieveCheckedItemsFromLocalStorage('larkfalksgrand13')
    retrieveCheckedItemsFromLocalStorage('larkfalksgrand11')
    retrieveCheckedItemsFromLocalStorage('larkfalksgrand5')
    retrieveCheckedItemsFromLocalStorage('bivraksgrand5')
    retrieveCheckedItemsFromLocalStorage('bivraksgrand9A')
    retrieveCheckedItemsFromLocalStorage('bivraksgrand9B')
    retrieveCheckedItemsFromLocalStorage('bivraksgrandheavylaundry')
    retrieveCheckedItemsFromLocalStorage('ormvraksgrand6')
    retrieveCheckedItemsFromLocalStorage('ormvraksgrand8')
    retrieveCheckedItemsFromLocalStorage('ormvraksgrand1')
    retrieveCheckedItemsFromLocalStorage('fiskgjusegrand6')
    retrieveCheckedItemsFromLocalStorage('fiskgjusegrand8')
    retrieveCheckedItemsFromLocalStorage('fiskgjusegrand11')
    retrieveCheckedItemsFromLocalStorage('fiskgjusegrand3')

// IF PAGE RELOADS CHECK LOCALSTORAGE FOR MISSING ITEMS AND ADD TO DOM
    if (localStorage.getItem('missingItems') === null) {
      console.log('finns inte')
      return;
    } else {
      let filteredItemsFromLocalStorage = JSON.parse(localStorage.getItem('missingItems'));
      console.log(filteredItemsFromLocalStorage)
      document.getElementById('summary').innerHTML = ''
      let ul = document.createElement('ul');
      ul.classList.add('list-group');
      document.getElementById('summary').appendChild(ul);
      filteredItemsFromLocalStorage.forEach(function (item) {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        ul.appendChild(li);
        let result = item.replace(/_/g, " ");
        let capitalized = result.charAt(0).toUpperCase() + result.slice(1);
        li.innerHTML = capitalized
      });
      console.log('finns')
    }
    
//END RETRIEVE LOCALSTORAGE ITEMS

});//end document ready

};//end const app () =>

app();//load app
