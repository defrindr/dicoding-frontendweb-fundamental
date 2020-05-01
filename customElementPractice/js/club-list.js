import './club-item.js'

class ClubList extends HTMLElement {
    set clubs(clubs){
        this._clubs = clubs;
        this.render();
    }

    render(){
        this._clubs.forEach( (club) => {
            const clubItem = document.createElement('club-item');
            clubItem.club = club;
            this.appendChild(clubItem);
        });
    }
}

customElements.define('club-list',ClubList);
