class SearchBar extends HTMLElement {
    connectedCallback(){
        this.placeholder = this.getAttribute('placeholder') || "Masukkan kata kunci";
        this.buttonValue = this.getAttribute('btn-val') || "Submit";
        this.render();
    }

    render(){
        this.innerHTML = `
        <div>
            <input type="text"
            placeholder="${this.placeholder}">
            <button>${this.buttonValue}</button>
        </div>
        `;
    }

    attributeChangedCallback(name, newV, oldV) {
        this[name] = newV;
        this.render();
    }

    static get observeAttribute(){
        return ["placeholder","buttonValue"]
    }
}

customElements.define('search-bar',SearchBar);

