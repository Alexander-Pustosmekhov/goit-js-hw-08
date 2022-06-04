import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Variables
const player = new Player('vimeo-player', {});
const LOCAL_STORAGE = 'videoplayer-current-time';

refreshPlayerTime();

player.on('timeupdate', throttle(saveDataToStorage, 1000));

// Functions
function saveDataToStorage(event) {
  localStorage.setItem(LOCAL_STORAGE, event.seconds);
}

function refreshPlayerTime() {
  player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE) ?? 0);
}
