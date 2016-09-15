import { observable, action, request, parseTweet } from 'utils';

const TWEETS_URL = 'https://api.syncano.io/v1.1/instances/silent-rain-3110/endpoints/data/fetchtweets/get/';
const EVENTS_URL = 'https://api.syncano.io/v1.1/instances/silent-rain-3110/endpoints/scripts/p/e7f851e8f6f2e279e94566410f4e13be09b1917b/fetchevents/?template=script_json';
const SPONSORS_URL = 'https://api.syncano.io/v1.1/instances/silent-rain-3110/endpoints/data/fetchsponsors/get/';

export default class dataRoot {
  tweets = {
    @observable loading: false,
    @observable items: [],
  };

  events = {
    @observable loading: false,
    @observable items: [],
  };

  sponsors = {
    @observable loading: false,
    @observable items: [],
  };

  @action fetchTweets() {
    this.tweets.loading = true;

    (async () => {
      const { objects } = await request.get(TWEETS_URL);

      this.tweets.items = objects.map(item => ({
        ...item,
        tweet_text: parseTweet(item.tweet_text),
        tweet_url: `https://twitter.com/statuses/${item.tweet_id}`,
        user_url: `https://twitter.com/${item.user_screen_name}`,
      }));

      this.tweets.loading = false;
    })();
  }

  @action fetchEvents() {
    this.events.loading = true;

    (async () => {
      this.events.items = await request.get(EVENTS_URL);
      this.events.loading = false;
    })();
  }

  @action fetchSponsors() {
    this.sponsors.loading = true;

    (async () => {
      const response = await request.get(SPONSORS_URL);
      this.sponsors.items = response.objects;
      this.sponsors.loading = false;
    })();
  }
}
