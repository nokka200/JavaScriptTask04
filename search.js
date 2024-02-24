"use strict";
import { GetPhone } from './phone.js';

$(document).ready(function () { 
    $('[name="submit"]').click(async function () {
        let content = await GetPhone.getData();
        query(content);
    });
});

const query = (content) => { 
    let toSearch = $('[name="nimi"]').val().toLowerCase();
    let result = content.filter(item => item.nimi.toLowerCase().includes(toSearch));
    console.log(result);
    // TODO hakee tiedot nimen persuteella, pitää vielä lisätä
    // 1. numero haku
    // 2. tehdä taulukko haku tuloksista
    // 3 rdy
}