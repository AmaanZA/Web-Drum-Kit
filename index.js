var number_of_buttons = document.querySelectorAll(".drum").length;

function emit_sound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log("error");
    }
}

function button_pressed_animation(key){
    var active_button = document.querySelector("." + key);
    active_button.classList.add("pressed");
    setTimeout(function(){active_button.classList.remove("pressed");} , 200)
}

document.addEventListener("keydown", function(event){
    emit_sound(event.key);
    button_pressed_animation(event.key);
})

for(var i = 0; i < number_of_buttons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button_pressed = this.textContent;
        emit_sound(button_pressed);
        button_pressed_animation(button_pressed);
    } );
}