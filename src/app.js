$(document).ready(function () {
    var SMMS = {
        initStyles: function() {
            $('#urlcode').css({
                display: 'block',
                height: '0',
                overflow: 'hidden'
            });
        },
        getUrlList: function(cbEvt) {
            var args = arguments;
            var context = this;

            setTimeout(function() {
                var str = $('#urlcode').html();

                var arr = str.split(/\s+/);
                arr = arr.filter(function(item) {
                    return item != '';
                });

                console.log(arr);

                cbEvt(arr);
            }, 1000);
        },
        renderClipboard: function(arr) {
            // debugger
            console.log(arr);

            // var s_str = '<div style="' + wrapStyle + '"></div>';
            // var _str = '';

            // $('#urlcodes pre').append();
        }
    };

    SMMS.initStyles();

    $(document).ajaxStart(function () {
        console.log('start');
    });

    $(document).ajaxComplete(function () {
        console.log('complete');
        SMMS.getUrlList(SMMS.renderClipboard);
    });
});