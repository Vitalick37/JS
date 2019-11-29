

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


    // Time

    let deadline = '2020-01-01';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        if (10 / seconds > 1) {
            seconds = ('0' + seconds);
        };
        if (10 / minutes > 1) {
            minutes = ('0' + minutes);
        };
        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            };
        };

    };

    setClock('timer', deadline);

});