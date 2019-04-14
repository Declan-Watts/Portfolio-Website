$(document).ready(function(){
    // Hamburger Toggler
    $('.menu').click(function(){
        $('ul').toggleClass('toggled', 800, "easeOutQuint"); //This sets an animation too the dropdown when the Hamburger menu is pressed
    });
    // Navbar Background Changer
    const scrlCHQ = document.querySelector("nav") //This is selected to later i can check if the elem has been toggled by reading its classes
    $(window).scroll(function(){ //While the window is scrolling, this function is run
        if($(this).scrollTop() > 100){ //This is run if the page has passed 100px down from the top
            if (!scrlCHQ.classList.contains("bg")) { //This checks too see if Nav has already been toggled or not and then it gives them all the toggled class
                $('nav').addClass('bg');
                $('i').addClass('bg-icon');
                $('li').addClass('bg-icon');
              }
        } else if(scrlCHQ.classList.contains("bg")){ //This checks to see if the nav has been toggled or not and if it has, and the page is less than 100px from the top, then it will toggle the classes
            $('nav').removeClass('bg');
            $('i').removeClass('bg-icon');
            $('li').removeClass('bg-icon');
        }
    });
});


