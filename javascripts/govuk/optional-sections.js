(function () {
  "use strict"
  var root = this,
      $ = root.jQuery;

  if (typeof GOVUK === 'undefined') { root.GOVUK = {}; }

  var OptionalSection = function ($elm, opts) {
    this.$option = $elm;
    this.$section = $('#' + this.$option.attr('aria-controls'));
    this.selectedClass = 'selected';
    this.deselectedClass = 'deselected';
   if (opts !== undefined) {
      $.each(opts, function (optionName, optionObj) {
        this[optionName] = optionObj;
      }.bind(this));
    }
    this.bindEvents();
    this.setDefaultState();
  };
  OptionalSection.prototype.bindEvents = function () {
    this.$option.on('change', function (e) {
      this.onOptionChange();
    }.bind(this));
  };
  OptionalSection.prototype.onOptionChange = function () {
    if (this.$option.is(':checked')) {
      this.showSection();
    } else {
      this.hideSection();
    }
  };
  OptionalSection.prototype.showSection = function () {
    this.$section.removeClass(this.deselectedClass);
    this.$section.addClass(this.selectedClass);
    this.$section.attr({
      'aria-hidden' : false,
      'aria-expanded' : true
    });
  };
  OptionalSection.prototype.hideSection = function () {
    this.$section.removeClass(this.selectedClass);
    this.$section.addClass(this.deselectedClass);
    this.$section.attr({
      'aria-hidden' : true,
      'aria-expanded' : false
    });
  };
  OptionalSection.prototype.setDefaultState = function () {
    this.onOptionChange();
  };

  GOVUK.OptionalSection = OptionalSection;
}).call(this);
