describe("progressive-disclosure", function () {

  beforeEach(function () {
    $detailsExample = $(
      '<details>' +
        '<summary><span class="summary">Help with nationality</span></summary>' +
        '<div class="panel panel-border-narrow">' +
          '<p>' +
            'If you’re not sure about your nationality, try to find out from an official document like a passport or national ID card.' +
          '</p>' +
          '<p>' +
            'We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.' +
          '</p>' +
        '</div>' +
      '</details>'
    );
    $(document.body).append($detailsExample);
  });

  afterEach(function () {
    $detailsExample.remove();
  });

  describe('When there is a details block on the page', function () {

    it('Should hide the contents initially', function () {
      expect($('details .panel').is(':visible')).toBe(false);
    });

    it('Should show the contents when the summary is clicked', function () {
      $('summary').trigger('click');
      expect($('details .panel').is(':visible')).toBe(true);
    });

  });

});
