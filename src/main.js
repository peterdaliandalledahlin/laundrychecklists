import App from './App';

const app = async () => {
  document.getElementById('app').appendChild(await App());

  $(document).ready(function(){

    $('.alert-success').hide();
    $('.alert-danger').hide();

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

//START DISABLE CHECKBOXES WHEN LAUNDRY IS OCCUPPIED
/*
    $('#tornfalksgrand2_booked').on('change', function () {
      $(".tornfalksgrand2").prop("disabled", (_, val) => !val);
    });

    $('#tornfalksgrand12_booked').on('change', function () {
      $(".tornfalksgrand12").prop("disabled", (_, val) => !val);
    });

    $('#tornfalksgrand16_booked').on('change', function () {
      $(".tornfalksgrand16").prop("disabled", (_, val) => !val);
    });

    $('#tornfalksgrand7_booked').on('change', function () {
      $(".tornfalksgrand7").prop("disabled", (_, val) => !val);
    });

    $('#tornfalksgrand5_booked').on('change', function () {
      $(".tornfalksgrand5").prop("disabled", (_, val) => !val);
    });

    $('#stenfalksgrand2_booked').on('change', function () {
      $(".stenfalksgrand2").prop("disabled", (_, val) => !val);
    });

    $('#tornfalksgrand10_booked').on('change', function () {
      $(".tornfalksgrand10").prop("disabled", (_, val) => !val);
    });

    $('#tornfalksgrand14_booked').on('change', function () {
      $(".tornfalksgrand14").prop("disabled", (_, val) => !val);
    });

    $('#tornfalksgrand18_booked').on('change', function () {
      $(".tornfalksgrand18").prop("disabled", (_, val) => !val);
    });

    $('#tornfalksgrand1_booked').on('change', function () {
      $(".tornfalksgrand1").prop("disabled", (_, val) => !val);
    });
*/
    $('#krukmakaren_booked').on('change', function () {
      $(".krukmakaren").prop("disabled", (_, val) => !val);
    });

    $('#korsangen79_booked').on('change', function () {
        $(".korsangen79").prop("disabled", (_, val) => !val);
    });

    $('#korsangen81_booked').on('change', function () {
      $(".korsangen81").prop("disabled", (_, val) => !val);
    });

    $('#korsangen85_booked').on('change', function () {
      $(".korsangen85").prop("disabled", (_, val) => !val);
    });

    $('#korsangen83_booked').on('change', function () {
      $(".korsangen83").prop("disabled", (_, val) => !val);
    });

    $('#korsangen87_booked').on('change', function () {
      $(".korsangen87").prop("disabled", (_, val) => !val);
    });

    $('#korsangen89_booked').on('change', function () {
      $(".korsangen89").prop("disabled", (_, val) => !val);
    });

    $('#korsangen91_booked').on('change', function () {
      $(".korsangen91").prop("disabled", (_, val) => !val);
    });

    $('#korsangen77_booked').on('change', function () {
      $(".korsangen77").prop("disabled", (_, val) => !val);
    });

    $('#korsangen71_booked').on('change', function () {
      $(".korsangen71").prop("disabled", (_, val) => !val);
    });

    $('#korsangen73_booked').on('change', function () {
      $(".korsangen73").prop("disabled", (_, val) => !val);
    });

    $('#korsangen75_booked').on('change', function () {
      $(".korsangen75").prop("disabled", (_, val) => !val);
    });

    $('#korsangenheavylaundry_booked').on('change', function () {
      $(".korsangenheavylaundry").prop("disabled", (_, val) => !val);
    });
//END DISABLE CHECKBOXES WHEN LAUNDRY IS OCCUPPIED

//START ADD CHECKBOX VALUE TO LOCALSTORAGE
/*
    $('input[name^="tornfalksgrand2"]').on('change', function () {

      let allItems = $('input[name^="tornfalksgrand2"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['tornfalksgrand2'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="tornfalksgrand6"]').on('change', function () {

      let allItems = $('input[name^="tornfalksgrand6"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['tornfalksgrand6'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="tornfalksgrand16"]').on('change', function () {

      let allItems = $('input[name^="tornfalksgrand16"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['tornfalksgrand16'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="tornfalksgrand7"]').on('change', function () {

      let allItems = $('input[name^="tornfalksgrand7"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['tornfalksgrand7'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="tornfalksgrand5"]').on('change', function () {

      let allItems = $('input[name^="tornfalksgrand5"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['tornfalksgrand5'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="stenfalksgrand2"]').on('change', function () {

      let allItems = $('input[name^="stenfalksgrand2"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['stenfalksgrand2'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="stenfalksgrand10"]').on('change', function () {

      let allItems = $('input[name^="stenfalksgrand10"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['stenfalksgrand10'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="stenfalksgrand14"]').on('change', function () {

      let allItems = $('input[name^="stenfalksgrand14"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['stenfalksgrand14'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="stenfalksgrand18"]').on('change', function () {

      let allItems = $('input[name^="stenfalksgrand18"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['stenfalksgrand18'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="stenfalksgrand1"]').on('change', function () {

      let allItems = $('input[name^="stenfalksgrand1"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['stenfalksgrand1'] = JSON.stringify(allItems)

    });//end on change
*/
    $('input[name^="krukmakaren"]').on('change', function () {

      let allItems = $('input[name^="krukmakaren"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['krukmakaren'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen79"]').on('change', function () {

      let allItems = $('input[name^="korsangen79"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen79'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen81"]').on('change', function () {

      let allItems = $('input[name^="korsangen81"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen81'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen85"]').on('change', function () {

      let allItems = $('input[name^="korsangen85"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen85'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen83"]').on('change', function () {

      let allItems = $('input[name^="korsangen83"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen83'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen87"]').on('change', function () {

      let allItems = $('input[name^="korsangen87"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen87'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen89"]').on('change', function () {

      let allItems = $('input[name^="korsangen89"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen89'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen91"]').on('change', function () {

      let allItems = $('input[name^="korsangen91"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen91'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen77"]').on('change', function () {

      let allItems = $('input[name^="korsangen77"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen77'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen71"]').on('change', function () {

      let allItems = $('input[name^="korsangen71"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen71'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen73"]').on('change', function () {

      let allItems = $('input[name^="korsangen73"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen73'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangen75"]').on('change', function () {

      let allItems = $('input[name^="korsangen75"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangen75'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="korsangenheavylaundry"]').on('change', function () {

      let allItems = $('input[name^="korsangenheavylaundry"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['korsangenheavylaundry'] = JSON.stringify(allItems)

    });//end on change
//END ADD CHECKBOX VALUE TO LOCALSTORAGE

//START CHECK IF ALL CHECKBOXES ARE CHECKED
/*
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
      }else{
        $('#tornfalksgrand2_success').hide();
        $('#tornfalksgrand2_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["tornfalksgrand2"]);

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

    document.querySelector('#check-tornfalksgrand6').addEventListener('click', (e) => {
      e.preventDefault();
      $('#tornfalksgrand2_success').hide();
      let check = true;
      $('#tornfalk6 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#tornfalk6 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#tornfalksgrand6_wrapper').hide();
        $('#tornfalksgrand6_success').show();
        $('#tornfalksgrand6_danger').hide();
      }else{
        $('#tornfalksgrand6_success').hide();
        $('#tornfalksgrand6_danger').show();
      }
      

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["tornfalksgrand6"]);

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
      $('#tornfalksgrand6_success').hide();
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
      }else{
        $('#tornfalksgrand16_success').hide();
        $('#tornfalksgrand16_danger').show();
      }

      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();

      // let localStoredData = JSON.parse(localStorage["tornfalksgrand16"]);

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

    document.querySelector('#check-tornfalksgrand5').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-stenfalksgrand2').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#tornfalksgrand7_success').hide();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-stenfalksgrand10').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-stenfalksgrand14').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-stenfalksgrand18').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-stenfalksgrand1').addEventListener('click', (e ) => {
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
        $('#stenfalksgrand1_wrapper').hide();
        $('#stenfalksgrand1_success').show();
        $('#stenfalksgrand1_danger').hide();
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
              li.innerHTML = capitalized
          });

          $('#clear-data').prop("disabled", false);

    });
*/
    document.querySelector('#check-krukmakaren').addEventListener('click', (e) => {   
      e.preventDefault();
      let check = true;
      $('#krukmakaren input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#krukmakaren input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });
  
      if(check){
        $('#krukmakaren_wrapper').hide();
        $('#krukmakaren_success').show();
        $('#krukmakaren_danger').hide();
      }else{
        $('#krukmakaren_success').hide();
        $('#krukmakaren_danger').show();
      }
  
      let filteredItems = $('input[value*="fattas"]:checked').map(function(){
        return this.value;
      }).get();
  
      // let localStoredData = JSON.parse(localStorage["tornfalksgrand2"]);
  
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

    document.querySelector('#check-korsangen79').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#krukmakaren_success').hide();
      let check = true;
      $('#korsangen79 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen79 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen79_wrapper').hide();
        $('#korsangen79_success').show();
        $('#korsangen79_danger').hide();
      }else{
        $('#korsangen79_success').hide();
        $('#korsangen79_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangen81').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen79_success').hide();
      let check = true;
      $('#korsangen81 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen81 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen81_wrapper').hide();
        $('#korsangen81_success').show();
        $('#korsangen81_danger').hide();
      }else{
        $('#korsangen81_success').hide();
        $('#korsangen81_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangen85').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen81_success').hide();
      let check = true;
      $('#korsangen85 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen85 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen85_wrapper').hide();
        $('#korsangen85_success').show();
        $('#korsangen85_danger').hide();
      }else{
        $('#korsangen85_success').hide();
        $('#korsangen85_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangen83').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen85_success').hide();
      let check = true;
      $('#korsangen83 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen83 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen83_wrapper').hide();
        $('#korsangen83_success').show();
        $('#korsangen83_danger').hide();
      }else{
        $('#korsangen83_success').hide();
        $('#korsangen83_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangen87').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen83_success').hide();
      let check = true;
      $('#korsangen87 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen87 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen87_wrapper').hide();
        $('#korsangen87_success').show();
        $('#korsangen87_danger').hide();
      }else{
        $('#korsangen87_success').hide();
        $('#korsangen87_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangen89').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen87_success').hide();
      let check = true;
      $('#korsangen89 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen89 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen89_wrapper').hide();
        $('#korsangen89_success').show();
        $('#korsangen89_danger').hide();
      }else{
        $('#korsangen89_success').hide();
        $('#korsangen89_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangen91').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen89_success').hide();
      let check = true;
      $('#korsangen91 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen91 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen91_wrapper').hide();
        $('#korsangen91_success').show();
        $('#korsangen91_danger').hide();
      }else{
        $('#korsangen91_success').hide();
        $('#korsangen91_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangen77').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen91_success').hide();
      let check = true;
      $('#korsangen77 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen77 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen77_wrapper').hide();
        $('#korsangen77_success').show();
        $('#korsangen77_danger').hide();
      }else{
        $('#korsangen77_success').hide();
        $('#korsangen77_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangen71').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen77_success').hide();
      let check = true;
      $('#korsangen71 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen71 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen71_wrapper').hide();
        $('#korsangen71_success').show();
        $('#korsangen71_danger').hide();
      }else{
        $('#korsangen71_success').hide();
        $('#korsangen71_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangen73').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen71_success').hide();
      let check = true;
      $('#korsangen73 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen73 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen73_wrapper').hide();
        $('#korsangen73_success').show();
        $('#korsangen73_danger').hide();
      }else{
        $('#korsangen73_success').hide();
        $('#korsangen73_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangen75').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen73_success').hide();
      let check = true;
      $('#korsangen75 input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangen75 input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangen75_wrapper').hide();
        $('#korsangen75_success').show();
        $('#korsangen75_danger').hide();
      }else{
        $('#korsangen75_success').hide();
        $('#korsangen75_danger').show();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-korsangenheavylaundry').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#korsangen75_success').hide();
      let check = true;
      $('#korsangenheavylaundry input:radio').each(function(){
        let name = $(this).attr('name');
        if($('input:radio[name='+name+']:checked').length == 0){
          check = false;
        }
      });
      $('#korsangenheavylaundry input:checkbox').each(function(){
        let name = $(this).attr('name');
        if($('input:checkbox[name='+name+']:checked').length == 0){
          check = false;
        }
      });

      if(check){
        $('#korsangenheavylaundry_wrapper').hide();
        $('#korsangenheavylaundry_success').show();
        $('#korsangenheavylaundry_danger').hide();
      }else{
        $('#korsangenheavylaundry_success').hide();
        $('#korsangenheavylaundry_danger').show();
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
              let spellChange = capitalized.replace(/\bKorsangenheavylaundry\b/g, 'Korsängen grovtvättstuga')
              console.log(capitalized)
              li.innerHTML = spellChange
          });

          $('#clear-data').prop("disabled", false);

    });
//END CHECK IF ALL CHECKBOXES ARE CHECKED


//START CLEAR LOCALSTORAGE AND RESET ACTIONLIST
    document.querySelector('#clear-data').addEventListener('click', () => {
      document.querySelector('#summary').innerHTML = ''
      localStorage.clear();
    })
//END CLEAR LOCALSTORAGE AND RESET ACTIONLIST

//START RETRIEVE LOCALSTORAGE ITEMS
/*
    if(localStorage&&localStorage["tornfalksgrand2"]){
      var localStoredData=JSON.parse(localStorage["tornfalksgrand2"]);
      var checkboxes=document.getElementsByClassName('tornfalksgrand2');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('tornfalksgrand2');
    }

    if(localStorage&&localStorage["tornfalksgrand6"]){
      var localStoredData=JSON.parse(localStorage["tornfalksgrand6"]);
      var checkboxes=document.getElementsByClassName('tornfalksgrand6');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('tornfalksgrand6');
    }

    if(localStorage&&localStorage["tornfalksgrand16"]){
      var localStoredData=JSON.parse(localStorage["tornfalksgrand16"]);
      var checkboxes=document.getElementsByClassName('tornfalksgrand16');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('tornfalksgrand16');
    }

    if(localStorage&&localStorage["tornfalksgrand7"]){
      var localStoredData=JSON.parse(localStorage["tornfalksgrand7"]);
      var checkboxes=document.getElementsByClassName('tornfalksgrand7');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('tornfalksgrand7');
    }

    if(localStorage&&localStorage["tornfalksgrand5"]){
      var localStoredData=JSON.parse(localStorage["tornfalksgrand5"]);
      var checkboxes=document.getElementsByClassName('tornfalksgrand5');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('tornfalksgrand5');
    }

    if(localStorage&&localStorage["stenfalksgrand2"]){
      var localStoredData=JSON.parse(localStorage["stenfalksgrand2"]);
      var checkboxes=document.getElementsByClassName('stenfalksgrand2');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('stenfalksgrand2');
    }

    if(localStorage&&localStorage["stenfalksgrand10"]){
      var localStoredData=JSON.parse(localStorage["stenfalksgrand10"]);
      var checkboxes=document.getElementsByClassName('stenfalksgrand10');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('stenfalksgrand10');
    }

    if(localStorage&&localStorage["stenfalksgrand14"]){
      var localStoredData=JSON.parse(localStorage["stenfalksgrand14"]);
      var checkboxes=document.getElementsByClassName('stenfalksgrand14');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('stenfalksgrand14');
    }

    if(localStorage&&localStorage["stenfalksgrand18"]){
      var localStoredData=JSON.parse(localStorage["stenfalksgrand18"]);
      var checkboxes=document.getElementsByClassName('stenfalksgrand18');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('stenfalksgrand18');
    }

    if(localStorage&&localStorage["stenfalksgrand1"]){
      var localStoredData=JSON.parse(localStorage["stenfalksgrand1"]);
      var checkboxes=document.getElementsByClassName('stenfalksgrand1');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('stenfalksgrand1');
    }
*/
    if(localStorage&&localStorage["krukmakaren"]){
      var localStoredData=JSON.parse(localStorage["krukmakaren"]);
      var checkboxes=document.getElementsByClassName('krukmakaren');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen79');
    }

    if(localStorage&&localStorage["korsangen79"]){
      var localStoredData=JSON.parse(localStorage["korsangen79"]);
      var checkboxes=document.getElementsByClassName('korsangen79');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen79');
    }

    if(localStorage&&localStorage["korsangen81"]){
      var localStoredData=JSON.parse(localStorage["korsangen81"]);
      var checkboxes=document.getElementsByClassName('korsangen81');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen81');
    }

    if(localStorage&&localStorage["korsangen85"]){
      var localStoredData=JSON.parse(localStorage["korsangen85"]);
      var checkboxes=document.getElementsByClassName('korsangen85');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen81');
    }

    if(localStorage&&localStorage["korsangen87"]){
      var localStoredData=JSON.parse(localStorage["korsangen87"]);
      var checkboxes=document.getElementsByClassName('korsangen87');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen81');
    }

    if(localStorage&&localStorage["korsangen89"]){
      var localStoredData=JSON.parse(localStorage["korsangen89"]);
      var checkboxes=document.getElementsByClassName('korsangen89');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen81');
    }

    if(localStorage&&localStorage["korsangen91"]){
      var localStoredData=JSON.parse(localStorage["korsangen91"]);
      var checkboxes=document.getElementsByClassName('korsangen91');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen81');
    }

    if(localStorage&&localStorage["korsangen77"]){
      var localStoredData=JSON.parse(localStorage["korsangen77"]);
      var checkboxes=document.getElementsByClassName('korsangen77');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen81');
    }

    if(localStorage&&localStorage["korsangen71"]){
      var localStoredData=JSON.parse(localStorage["korsangen71"]);
      var checkboxes=document.getElementsByClassName('korsangen71');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen81');
    }

    if(localStorage&&localStorage["korsangen73"]){
      var localStoredData=JSON.parse(localStorage["korsangen73"]);
      var checkboxes=document.getElementsByClassName('korsangen73');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen81');
    }

    if(localStorage&&localStorage["korsangen75"]){
      var localStoredData=JSON.parse(localStorage["korsangen75"]);
      var checkboxes=document.getElementsByClassName('korsangen75');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen81');
    }

    if(localStorage&&localStorage["korsangenheavylaundry"]){
      var localStoredData=JSON.parse(localStorage["korsangenheavylaundry"]);
      var checkboxes=document.getElementsByClassName('korsangenheavylaundry');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('korsangen81');
    }
//END RETRIEVE LOCALSTORAGE ITEMS

})//end document ready

};
// Load app
app();
