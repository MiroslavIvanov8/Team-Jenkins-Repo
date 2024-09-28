$(document).ready(function () {    
    $('#btnAdd').click(addTown);
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
