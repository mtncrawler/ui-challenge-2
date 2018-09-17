'use strict'

$('.radioButton').on('click', function() {
    if($(this).hasClass('radioButton-unchecked')) {
        $('.radioButton').toggleClass('radioButton-unchecked radioButton-checked');
    }
})

$('.checkbox').on('click', function() {
    $(this).toggleClass('checkbox-unchecked checkbox-checked');
})

$('.button').on('click', function() {
    $(this).toggleClass('button-clicked');
})