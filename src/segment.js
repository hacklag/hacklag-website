import analytics from 'analyticsjs';

if (ANALYTICS_WRITE_KEY !== undefined && ANALYTICS_WRITE_KEY.length > 0) {
  analytics.load(ANALYTICS_WRITE_KEY);
}

export default analytics;
