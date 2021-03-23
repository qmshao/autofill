// ==UserScript==
// @name         Allentown Vaccine Autofill
// @namespace    http://qmshaophoto.com/
// @version      0.1
// @description  Auto fill
// @author       qmshao
// @match        https://allentownpaclinics.schedulemeappointments.com/?mode=showcapture*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Script Start');

    const data = [
        {
            name: 'Someone 1',
            setting: [
                { input:'First Name', selector: 'firstname1', value: 'Roy' },
                { input:'Last Name', selector: 'lastname1', value: 'Keane' },
                { input:'Category', selector: 'select_the_category_that_best_describes1', value: 2 },
                { input:'1st Dose', selector: 'this_registration_is_only_for_1st1', value: 1 },
                { input:'Email', selector: 'email1', value: 'abc@xyz.com' },
                { input:'Email Verify', selector: 'vemail1', value: 'abc@xyz.com' },
                { input:'Phone', selector: 'phone1', value: '1232-33' },
                { input:'Age', selector: 'age1', value: 66 },
                { input:'Birth Month', selector: 'dobM1', value: '01' },
                { input:'Birth Day', selector: 'dobD1', value: '15' },
                { input:'Birth Year', selector: 'dobY1', value: '1955' },
                { input:'Street', selector: 'street1', value: '123 st' },
                { input:'City', selector: 'city1', value: 'Allentown' },
                { input:'State', selector: 'state1', value: 'PA' },
                { input:'Zipcode', selector: 'zip1', value: 18104 },
                { input:'County', selector: 'county1', value: 'Lehigh' },
                { input:'Race', selector: 'race1', value: 2 },
                { input:'Ethnicity', selector: 'ethnicity1', value: 2 },
                { input:'Q1', selector: 'do_you_or_anyone_living_in_the1', value: 2 },
                { input:'Q2', selector: 'have_you_or_anyone_living_in_the1', value: 2 },
                { input:'Q3', selector: 'have_you_or_anyone_living_in_the__1', value: 2 },
                { input:'Q4', selector: 'are_you_or_anyone_living_in_the1', value: 2 },
                { input:'Q5', selector: 'have_you_previously_received_a1', value: 2 },
                { input:'Q6', selector: 'have_you_had_a_severe_allergic1', value: 2 },
                { input:'Q7', selector: 'are_you_immunocompromised__have1', value: 2 },
                { input:'Q8', selector: 'do_you_have_a_fever_or_any_ill1', value: 2 },
                { input:'Q9', selector: 'habe_you_had_any_vaccines_in_the1', value: 2 },
                { input:'Q10', selector: 'could_you_become_pregnant_in_the1', value: 2 },
            ]
        },
        {
            name: 'Someone 2',
            setting: [
                { input:'First Name', selector: 'firstname1', value: 'Pavel' },
                { input:'Last Name', selector: 'lastname1', value: 'Nedved' },
                { input:'Category', selector: 'select_the_category_that_best_describes1', value: 2 },
                { input:'1st Dose', selector: 'this_registration_is_only_for_1st1', value: 1 },
                { input:'Email', selector: 'email1', value: 'zzabc@xyz.com' },
                { input:'Email Verify', selector: 'vemail1', value: 'zzabc@xyz.com' },
                { input:'Phone', selector: 'phone1', value: '422-334-5353' },
                { input:'Age', selector: 'age1', value: 66 },
                { input:'Birth Month', selector: 'dobM1', value: '09' },
                { input:'Birth Day', selector: 'dobD1', value: '15' },
                { input:'Birth Year', selector: 'dobY1', value: '1975' },
                { input:'Street', selector: 'street1', value: '345 Blvd' },
                { input:'City', selector: 'city1', value: 'Allentown' },
                { input:'State', selector: 'state1', value: 'PA' },
                { input:'Zipcode', selector: 'zip1', value: 18104 },
                { input:'County', selector: 'county1', value: 'Lehigh' },
                { input:'Race', selector: 'race1', value: 2 },
                { input:'Ethnicity', selector: 'ethnicity1', value: 2 },
                { input:'Q1', selector: 'do_you_or_anyone_living_in_the1', value: 2 },
                { input:'Q2', selector: 'have_you_or_anyone_living_in_the1', value: 2 },
                { input:'Q3', selector: 'have_you_or_anyone_living_in_the__1', value: 2 },
                { input:'Q4', selector: 'are_you_or_anyone_living_in_the1', value: 2 },
                { input:'Q5', selector: 'have_you_previously_received_a1', value: 2 },
                { input:'Q6', selector: 'have_you_had_a_severe_allergic1', value: 2 },
                { input:'Q7', selector: 'are_you_immunocompromised__have1', value: 2 },
                { input:'Q8', selector: 'do_you_have_a_fever_or_any_ill1', value: 2 },
                { input:'Q9', selector: 'habe_you_had_any_vaccines_in_the1', value: 2 },
                { input:'Q10', selector: 'could_you_become_pregnant_in_the1', value: 2 },
            ]
        },
    ]

    let i = 0;
    for (const d of data){
        const button = $(`<button type="button" style="position: fixed; right: 3rem; top: ${3 + 3 * i++}rem">${d.name}</button>`);
        button.click(() => {
            for (const s of d.setting){
//                 console.log(s.selector)
                const dom = document.getElementById(s.selector);
                if (dom.tagName.toUpperCase() == 'SELECT' && s.value.toFixed){
                    dom.selectedIndex = s.value;
                } else {
                    dom.value = s.value
                }
            }
        });
        $('body').append(button);
    }


})();