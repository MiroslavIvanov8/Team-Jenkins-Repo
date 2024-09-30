$(document).ready(function () {    
    $('#btnAdd').click(addTown);
});

$(document).ready(function () {    
    $('#btnDelete').click(deleteTown);
});

function addTown() {
    let townName = $('#townNameForAdd').val().trim();
    $('#townNameForAdd').val('');  

    if (townName) {
        $('#towns').append($('<option>').text(townName));  
        $('#result').text(townName + " added.");  
        $('#result').show();
    } else {
        $('#result').text("Please enter a valid town name.");
        $('#result').show(); 
    }
}
function deleteTown() {
    let townName = $('#townName').val();
    $('#townName').val('');
    let removed = false;
    for (let option of $('#towns option')) {
        if (option.textContent == townName) {
            removed = true;
            option.remove();
        }
    }
    if (removed)
        showMessage(townName + " deleted.");
    else
        showMessage(townName + " not found.");
}

function showMessage(msg) {
    $('#result').text(msg).css("display", "block");
    setTimeout(function () {
        $('#result').hide('blind', {}, 500);
    }, 3000);
}

