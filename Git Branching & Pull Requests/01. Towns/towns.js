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

function shuffleTowns() {
    const townSelect = document.getElementById('townSelect');

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
