$('#clickMe').on('click',function(){
    $('#popover').css({
        'display': 'block'
    })
    $(document).one('click',function(){
        $('#popover').css({
            'display': 'none'
        })
    })
})


$('#wrapper').on('click',function(e){
    e.stopPropagation()
})