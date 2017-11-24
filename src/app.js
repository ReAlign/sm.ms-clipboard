$(document).ready(function () {
    $(document).ajaxStart(function () {
        console.log('start');
    });
    $(document).ajaxComplete(function () {
        console.log('complete');
        $('#urlcodes pre').append('<button>12</button>');
        setTimeout(function() {
            var str = $('#urlcode').html();

            var arr = str.split(/\s+/);
            arr.forEach(function(item, index) {
                if(item == '') {
                    arr.splice(index, 1);
                }
            });
            console.log(arr);
        }, 1000);
    });
});