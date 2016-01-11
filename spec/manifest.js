// Paths are relative to the /spec/support folder
var manifest = {
  support : [
    '../../node_modules/jquery/dist/jquery.js',
    '../../javascripts/govuk/modules.js',
    '../../javascripts/govuk/modules/auto-track-event.js',
    '../../javascripts/govuk/multivariate-test.js',
    '../../javascripts/govuk/primary-links.js',
    '../../javascripts/govuk/progressive-disclosure.js',
    '../../javascripts/govuk/stick-at-top-when-scrolling.js',
    '../../javascripts/govuk/stop-scrolling-at-footer.js',
    '../../javascripts/govuk/selection-buttons.js',
    '../../javascripts/govuk/analytics/google-analytics-universal-tracker.js',
    '../../javascripts/govuk/analytics/analytics.js',
    '../../javascripts/govuk/analytics/error-tracking.js',
    '../../javascripts/govuk/analytics/external-link-tracker.js',
    '../../javascripts/govuk/analytics/download-link-tracker.js'
  ],
  test : [
    '../unit/modules.spec.js',
    '../unit/Modules/auto-track-event.spec.js',
    '../unit/multivariate-test.spec.js',
    '../unit/primary-links.spec.js',
    '../unit/stick-at-top-when-scrolling.spec.js',
    '../unit/selection-button.spec.js',
    '../unit/analytics/google-analytics-universal-tracker.spec.js',
    '../unit/analytics/analytics.spec.js',
    '../unit/analytics/error-tracking.spec.js',
    '../unit/analytics/external-link-tracker.spec.js',
    '../unit/analytics/download-link-tracker.spec.js'
  ]
};
