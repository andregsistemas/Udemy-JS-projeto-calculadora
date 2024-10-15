class CalcController {
    constructor() {
        this._operation = [];
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display'); //Por convenção coloque _ oara sinalizar que o atributo é privado
        this._dateEL = document.querySelector('#data');
        this._timeEL = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        this.setDisplayDateTime();      //Inicia o método para atualizar o primeiro segundo ao abrir o programa
        setInterval(() => {             //loop para atualizar a hora
            this.setDisplayDateTime();
        }, 1000)

    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    addEventListenerAll(element, events, fn) {
        events.split(', ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    clearAll() {
        this._operation = []; //Inicia o array sem nenhum número
    }

    clearEntry() {
        this._operation.pop //pop apaga o ultimo item do array
    }

    addOperation(value) {
        this._operation.push(value);
        console.log(this._operation);
    }
    setError() {
        this.displayCalc = "Error"
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':

                break;

            case 'igual':

                break;

            case 'subtracao':

                break;

            case 'multiplicao':

                break;

            case 'divisao':

                break;

            case 'porcento':

                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click, drag', e => {
                let textBtn = btn.className.baseVal.replace("btn-", "");
                this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, 'mouseover, mouseup, mousedown', e => {
                btn.style.cursor = "pointer";
            });
        });
    }

    set displayTime(value) {
        return this._timeEL.innerHTML = value;
    }

    get displayTime() {
        return this._timeEL.innerHTML;
    }

    set displayDate(value) {
        return this._dateEL.innerHTML = value;
    }

    get displayDate() {
        this._currentDate = valor;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor) {
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(valor) {
        this._currentDate = valor;
    }

}