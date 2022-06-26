import { observable, action, makeAutoObservable } from 'mobx'

export class InputStore {
    constructor() {
        this.input = '';
        this.fillter ='';

        makeAutoObservable(this, {
            input: observable,
            fillter:observable,
            handleInput: action
        })
    }

    handleInput = (name, value) => {
        this[name] = value
    }
}
