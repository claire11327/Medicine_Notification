let scrollDist
let myTop
let myLeft

function centerHandler(){
  scrollDist=$(window).scrollTop()
  myTop=($(window).height()-$("#popWindow").height())/2+scrollDist
  myLeft=($(window).width()-$("#popWindow").width())/2
}

function warning(){
  centerHandler ()
  $('#hide').css('display','block')
  $('#popWindow').css('display','flex')
  $('body').css('overflow','hidden')
  $('#popWindow').offset({top: myTop,left:myLeft})
  $('#popWindow').animate({
      opacity: '1',
    },500,'linear')
}

function warningLeave(){
  $('#popWindow div:nth-child(2)').html('您確定要離開此頁面?')
  warning()    
}

function cancel(){
  $('body').css('overflow','scroll')
  $('#hide').css('display','none')
  $('#popWindow').css('opacity','0')
  $('#popWindow').css('display','none')
  $('#cancelbtn').prop('disabled',false)	
}

function warningDisappear(){
  $('body').css('overflow','scroll')
  $('#hide').css('display','none') 
  $('#popWindow').css('display','none')  
}
function leave_minePillBox(){
  warningDisappear()
  switchToContactorPillBox()
  $('#popWindow div:nth-child(2)').html('您確定要刪除這筆藥物嗎?')
}

function leave_contactorPillBox(){
  warningDisappear()
  switchToMinePillBox()
  $('#popWindow div:nth-child(2)').html('您確定要刪除這筆藥物嗎?')  
}

function leave_mineNotify(){
  warningDisappear()
  switchToContactorNotify()
  $('#popWindow div:nth-child(2)').html('您確定要刪除這筆通知嗎?')
}

function leave_contactorNotify(){
  warningDisappear()
  switchToMineNotify()
  $('#popWindow div:nth-child(2)').html('您確定要刪除這筆通知嗎?')
}

function leave_pillDetail(my_userId){
  warningDisappear()
  $('#pillDetail').empty()
  if($('#supervisee').children().length == 0) Load_pillBox(my_userId, 'myPillbox')
  else Load_pillBox($('#supervisee').val(), 'superviseePillbox') 
}

function leave_pickMed(my_userId){
  warningDisappear()
  $('#pickMedPage').empty()
  if($('#supervisee').children().length == 0) Load_medNotify(my_userId, 'myMedNotify')
  else Load_medNotify($('#supervisee').val(), 'superviseeMedNotify') 

}