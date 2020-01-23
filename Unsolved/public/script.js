$(document).ready(function () {

    class Table{
        constructor(name, phone, email, id){
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.id = id;
        }
    }

    $("#resSub").click(function(){
        event.preventDefault();

        let name = $("#name").val();
        let phone = $("#phone").val();
        let email = $("#email").val();

        let id = $("#id").val();

        let reservation = new Table(name, phone, email, id);

        $.ajax({
            url: `https://gentle-cliffs-57224.herokuapp.com/api/tables`,
            method: "POST",
            data: reservation,
            success: function(msg) {
                console.log('posted reservation');
                console.log(msg);
                }
        }).then(function(res){
            console.log(res);
            // alert if they're on a table or the waitlist
            
        // clear form when submitting?
        });

    })

    function popTables(){
        // get current reservations
        $.ajax({
            url: `https://gentle-cliffs-57224.herokuapp.com/api/tables`,
            method: 'GET'
        }).then(function(res){
            for(let i = 0; i < 5; i++){
                let id = res[i].id;
                let table = `<div class="table"><span class="tableNum">${i+1}</span> | ${id}</div>`;
                $("#currRes").append(table);
            }

            // generate waitlist
            for(let i = 5; i < res.length; i++){
                let id = res[i].id;
                    let table = `<div class="waitList"><span class="waitNum">${i+1}</span> | ${id}</div>`;
                    $("#currWait").append(table);
            }
        });

        // get current waitlist
        // $.ajax({
        //     url: `https://gentle-cliffs-57224.herokuapp.com/api/tables`,
        //     method: 'GET'
        // }).then(function(res){
        //     for(let i of res){
        //         let id = res[i].id;
        //         let table = `<div class="waitList"><span class="waitNum">${i+1}</span> | ${id}</div>`;
        //         $("#currRes").append(table);
        //     }
        // });
    }

    popTables();

});