    document.cookie = "safeCookie1=foo; SameSite=Lax"; 
	document.cookie = "safeCookie2=foo";  
	document.cookie = "crossCookie=bar; SameSite=None; Secure";

    jQuery(document).ready(function(){
        $(".nav>li").mouseover(function(){
            $(this).children(".submenu").stop().slideDown();
        });
        $(".nav>li").mouseleave(function(){
            $(this).children(".submenu").stop().slideUp();
        });
    });
    
   
    $(document).ready(function(){
        $('.menu_btn>a').on('click',function(){
            $('#scroll_menu').on('scroll touchmove mousewheel',function(event){
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
            });
            $('.menu_bg').show();
            $(".sidebar_menu").show();
            
            
        });
        
        $('.close_btn>a').on('click',function(){
             $('#scroll_menu').off('scroll touchmove mousewheel');
             $('.menu_bg').hide();
             $(".sidebar_menu").hide();
             
             
        });
    });

    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
    })
