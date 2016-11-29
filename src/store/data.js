import { computed } from 'utils';

export default {
  tweets: [],
  events: [],
  sponsors: [],
  partners: [],
  founders: [],
  location: 'Białystok',

  @computed get sponsorsItemsCount() {
    const count = this.sponsors.length;
    const gridSponsorsCount = (count - 6) / 4;

    return count === 1 ? 1 :
           count < 4 ? 2 :
           count < 7 ? 3 :
           gridSponsorsCount % 1 === 0 ? (gridSponsorsCount + 3) : parseInt((gridSponsorsCount + 4), 10);
  },

  @computed get sponsorsItems() {
    let items = [];

    const divide = [
      { index: 0, end: 1 },
      { index: 1, end: 3 },
      { index: 3, end: 6 },
      { index: 6, end: 10 },
    ];

    for (let item = 0; item < this.sponsorsItemsCount; item++) {
      items = items.concat(
        [this.sponsors.slice(
          item < 4 ? divide[item].index : divide[3].end + (4 * (item - 4)),
          item < 4 ? divide[item].end : divide[3].end + (4 * (item - 4)) + 4,
        )]
      );
    }

    return items;
  },
};
