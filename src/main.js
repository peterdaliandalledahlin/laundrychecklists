import App from './App';

const app = async () => {
  document.getElementById('app').appendChild(await App());

//   function removeHash () { 
//     var scrollV, scrollH, loc = window.location;
//     if ("pushState" in history)
//         history.pushState("", document.title, loc.pathname + loc.search);
//     else {
//         // Prevent scrolling by storing the page's current scroll offset
//         scrollV = document.body.scrollTop;
//         scrollH = document.body.scrollLeft;

//         loc.hash = "";

//         // Restore the scroll offset, should be flicker free
//         document.body.scrollTop = scrollV;
//         document.body.scrollLeft = scrollH;
//     }
// }


  $(document).ready(function(){

      $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");


        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
        });

      });

    $(window).scroll(function() {
      if ($(window).scrollTop() > 10) {
          $('nav').addClass('nav_shadow');
      } else {
          $('nav').removeClass('nav_shadow');
      }
    });

   // addToLocalStorage($('input[name^="tornfalksgrand2"]'), $('input[name^="tornfalksgrand2"]:checked'), 'tornfalksgrand2' )

    // resetLocalStorage("tornfalksgrand2", "tornfalksgrand2")
    // resetLocalStorage("tornfalksgrand6", "tornfalksgrand6")
    // resetLocalStorage("tornfalksgrand16", "tornfalksgrand16")
    // resetLocalStorage("tornfalksgrand7", "tornfalksgrand7")
    // resetLocalStorage("tornfalksgrand5", "tornfalksgrand5")

    // document.querySelector('a').addEventListener('click', () => {
    //   removeHash()
    // })

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

    //let retrievedItems = localStorage.getItem('data')
    //console.log(retrievedItems)
    // var x = document.cookie;
    // console.log(x)

    // function addToLocalStorage(input, inputChecked, localStorageName) {
    //   input.on('change', function () {

    //     let allItems = inputChecked.map(function(){
    //       return this.value;
    //     }).get();
    //     localStorage[localStorageName] = JSON.stringify(allItems)
  
    //   });//end on change
    // }

    $('#tornfalksgrand2_booked').on('click', function () {
      console.log('clicked')
      //$('input[name^="tornfalksgrand2"]').prop('disabled', !this.checked);
      $(".tornfalksgrand2").toggle(!this.checked);
    });

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

  document.querySelector('#clear-data').addEventListener('click', () => {
    document.querySelector('#summary').innerHTML = ''
    localStorage.clear();
  })


  



  //  function resetLocalStorage(localStorageName, id) {

  //   if(localStorage&&localStorage[localStorageName]){
  //     var localStoredData=JSON.parse(localStorage[localStorageName]);
  //     var checkboxes=document.getElementsByName(id);
  //     for(var i=0;i<checkboxes.length;i++){
  //         for(var j=0;j<localStoredData.length;j++){
  //             if(checkboxes[i].value==localStoredData[j]){
  //                 checkboxes[i].checked=true;
  //             }
  //         }
  //     }
  //     localStorage.removeItem(localStorageName);
  //   }
    
  // }

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

})//end document ready

};
// Load app
app();
