class AppBar extends HTMLElement {
    connectedCallback(){
        this.title = this.getAttribute('title') || 'Title';
        this.desc = this.getAttribute('desc') || 'Description';
        this.render();
    }

    render(){
        this.innerHTML = `
        <header>
            <div class="container">
                <h1>${this.title}</h1>
                <p>${this.desc}</p>
            </div>
        </header>
        `;
    }

    attributeChangedCallback(name,newV,oldV){
        this[name] = newV;
        this.render();
    }


    static get ObserveAttribute(){
        return ["title","desc"];
    }
}

customElements.define('app-bar',AppBar);
