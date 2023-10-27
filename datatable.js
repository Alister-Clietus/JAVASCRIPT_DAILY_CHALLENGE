
$(document).ready(function() {
    $('#myTable').DataTable( {
        'ajax' : 'http://localhost:8085/get-table',
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