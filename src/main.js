import './styles/styles.scss';
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

import './custom/inu-bar.js';
import './custom/result-inu.js';
import './custom/inu-toast.js';
import fetchRandom from './custom/fetch-inu.js';

const submitBtn = document.getElementById('submitButton');
    
submitBtn.addEventListener('click', ev => {
    ev.preventDefault();

    const getNama = () => {
        return document.querySelector('#inputNama').value;
    }

    const setNama = () => {
        document.querySelector('#outputName').innerText = getNama();
    }

    setNama();

    fetchRandom();

    const toastElList = [].slice.call(document.querySelectorAll('.toast'));
    const toastList = toastElList.map((toastEl) => {
        return new bootstrap.Toast(toastEl);
    });
    toastList.forEach(toast => toast.show());
});
