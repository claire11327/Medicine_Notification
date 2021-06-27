function Nav_mine_animate(){
    $('.contacter').css('color','#c4c4c4')
    $('#contacter').css('background-color','white')
    $('.mine').css('color','#27ae60')
    $('#mine').css('width','0')
    $('#mine').css('background-color','#27ae60')
    $('#mine').animate({ width:'50vw'})
    $('nav button:nth-child(1)').prop('disabled',true)
    $('nav button:nth-child(2)').prop('disabled',false)                
}

function Nav_contactor_animate(){
    $('.mine').css('color','#c4c4c4')
    $('#mine').css('background-color','white')
    $('.contacter').css('color','#27ae60')
    $('#contacter').css('width','0')
    $('#contacter').css('background-color','#27ae60')
    $('#contacter').animate({ width:'50vw' })
    $('nav button:nth-child(2)').prop('disabled',true)
    $('nav button:nth-child(1)').prop('disabled',false)       
}
