var drum_list = document.querySelectorAll(".drum")

for (var i = 0; i < drum_list.length; i++) {
    var button_clicked = "";
    drum_list[i].addEventListener("click", function() {
        button_clicked = this.innerHTML;
        makeSound(button_clicked);
        buttonAnimation(button_clicked);
        }
    );
}

document.addEventListener("keydown", function(event) {
    var key_pressed = event.key;
    makeSound(key_pressed);
    buttonAnimation(key_pressed);
    }
);

function makeSound(button) {
    switch (button) {
        case 'w': 
            var w_drum = new Audio("sounds/tom-1.mp3");
            w_drum.play();
            break;
        case 'a':
            var a_drum = new Audio("sounds/tom-2.mp3");
            a_drum.play();
            break;
        case 's':
            var s_drum = new Audio("sounds/tom-3.mp3");
            s_drum.play();
            break;
        case 'd':
            var d_drum = new Audio("sounds/tom-4.mp3");
            d_drum.play();
            break;
        case 'j':
            var j_drum = new Audio("sounds/snare.mp3");
            j_drum.play();
            break;
        case 'k':
            var k_drum = new Audio("sounds/crash.mp3");
            k_drum.play();
            break;
        case 'l':
            var l_drum = new Audio("sounds/kick-bass.mp3");
            l_drum.play();
            break;
        default: 
            console.log(event.key);
    }
}


function buttonAnimation(currentKey) {
    var active_button = document.querySelector("." + currentKey);
    active_button.classList.add("pressed");
    setTimeout(function() {active_button.classList.remove("pressed");}, 100);
} 