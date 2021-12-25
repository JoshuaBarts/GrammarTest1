$(document).ready(function() {

    var score = 0;
    
    var a = ['put', 'cut', 'watched', 'drank', 'slept','walked', 'ate', 'jumped',
     'forgot', 'came','gave', 'kept', 'ran', 'tried', 'kissed', 'sang','broke',
      'typed', 'cried', 'died', 'went', 'brought', 'built', 'caught', 'bought'];

    
    $('form').submit(function(){
        if ($('#q1').val() == a[0]) {
            score++;
            $('#q1').css('border', '3px solid green')
        }
        else {
            $('#q1').css('border', '3px solid red')
        }

        if ($('#q2').val() == a[1]) {
            score++;
            $('#q2').css('border', '3px solid green')
        }
        else {
            $('#q2').css('border', '3px solid red')
        }

        if ($('#q3').val() == a[2]) {
            score++;
            $('#q3').css('border', '3px solid green')
        }
        else {
            $('#q3').css('border', '3px solid red')
        }

        if ($('#q4').val() == a[3]) {
            score++;
            $('#q4').css('border', '3px solid green')
        }
        else {
            $('#q4').css('border', '3px solid red')
        }

        if ($('#q5').val() == a[4]) {
            score++;
            $('#q5').css('border', '3px solid green')
        }
        else {
            $('#q5').css('border', '3px solid red')
        }
        
        if ($('#q6').val() == a[5]) {
            score++;
            $('#q6').css('border', '3px solid green')
        }
        else {
            $('#q6').css('border', '3px solid red')
        }

        if ($('#q7').val() == a[6]) {
            score++;
            $('#q7').css('border', '3px solid green')
        }
        else {
            $('#q7').css('border', '3px solid red')
        }

        if ($('#q8').val() == a[7]) {
            score++;
            $('#q8').css('border', '3px solid green')
        }
        else {
            $('#q8').css('border', '3px solid red')
        }

        if ($('#q9').val() == a[8]) {
            score++;
            $('#q9').css('border', '3px solid green')
        }
        else {
            $('#q9').css('border', '3px solid red')
        }

        if ($('#q10').val() == a[9]) {
            score++;
            $('#q10').css('border', '3px solid green')
        }
        else {
            $('#q10').css('border', '3px solid red')
        }

        if ($('#q11').val() == a[10]) {
            score++;
            $('#q11').css('border', '3px solid green')
        }
        else {
            $('#q11').css('border', '3px solid red')
        }

        if ($('#q12').val() == a[11]) {
            score++;
            $('#q12').css('border', '3px solid green')
        }
        else {
            $('#q12').css('border', '3px solid red')
        }

        if ($('#q13').val() == a[12]) {
            score++;
            $('#q13').css('border', '3px solid green')
        }
        else {
            $('#q13').css('border', '3px solid red')
        }

        if ($('#q14').val() == a[13]) {
            score++;
            $('#q14').css('border', '3px solid green')
        }
        else {
            $('#q14').css('border', '3px solid red')
        }

        if ($('#q15').val() == a[14]) {
            score++;
            $('#q15').css('border', '3px solid green')
        }
        else {
            $('#q15').css('border', '3px solid red')
        }

        if ($('#q16').val() == a[15]) {
            score++;
            $('#q16').css('border', '3px solid green')
        }
        else {
            $('#q16').css('border', '3px solid red')
        }

        if ($('#q17').val() == a[16]) {
            score++;
            $('#q17').css('border', '3px solid green')
        }
        else {
            $('#q17').css('border', '3px solid red')
        }

        if ($('#q18').val() == a[17]) {
            score++;
            $('#q18').css('border', '3px solid green')
        }
        else {
            $('#q18').css('border', '3px solid red')
        }

        if ($('#q19').val() == a[18]) {
            score++;
            $('#q19').css('border', '3px solid green')
        }
        else {
            $('#q19').css('border', '3px solid red')
        }

        if ($('#q20').val() == a[19]) {
            score++;
            $('#q20').css('border', '3px solid green')
        }
        else {
            $('#q20').css('border', '3px solid red')
        }

        if ($('#q21').val() == a[20]) {
            score++;
            $('#q21').css('border', '3px solid green')
        }
        else {
            $('#q21').css('border', '3px solid red')
        }

        if ($('#q22').val() == a[21]) {
            score++;
            $('#q22').css('border', '3px solid green')
        }
        else {
            $('#q22').css('border', '3px solid red')
        }

        if ($('#q23').val() == a[22]) {
            score++;
            $('#q23').css('border', '3px solid green')
        }
        else {
            $('#q23').css('border', '3px solid red')
        }

        if ($('#q24').val() == a[23]) {
            score++;
            $('#q24').css('border', '3px solid green')
        }
        else {
            $('#q24').css('border', '3px solid red')
        }
        
        if ($('#q25').val() == a[24]) {
            score++;
            $('#q25').css('border', '3px solid green')
        }
        else {
            $('#q25').css('border', '3px solid red')
        }

        $('#score').html(score)
        $('#clear').css('visibility', 'hidden')
        window.scrollTo(0,-500)

        if (score == 25) {
            $('#congrats').html("Congratulations Poopie!! :**")
        }
    })
    
    $('#clear').click(function() {
        $('input').val('');
    })

    $('#test').click(function(){
        location.reload();
    })
})