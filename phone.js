"use strict";

export class GetPhone {

    static getData = async () => {
        try {
            const content = await fetch("http://a41d.k.time4vps.cloud:3001/henkilot");
            this.dataInJson = await content.json();
            return this.dataInJson;
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    static #populateTable = (data) => { 
        let $table = $('#main-table'); 

        $.each(data, function(i, item) {
            var $row = $('<tr>'); 
    
            $('<td>').text(item.nimi).appendTo($row); 
            $('<td>').text(item.puhelin).appendTo($row); 
    
            $row.appendTo($table); 
        });
    }

    static handlePageLoad =  async () => { 
        let data = await this.getData();
        this.#populateTable(data);
    }
}

GetPhone.handlePageLoad(); 