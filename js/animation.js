$(window).load(function() { //start after HTML, images have loaded

    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;
            //interval between items (in milliseconds)
            var itemInterval = 5000;
            //cross-fade time (in milliseconds)
            var fadeTime = 2500;
            //count number of items
            var numberOfItems = $('.bluetooth-logo').length;
            //set current item
            var currentItem = 0;

            // hide all
            $('.bluetooth-logo').hide();
            $('.screen').hide();

            //show first item
            $('.bluetooth-logo').eq(currentItem).fadeIn(initialFadeIn);
            $('.screen').eq(currentItem).fadeIn(initialFadeIn);

            //loop through the items
            var infiniteLoop = setInterval(function(){
              $('.bluetooth-logo').eq(currentItem).hide();
              $('.screen').eq(currentItem).hide();


                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.bluetooth-logo').eq(currentItem).fadeIn(fadeTime);
                $('.screen').eq(currentItem).fadeIn(fadeTime);

            }, itemInterval);
        }
    };

    InfiniteRotator.init();

});
