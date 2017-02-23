import moments from '../data/moments.json';
import styles from './styles.css';

import { ytElement } from './youtube';
import { parseTimestamp, padTimestamp } from './util';


function momentSortFn(a, b) {
  const tsa = parseTimestamp(a.timestamp);
  const tsb = parseTimestamp(b.timestamp);

  /* eslint-disable no-mixed-operators */
  const seca = tsa.h * 3600 + tsa.m * 60 + tsa.s;
  const secb = tsb.h * 3600 + tsb.m * 60 + tsb.s;
  /* eslint-enable no-mixed-operators */

  if (seca === secb) return 0;
  return seca > secb ? 1 : -1;
}

export function momentElement(episode, moment) {
  const li = document.createElement('li');
  li.classList.add(styles.moment);

  const text = document.createElement('span');
  text.classList.add(styles.momentText);
  const momentTimestamp = document.createElement('span');
  const momentDescription = document.createElement('span');
  momentTimestamp.classList.add(styles.momentTimestamp);
  momentDescription.classList.add(styles.momentDescription);
  momentTimestamp.innerHTML = `[${padTimestamp(moment.timestamp)}]`;
  const momentDescriptionText = `${moment.tags ? `[${moment.tags}] ` : ''}${moment.description}`;
  momentDescription.innerHTML = momentDescriptionText;
  text.appendChild(momentTimestamp);
  text.appendChild(momentDescription);

  li.appendChild(text);

  let yt;
  let addYtPlayer;
  let removeYtPlayer;
  addYtPlayer = () => {  // eslint-disable-line prefer-const
    const width = li.getBoundingClientRect().width;
    yt = li.appendChild(ytElement(episode, moment, width));
    text.onclick = () => removeYtPlayer();
  };
  removeYtPlayer = () => {
    if (yt) yt.remove();
    yt = null;
    text.onclick = () => addYtPlayer();
  };
  text.onclick = () => addYtPlayer();

  li.search = (searchText) => {
    if (momentDescriptionText.toLowerCase().includes(searchText.toLowerCase())) {
      li.classList.remove(styles.searchHidden);
      return 1;
    } else {  // eslint-disable-line no-else-return
      li.classList.add(styles.searchHidden);
      removeYtPlayer();
      return 0;
    }
  };

  li.show = () => li.classList.remove(styles.hidden);
  li.hide = () => { removeYtPlayer(); li.classList.add(styles.hidden); };

  return li;
}


export function momentsElement(episode) {
  const ul = document.createElement('ul');
  ul.classList.add(styles.moments);

  const momentItems = [];

  Object.values(moments)
    .filter(m => m.episodeId === episode.id)
    .sort(momentSortFn)
    .forEach(m => momentItems.push(ul.appendChild(momentElement(episode, m))));

  ul.nMoments = momentItems.length;

  ul.search = (searchText) => {
    let nMoments = 0;
    momentItems.forEach((m) => {
      nMoments += m.search(searchText);
      return null;
    });
    ul.nMoments = nMoments;
  };

  ul.hide = () => {
    momentItems.forEach(m => m.hide());
    ul.classList.add(styles.hidden);
  };
  ul.show = () => {
    momentItems.forEach(m => m.show());
    ul.classList.remove(styles.hidden);
  };

  return ul;
}
