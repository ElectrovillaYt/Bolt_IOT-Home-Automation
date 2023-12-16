// Please keep in in mind that the following text contains only JavaScript code intended for clear understanding.

function temperature_out() {        // function for Getting temperature every 5 sec if button is pressed.
    var temp_in = new XMLHttpRequest();
    temp_in.open('GET', '');        // add you API key for pin A0 (Temperature Sensor) in ''
    temp_in.send();
    temp_in.onreadystatechange = function () {
        if (temp_in.readyState == 4 && temp_in.status == 200) {
            var obj = JSON.stringify(temp_in.response).substring(15, 18);
            var temperature_value = parseInt(obj)
            var temperature = (temperature_value * 0.0977).toFixed(2);
            var get_time = document.getElementById("get_time");
            document.getElementById("temp_value").value = temperature + "°C";

            if (temperature >= 40 && temperature > 60) {
                document.getElementById("get_time").style.backgroundColor = "#FFEA33"
                document.getElementById("get_time").style.color = "#000000"
            }
            else if (temperature >= 60 && temperature > 80) {
                document.getElementById("get_time").style.backgroundColor = "#FFC633"
                document.getElementById("get_time").style.color = "#000000"
            }
            else if (temperature >= 80 && temperature < 100) {
                document.getElementById("get_time").style.backgroundColor = "#FF9C33"
                document.getElementById("get_time").style.color = "#000000"
            }
            else if (temperature >= 100) {
                document.getElementById("get_time").style.backgroundColor = "#FF3333"
                document.getElementById("get_time").style.color = "#ffffff"
            }

            var get_time_button = document.getElementById("get_time");
            let countdown = 0;
            function disableButton() {
                get_time_button.disabled = true;
                get_time_button.innerHTML = "Wait 5 seconds";

                countdown = setInterval(function () {
                    let count = parseInt(get_time_button.innerHTML.split(" ")[1]);
                    count--;

                    if (count === 0) {
                        clearInterval(countdown);
                        get_time_button.disabled = false;
                        get_time_button.innerHTML = "Get temperature";
                    } else {
                        get_time.innerHTML = "Wait " + count + " seconds";
                    }
                }, 1000);

                setTimeout(function () {
                    clearInterval(countdown);
                    get_time_button.disabled = false;
                    get_time_button.innerHTML = "Get temperature";
                }, 30000);
            }
            disableButton();
        }
    }
}

// Functions For Switch 1 ON and OFF
function switch_1_on() {
    let switch1_state_HIGH = new XMLHttpRequest();
    switch1_state_HIGH.open("GET", '');         // add you API key for pin D0 ON/HIGH (Switch1 ON) in ''
    switch1_state_HIGH.send();
}
function switch_1_off() {
    let switch1_state_LOW = new XMLHttpRequest();
    switch1_state_LOW.open("GET", '');          // add you API key for pin D0 OFF/LOW (Switch1 OFF) in ''
    switch1_state_LOW.send();
}

// Functions For Switch 2 ON and OFF
function switch_2_on() {
    let switch2__state_HIGH = new XMLHttpRequest();
    switch2__state_HIGH.open('GET', '');        // add you API key for pin D1 ON/HIGH (Switch2 ON) in ''
    switch2__state_HIGH.send();

}
function switch_2_off() {
    let switch2_state_LOW = new XMLHttpRequest();
    switch2_state_LOW.open('GET', '');      // add you API key for pin D1 OFF/LOW (Switch2 OFF) in ''
    switch2_state_LOW.send();
}

// Functions For Switch 3 ON and OFF
function switch_3_on() {
    let switch3_state_HIGH = new XMLHttpRequest();
    switch3_state_HIGH.open('GET', '');     // add you API key for pin D2 ON/HIGH (Switch3 ON) in ''
    switch3_state_HIGH.send();
}
function switch_3_off() {
    let switch3_state_LOW = new XMLHttpRequest();
    switch3_state_LOW.open('GET', '');      // add you API key for pin D2 OFF/LOW (Switch3 OFF) in ''
    switch3_state_LOW.send();
}

// Functions For Switch 4 ON and OFF
function switch_4_on() {
    let switch4_state_HIGH = new XMLHttpRequest();
    switch4_state_HIGH.open('GET', '');        // add you API key for pin D3 ON/HIGH (Switch4 ON) in ''
    switch4_state_HIGH.send();
}
function switch_4_off() {
    let switch4_state_LOW = new XMLHttpRequest();
    switch4_state_LOW.open('GET', '');        // add you API key for pin D3 OFF/LOW (Switch4 OFF) in ''
    switch4_state_LOW.send();
}