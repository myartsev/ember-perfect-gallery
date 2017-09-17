import Ember from 'ember';
import layout from '../templates/components/ember-perfect-gallery';

export default Ember.Component.extend({
  layout,
  photos: [],
  photosChanged: Ember.observer('photos', function() {
    var scrollX = window.scrollX,
      scrollY = window.scrollY;

    Ember.run.schedule('afterRender', () => {
      var containerElement = document.getElementById('ember-perfect-gallery');
      this.perfectLayout(containerElement, this.get('photos'));

      Ember.run.schedule('afterRender', () => {
        window.scrollTo(scrollX, scrollY);
      });
    });
  }),

  // https://github.com/mike-north/ember-resize/issues/43
  resizeService: Ember.inject.service('resize'),

  didInsertElement() {
    this._super(...arguments);
    this.get('photosChanged');

    var containerElement = document.getElementById('ember-perfect-gallery');
    this.perfectLayout(containerElement, this.get('photos'));

    this.get('resizeService').on('didResize', () => {
      var numOfPhotos = this.get('photos').length;
      for (var i = 0; i < numOfPhotos; i++) {
        var photoElement = document.getElementsByClassName('ember-perfect-gallery-image')[i];
        photoElement.style.width = `0px`;
        photoElement.style.height = `0px`;
      }

      this.perfectLayout(containerElement, this.get('photos'));
    });
  },

  perfectLayout(node, photos) {
    // The '-20' magical number is a reduction in the width of gallery container DOM element.
    // It is necessary for the images to stay in one row as the window is resized.
    // It was found through experimentation to work well at this vaue.
    // perfect-layout computes the sizes well, but there's something in the DOM sizing (no extra padding/margins added)
    // itself that ends up increasing the width and wrapping elements around.
    // TODO: https://github.com/myartsev/ember-perfect-gallery/issues/2: needs investigation, I don't like magic numbers.
    var width = $(node).width() - 20;
    const perfectRows = perfectLayout(photos, width, $(window).height(), {
      margin: 2
    });

    var photoIndex = 0;
    perfectRows.forEach(function(row) {
      if(!row.forEach) {
        setImageStyles(row);
      } else {
        row.forEach(function(img) {
          setImageStyles(img);
        });
      }

      function setImageStyles(img) {
        var photoElement = document.getElementsByClassName('ember-perfect-gallery-image')[photoIndex++];
        photoElement.style.width = `${img.width}px`;
        photoElement.style.height = `${img.height}px`;
        photoElement.style.background = `url('${img.src}')`;
        photoElement.style['background-size'] = 'cover';
      };
    });
  },
});
