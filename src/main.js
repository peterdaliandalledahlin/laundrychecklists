import App from './App';

const app = async () => {
  document.getElementById('app').appendChild(await App());

  $(document).ready(function(){
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
//START CHECK LOCALSTORAGE FOR OCCUPIED LANDRYS
    $(window).on('load', function(){
      function checkLocalStorageForOccupiedLaundry(inputName, inputWrapper, bookedName) {
        if(localStorage.getItem(inputName) === null){
          inputWrapper.show();
        }else{
          let localStorageArray = localStorage.getItem(inputName)
          let localStorageKey = JSON.parse(localStorageArray);
            if(localStorageKey[0] === bookedName){
              inputWrapper.hide();
            }else{
              inputWrapper.show();
            }
        }
      }//end checkLocalStorageForOccupiedLaundry function
      checkLocalStorageForOccupiedLaundry('tornfalksgrand2', $("#tornfalksgrand2_wrapper"), "tornfalksgrand2_booked")
      checkLocalStorageForOccupiedLaundry('tornfalksgrand12', $("#tornfalksgrand12_wrapper"), "tornfalksgrand12_booked")
      checkLocalStorageForOccupiedLaundry('tornfalksgrand16', $("#tornfalksgrand16_wrapper"), "tornfalksgrand16_booked")
      checkLocalStorageForOccupiedLaundry('tornfalksgrand7', $("#tornfalksgrand7_wrapper"), "tornfalksgrand7_booked")
      checkLocalStorageForOccupiedLaundry('tornfalksgrand5', $("#tornfalksgrand5_wrapper"), "tornfalksgrand5_booked")
      checkLocalStorageForOccupiedLaundry('stenfalksgrand2', $("#stenfalksgrand2_wrapper"), "stenfalksgrand2_booked")
      checkLocalStorageForOccupiedLaundry('stenfalksgrand10', $("#stenfalksgrand10_wrapper"), "stenfalksgrand10_booked")
      checkLocalStorageForOccupiedLaundry('stenfalksgrand14', $("#stenfalksgrand14_wrapper"), "stenfalksgrand14_booked")
      checkLocalStorageForOccupiedLaundry('stenfalksgrand18', $("#stenfalksgrand18_wrapper"), "stenfalksgrand18_booked")
      checkLocalStorageForOccupiedLaundry('stenfalksgrand1', $("#stenfalksgrand1_wrapper"), "stenfalksgrand1_booked")
      checkLocalStorageForOccupiedLaundry('larkfalksgrand2', $("#larkfalksgrand2_wrapper"), "larkfalksgrand2_booked")
      checkLocalStorageForOccupiedLaundry('larkfalksgrand13', $("#larkfalksgrand13_wrapper"), "larkfalksgrand13_booked")
      checkLocalStorageForOccupiedLaundry('larkfalksgrand11', $("#larkfalksgrand11_wrapper"), "larkfalksgrand11_booked")
      checkLocalStorageForOccupiedLaundry('larkfalksgrand5', $("#larkfalksgrand5_wrapper"), "larkfalksgrand5_booked")
      checkLocalStorageForOccupiedLaundry('bivraksgrand5', $("#bivraksgrand5_wrapper"), "bivraksgrand5_booked")
      checkLocalStorageForOccupiedLaundry('bivraksgrand9A', $("#bivraksgrand9A_wrapper"), "bivraksgrand9A_booked")
      checkLocalStorageForOccupiedLaundry('bivraksgrand9B', $("#bivraksgrand9B_wrapper"), "bivraksgrand9B_booked")
      checkLocalStorageForOccupiedLaundry('bivraksgrandheavylaundry', $("#bivraksgrandheavylaundry_wrapper"), "bivraksgrandheavylaundry_booked")
      checkLocalStorageForOccupiedLaundry('ormvraksgrand6', $("#ormvraksgrand6_wrapper"), "ormvraksgrand6_booked")
      checkLocalStorageForOccupiedLaundry('ormvraksgrand8', $("#ormvraksgrand8_wrapper"), "ormvraksgrand8_booked")
      checkLocalStorageForOccupiedLaundry('ormvraksgrand1', $("#ormvraksgrand1_wrapper"), "ormvraksgrand1_booked")
      checkLocalStorageForOccupiedLaundry('fiskgjusegrand6', $("#fiskgjusegrand6_wrapper"), "fiskgjusegrand6_booked")
      checkLocalStorageForOccupiedLaundry('fiskgjusegrand8', $("#fiskgjusegrand8_wrapper"), "fiskgjusegrand8_booked")
      checkLocalStorageForOccupiedLaundry('fiskgjusegrand11', $("#fiskgjusegrand11_wrapper"), "fiskgjusegrand11_booked")
      checkLocalStorageForOccupiedLaundry('fiskgjusegrand3', $("#fiskgjusegrand3_wrapper"), "fiskgjusegrand3_booked")

      // if(localStorage.getItem('tornfalksgrand2') === null){
      //   $("#tornfalksgrand2_wrapper").show();
      // }else{
      //   let localStorageArray = localStorage.getItem('tornfalksgrand2')
      //   let localStorageKey = JSON.parse(localStorageArray);
      //     if(localStorageKey[0] === "tornfalksgrand2_booked"){
      //       $("#tornfalksgrand2_wrapper").hide();
      //     }else{
      //       $("#tornfalksgrand2_wrapper").show();
      //     }
      // }

      // if(localStorage.getItem('tornfalksgrand12') === null){
      //   $("#tornfalksgrand12_wrapper").show();
      // }else{
      //   let localStorageArray = localStorage.getItem('tornfalksgrand12')
      //   let localStorageKey = JSON.parse(localStorageArray);
      //     if(localStorageKey[0] === "tornfalksgrand12_booked"){
      //       $("#tornfalksgrand12_wrapper").hide();
      //     }else{
      //       $("#tornfalksgrand12_wrapper").show();
      //     }
      // }

    });//end windows on load function
//END CHECK LOCALSTORAGE FOR OCCUPIED LANDRYS
//START DISABLE CHECKBOXES WHEN LAUNDRY IS OCCUPPIED
    function laundryOccupied(element, className, elementId, container) {
      element.on('change', function () {
        className.not(elementId).prop('disabled', (_, val) => !val)
        container.toggle();
      })
    };//end laundryOccupied function
    laundryOccupied($('#tornfalksgrand2_booked'), $(".tornfalksgrand2"), "#tornfalksgrand2_booked", $('#tornfalksgrand2_wrapper'));
    laundryOccupied($('#tornfalksgrand12_booked'), $(".tornfalksgrand12"), '#tornfalksgrand12_booked', $('#tornfalksgrand12_wrapper'));
    laundryOccupied($('#tornfalksgrand16_booked'), $(".tornfalksgrand16"), '#tornfalksgrand16_booked', $('#tornfalksgrand16_wrapper'));
    laundryOccupied($('#tornfalksgrand7_booked'), $(".tornfalksgrand7"), '#tornfalksgrand7_booked', $('#tornfalksgrand7_wrapper'));
    laundryOccupied($('#tornfalksgrand5_booked'), $(".tornfalksgrand5"), '#tornfalksgrand5_booked', $('#tornfalksgrand5_wrapper'));
    laundryOccupied($('#stenfalksgrand2_booked'), $(".stenfalksgrand2"), '#stenfalksgrand2_booked', $('#stenfalksgrand2_wrapper'));
    laundryOccupied($('#stenfalksgrand10_booked'), $(".stenfalksgrand10"), '#stenfalksgrand10_booked', $('#stenfalksgrand10_wrapper'));
    laundryOccupied($('#stenfalksgrand14_booked'), $(".stenfalksgrand14"), '#stenfalksgrand14_booked', $('#stenfalksgrand14_wrapper'));
    laundryOccupied($('#stenfalksgrand18_booked'), $(".stenfalksgrand18"), '#stenfalksgrand18_booked', $('#stenfalksgrand18_wrapper'));
    laundryOccupied($('#stenfalksgrand1_booked'), $(".stenfalksgrand1"), '#stenfalksgrand1_booked', $('#stenfalksgrand1_wrapper'));
    laundryOccupied($('#larkfalksgrand2_booked'), $(".larkfalksgrand2"), '#larkfalksgrand2_booked', $('#larkfalksgrand2_wrapper'));
    laundryOccupied($('#larkfalksgrand13_booked'), $(".larkfalksgrand13"), '#larkfalksgrand13_booked', $('#larkfalksgrand13_wrapper'));
    laundryOccupied($('#larkfalksgrand11_booked'), $(".larkfalksgrand11"), '#larkfalksgrand11_booked', $('#larkfalksgrand11_wrapper'));
    laundryOccupied($('#larkfalksgrand5_booked'), $(".larkfalksgrand5"), '#larkfalksgrand5_booked', $('#larkfalksgrand5_wrapper'));
    laundryOccupied($('#bivraksgrand5_booked'), $(".bivraksgrand5"), '#bivraksgrand5_booked', $('#bivraksgrand5_wrapper'));
    laundryOccupied($('#bivraksgrand9A_booked'), $(".bivraksgrand9A"), '#bivraksgrand9A_booked', $('#bivraksgrand9A_wrapper'));
    laundryOccupied($('#bivraksgrand9B_booked'), $(".bivraksgrand9B"), '#bivraksgrand9B_booked', $('#bivraksgrand9B_wrapper'));
    laundryOccupied($('#bivraksgrandheavylaundry_booked'), $(".bivraksgrandheavylaundry"), '#bivraksgrandheavylaundry_booked', $('#bivraksgrandheavylaundry_wrapper'));
    laundryOccupied($('#ormvraksgrand6_booked'), $(".ormvraksgrand6"), '#ormvraksgrand6_booked', $('#ormvraksgrand6_wrapper'));
    laundryOccupied($('#ormvraksgrand8_booked'), $(".ormvraksgrand8"), '#ormvraksgrand8_booked', $('#ormvraksgrand8_wrapper'));
    laundryOccupied($('#ormvraksgrand1_booked'), $(".ormvraksgrand1"), '#ormvraksgrand1_booked', $('#ormvraksgrand1_wrapper'));
    laundryOccupied($('#fiskgjusegrand6_booked'), $(".fiskgjusegrand6"), '#fiskgjusegrand6_booked', $('#fiskgjusegrand6_wrapper'));
    laundryOccupied($('#fiskgjusegrand8_booked'), $(".fiskgjusegrand8"), '#fiskgjusegrand8_booked', $('#fiskgjusegrand8_wrapper'));
    laundryOccupied($('#fiskgjusegrand11_booked'), $(".fiskgjusegrand11"), '#fiskgjusegrand11_booked', $('#fiskgjusegrand11_wrapper'));
    laundryOccupied($('#fiskgjusegrand3_booked'), $(".fiskgjusegrand3"), '#fiskgjusegrand3_booked', $('#fiskgjusegrand3_wrapper'));

    // $('#tornfalksgrand2_booked').on('change', function () {
    //   $(".tornfalksgrand2").not("#tornfalksgrand2_booked").prop("disabled", (_, val) => !val);
    // });

    // $('#tornfalksgrand12_booked').on('change', function () {
    //   $(".tornfalksgrand12").prop("disabled", (_, val) => !val);
    // });

    // $('#tornfalksgrand16_booked').on('change', function () {
    //   $(".tornfalksgrand16").prop("disabled", (_, val) => !val);
    // });

    // $('#tornfalksgrand7_booked').on('change', function () {
    //   $(".tornfalksgrand7").prop("disabled", (_, val) => !val);
    // });

    // $('#tornfalksgrand5_booked').on('change', function () {
    //   $(".tornfalksgrand5").prop("disabled", (_, val) => !val);
    // });

    // $('#stenfalksgrand2_booked').on('change', function () {
    //   $(".stenfalksgrand2").prop("disabled", (_, val) => !val);
    // });

    // $('#stenfalksgrand10_booked').on('change', function () {
    //   $(".stenfalksgrand10").prop("disabled", (_, val) => !val);
    // });

    // $('#stenfalksgrand14_booked').on('change', function () {
    //   $(".stenfalksgrand14").prop("disabled", (_, val) => !val);
    // });

    // $('#stenfalksgrand18_booked').on('change', function () {
    //   $(".stenfalksgrand18").prop("disabled", (_, val) => !val);
    // });

    // $('#stenfalksgrand1_booked').on('change', function () {
    //   $(".stenfalksgrand1").prop("disabled", (_, val) => !val);
    // });

    // $('#larkfalksgrand2_booked').on('change', function () {
    //   $(".larkfalksgrand2").prop("disabled", (_, val) => !val);
    // });

    // $('#larkfalksgrand13_booked').on('change', function () {
    //   $(".larkfalksgrand13").prop("disabled", (_, val) => !val);
    // });

    // $('#larkfalksgrand11_booked').on('change', function () {
    //   $(".larkfalksgrand11").prop("disabled", (_, val) => !val);
    // });

    // $('#larkfalksgrand5_booked').on('change', function () {
    //   $(".larkfalksgrand5").prop("disabled", (_, val) => !val);
    // });

    // $('#bivraksgrand5_booked').on('change', function () {
    //   $(".bivraksgrand5").prop("disabled", (_, val) => !val);
    // });

    // $('#bivraksgrand9A_booked').on('change', function () {
    //   $(".bivraksgrand9A").prop("disabled", (_, val) => !val);
    // });

    // $('#bivraksgrand9B_booked').on('change', function () {
    //   $(".bivraksgrand9B").prop("disabled", (_, val) => !val);
    // });

    // $('#ormvraksgrand6_booked').on('change', function () {
    //   $(".ormvraksgrand6").prop("disabled", (_, val) => !val);
    // });

    // $('#ormvraksgrand8_booked').on('change', function () {
    //   $(".ormvraksgrand8").prop("disabled", (_, val) => !val);
    // });

    // $('#ormvraksgrand1_booked').on('change', function () {
    //   $(".ormvraksgrand1").prop("disabled", (_, val) => !val);
    // });

    // $('#fiskgjusegrand6_booked').on('change', function () {
    //   $(".fiskgjusegrand6").prop("disabled", (_, val) => !val);
    // });

    // $('#fiskgjusegrand8_booked').on('change', function () {
    //   $(".fiskgjusegrand8").prop("disabled", (_, val) => !val);
    // });

    // $('#fiskgjusegrand11_booked').on('change', function () {
    //   $(".fiskgjusegrand11").prop("disabled", (_, val) => !val);
    // });

    // $('#fiskgjusegrand3_booked').on('change', function () {
    //   $(".fiskgjusegrand3").prop("disabled", (_, val) => !val);
    // });

/*
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
*/
//END DISABLE CHECKBOXES WHEN LAUNDRY IS OCCUPPIED
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
  setUpChangeListener('stenfalksgrand1');
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

/*  
    $('input[name^="tornfalksgrand2"]').on('change', function () {

      let allItems = $('input[name^="tornfalksgrand2"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['tornfalksgrand2'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="tornfalksgrand12"]').on('change', function () {

      let allItems = $('input[name^="tornfalksgrand12"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['tornfalksgrand12'] = JSON.stringify(allItems)

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

    $('input[name^="larkfalksgrand2"]').on('change', function () {

      let allItems = $('input[name^="larkfalksgrand2"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['larkfalksgrand2'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="larkfalksgrand13"]').on('change', function () {

      let allItems = $('input[name^="larkfalksgrand13"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['larkfalksgrand13'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="larkfalksgrand11"]').on('change', function () {

      let allItems = $('input[name^="larkfalksgrand11"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['larkfalksgrand11'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="larkfalksgrand5"]').on('change', function () {

      let allItems = $('input[name^="larkfalksgrand5"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['larkfalksgrand5'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="bivraksgrand5"]').on('change', function () {

      let allItems = $('input[name^="bivraksgrand5"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['bivraksgrand5'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="bivraksgrand9A"]').on('change', function () {

      let allItems = $('input[name^="bivraksgrand9A"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['bivraksgrand9A'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="bivraksgrand9B"]').on('change', function () {

      let allItems = $('input[name^="bivraksgrand9B"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['bivraksgrand9B'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="bivraksgrandheavylaundry"]').on('change', function () {

      let allItems = $('input[name^="bivraksgrandheavylaundry"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['bivraksgrandheavylaundry'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="ormvraksgrand6"]').on('change', function () {

      let allItems = $('input[name^="ormvraksgrand6"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['ormvraksgrand6'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="ormvraksgrand8"]').on('change', function () {

      let allItems = $('input[name^="ormvraksgrand8"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['ormvraksgrand8'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="ormvraksgrand1"]').on('change', function () {

      let allItems = $('input[name^="ormvraksgrand1"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['ormvraksgrand1'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="fiskgjusegrand6"]').on('change', function () {

      let allItems = $('input[name^="fiskgjusegrand6"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['fiskgjusegrand6'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="fiskgjusegrand8"]').on('change', function () {

      let allItems = $('input[name^="fiskgjusegrand8"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['fiskgjusegrand8'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="fiskgjusegrand11"]').on('change', function () {

      let allItems = $('input[name^="fiskgjusegrand11"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['fiskgjusegrand11'] = JSON.stringify(allItems)

    });//end on change

    $('input[name^="fiskgjusegrand3"]').on('change', function () {

      let allItems = $('input[name^="fiskgjusegrand3"]:checked').map(function(){
        return this.value;
      }).get();
      localStorage['fiskgjusegrand3'] = JSON.stringify(allItems)

    });//end on change
*/
/*
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
*/
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-stenfalksgrand2').addEventListener('click', (e ) => {
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
        $('.stenfalksgrand1_booked_wrapper').hide();
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

    document.querySelector('#check-larkfalksgrand2').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-larkfalksgrand13').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-larkfalksgrand11').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-larkfalksgrand5').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-bivraksgrand5').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-bivraksgrand9A').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-bivraksgrand9B').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-bivraksgrandheavylaundry').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-ormvraksgrand6').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#bivraksgrand9B_success').hide();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-ormvraksgrand8').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-ormvraksgrand1').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-fiskgjusegrand6').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-fiskgjusegrand8').addEventListener('click', (e ) => {
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-fiskgjusegrand11').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#fiskgjusegran8_success').hide();
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

          $('#clear-data').prop("disabled", false);

    });

    document.querySelector('#check-fiskgjusegrand3').addEventListener('click', (e ) => {
      e.preventDefault();
      $('#fiskgjusegran11_success').hide();
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

          $('#clear-data').prop("disabled", false);

    });

/*
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
              li.innerHTML = spellChange
          });

          $('#clear-data').prop("disabled", false);

    });
*/
//END CHECK IF ALL CHECKBOXES ARE CHECKED
//START CLEAR LOCALSTORAGE AND RESET ACTIONLIST
    document.querySelector('#clear-data').addEventListener('click', () => {
      document.querySelector('#summary').innerHTML = ''
      localStorage.clear();
    })
//END CLEAR LOCALSTORAGE AND RESET ACTIONLIST
//START RETRIEVE LOCALSTORAGE ITEMS
    function retrieveCheckedItemsFromLocalStorage(name) {
      if(localStorage&&localStorage[name]){
        var localStoredData=JSON.parse(localStorage[name]);
        var checkboxes=document.getElementsByClassName(name);
        for(var i=0;i<checkboxes.length;i++){
            for(var j=0;j<localStoredData.length;j++){
                if(checkboxes[i].value==localStoredData[j]){
                    checkboxes[i].checked=true;
                }
            }
        }
        //localStorage.removeItem('tornfalksgrand2');
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
    retrieveCheckedItemsFromLocalStorage('stenfalksgrand1')
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

    if(localStorage&&localStorage["tornfalksgrand12"]){
      var localStoredData=JSON.parse(localStorage["tornfalksgrand12"]);
      var checkboxes=document.getElementsByClassName('tornfalksgrand12');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('tornfalksgrand12');
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

    if(localStorage&&localStorage["larkfalksgrand2"]){
      var localStoredData=JSON.parse(localStorage["larkfalksgrand2"]);
      var checkboxes=document.getElementsByClassName('larkfalksgrand2');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('larkfalksgrand2');
    }

    if(localStorage&&localStorage["larkfalksgrand13"]){
      var localStoredData=JSON.parse(localStorage["larkfalksgrand13"]);
      var checkboxes=document.getElementsByClassName('larkfalksgrand13');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('larkfalksgrand13');
    }

    if(localStorage&&localStorage["larkfalksgrand11"]){
      var localStoredData=JSON.parse(localStorage["larkfalksgrand11"]);
      var checkboxes=document.getElementsByClassName('larkfalksgrand11');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('larkfalksgrand11');
    }

    if(localStorage&&localStorage["larkfalksgrand5"]){
      var localStoredData=JSON.parse(localStorage["larkfalksgrand5"]);
      var checkboxes=document.getElementsByClassName('larkfalksgrand5');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('larkfalksgrand5');
    }

    if(localStorage&&localStorage["bivraksgrand5"]){
      var localStoredData=JSON.parse(localStorage["bivraksgrand5"]);
      var checkboxes=document.getElementsByClassName('bivraksgrand5');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('bivraksgrand5');
    }

    if(localStorage&&localStorage["bivraksgrand9A"]){
      var localStoredData=JSON.parse(localStorage["bivraksgrand9A"]);
      var checkboxes=document.getElementsByClassName('bivraksgrand9A');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('bivraksgrand9A');
    }

    if(localStorage&&localStorage["bivraksgrand9B"]){
      var localStoredData=JSON.parse(localStorage["bivraksgrand9B"]);
      var checkboxes=document.getElementsByClassName('bivraksgrand9B');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('bivraksgrand9B');
    }

    if(localStorage&&localStorage["bivraksgrandheavylaundry"]){
      var localStoredData=JSON.parse(localStorage["bivraksgrandheavylaundry"]);
      var checkboxes=document.getElementsByClassName('bivraksgrandheavylaundry');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('bivraksgrandheavylaundry');
    }

    if(localStorage&&localStorage["ormvraksgrand6"]){
      var localStoredData=JSON.parse(localStorage["ormvraksgrand6"]);
      var checkboxes=document.getElementsByClassName('ormvraksgrand6');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('ormvraksgrand6');
    }

    if(localStorage&&localStorage["ormvraksgrand8"]){
      var localStoredData=JSON.parse(localStorage["ormvraksgrand8"]);
      var checkboxes=document.getElementsByClassName('ormvraksgrand8');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('ormvraksgrand8');
    }

    if(localStorage&&localStorage["ormvraksgrand1"]){
      var localStoredData=JSON.parse(localStorage["ormvraksgrand1"]);
      var checkboxes=document.getElementsByClassName('ormvraksgrand1');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('ormvraksgrand1');
    }

    if(localStorage&&localStorage["fiskgjusegrand6"]){
      var localStoredData=JSON.parse(localStorage["fiskgjusegrand6"]);
      var checkboxes=document.getElementsByClassName('fiskgjusegrand6');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('fiskgjusegrand6');
    }

    if(localStorage&&localStorage["fiskgjusegrand8"]){
      var localStoredData=JSON.parse(localStorage["fiskgjusegrand8"]);
      var checkboxes=document.getElementsByClassName('fiskgjusegrand8');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('fiskgjusegrand8');
    }

    if(localStorage&&localStorage["fiskgjusegrand11"]){
      var localStoredData=JSON.parse(localStorage["fiskgjusegrand11"]);
      var checkboxes=document.getElementsByClassName('fiskgjusegrand11');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('fiskgjusegrand11');
    }

    if(localStorage&&localStorage["fiskgjusegrand3"]){
      var localStoredData=JSON.parse(localStorage["fiskgjusegrand3"]);
      var checkboxes=document.getElementsByClassName('fiskgjusegrand3');
      for(var i=0;i<checkboxes.length;i++){
          for(var j=0;j<localStoredData.length;j++){
              if(checkboxes[i].value==localStoredData[j]){
                  checkboxes[i].checked=true;
              }
          }
      }
      //localStorage.removeItem('fiskgjusegrand3');
    }

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
*/
//END RETRIEVE LOCALSTORAGE ITEMS

});//end document ready

};//end const app () =>

app();//load app
