$(document).ready(function () {    
    $('#btnAdd').click(addTown);
});

$(document).ready(function () {    
    $('#btnDelete').click(deleteTown);
});

$(document).ready(function () {    
    $('#btnShuffle').click(shuffleTowns);
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

function shuffleTowns() {
    const townSelect = document.getElementById('towns');

    // Get the options from the select element
    let towns = Array.from(townSelect.options).map(option => option.text);
    
    // Fisher-Yates shuffle algorithm
    for (let i = towns.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [towns[i], towns[j]] = [towns[j], towns[i]];
    }

    // Clear the current options in the select element
    townSelect.innerHTML = '';

    // Add shuffled towns as new options
    towns.forEach(town => {
        const option = document.createElement('option');
        option.textContent = town;
        townSelect.appendChild(option);
    });
}
