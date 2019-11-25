

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let btnTab = document.querySelectorAll('.info-header-tab'),
        wrapperTab = document.querySelector('.info-header'),
        contentTab = document.querySelectorAll('.info-tabcontent');



    function hideTabContent(a) {
        for (let i = a; i < contentTab.length; i++) {
            contentTab[i].classList.remove('show');
            contentTab[i].classList.add('hide');
        };
    };

    hideTabContent(1);


    function showTabContent(b) {
        if (contentTab[b].classList.contains('hide')) {
            contentTab[b].classList.remove('hide');
            contentTab[b].classList.add('show');
        };
    };


    wrapperTab.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < btnTab.length; i++) {
                if (target == btnTab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                };
            };
        };
    });

});