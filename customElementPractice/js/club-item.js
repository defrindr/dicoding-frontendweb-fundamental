class ClubItem extends HTMLElement {
    set club(club){
        this._club = club;
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="container">
            <img src="${this._club.src}" alt="${this._club.alt}">
            <p>
                ${this._club.content}
            </p>
        </div>
        `;
    }
}

customElements.define('club-item',ClubItem);
