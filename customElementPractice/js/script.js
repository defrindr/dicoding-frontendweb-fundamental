import clubList from './clubs.js'
import './club-list.js'
import './app-bar.js'
import './search-bar.js'

const clubListElement = document.createElement('club-list');
clubListElement.clubs = clubList;

document.body.appendChild(clubListElement);

