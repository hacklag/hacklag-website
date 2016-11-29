import { action, request, parseTweet } from 'utils';

const TWEETS_URL = `https://api.syncano.io/v1.1/instances/${SYNCANO_INSTANCE_NAME}/endpoints/data/fetchtweets/get/`;
const EVENTS_URL = `https://api.syncano.io/v1.1/instances/${SYNCANO_INSTANCE_NAME}/endpoints/scripts/p/e7f851e8f6f2e279e94566410f4e13be09b1917b/fetchevents/?template=script_json`;
const SPONSORS_URL = `https://api.syncano.io/v1.1/instances/${SYNCANO_INSTANCE_NAME}/endpoints/data/fetchpartners/get/`;

export default class Data {
  @action fetchTweets = async () => {
    const { objects } = await request.get(TWEETS_URL);

    this.store.data.tweets = objects.map(item => ({
      ...item,
      tweet_text: parseTweet(item.tweet_text),
      tweet_url: `https://twitter.com/statuses/${item.tweet_id}`,
      user_url: `https://twitter.com/${item.user_screen_name}`,
    }));
  }

  @action fetchEvents = async () => {
    this.store.data.events = await request.get(EVENTS_URL);
  }

  @action fetchConnections = async () => {
    // eslint-disable-next-line prefer-template
    const { objects } = await request.get(SPONSORS_URL + '?query={"location": {"_contains": ["' + this.store.data.location + '"]}}');
    this.store.data.sponsors = objects.filter(item => item.type.includes('sponsor'));
    this.store.data.founders = objects.filter(item => item.type.includes('founder'));
    this.store.data.partners = objects.filter(item => item.type.includes('partner'));
  }
}
