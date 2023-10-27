
$(document).ready(function() {
    $('#myTable').DataTable( {
        'ajax' : 'data.json',
        'columns' : 
        [
            { 'data' : 'college' },
            { 'data': 'name' },
            { 'data': 'phonenumber' },
            { 'data': 'id' },
            { 'data': 'branch' },
            { 'data': 'status' }
            
        ]
    });
});

// http://localhost:8085/get-table