/* eslint-env node */
'use strict';

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

const photoSeedData = [{
  "src": "assets/images/1.jpg",
  "ratio": 0.95907928388,
  "href": "https://github.com/myartsev/ember-perfect-gallery"
}, {
  "src": "assets/images/2.jpg",
  "ratio": 1.49925037481,
}, {
  "src": "assets/images/3.jpg",
  "ratio": 1.52905198777,
}, {
  "src": "assets/images/4.jpg",
  "ratio": 1.52905199,
}, {
  "src": "assets/images/5.jpg",
  "ratio": 0.72727273,
}, {
  "src": "assets/images/6.jpg",
  "ratio": 1.07181136,
}, {
  "src": "assets/images/7.jpg",
  "ratio": 2.72479564,
}, {
  "src": "assets/images/8.jpg",
  "ratio": 1.11275964
}, {
  "src": "assets/images/9.jpg",
  "ratio": 1.46627566,
}, {
  "src": "assets/images/10.jpg",
  "ratio": 1.73611111,
}, {
  "src": "assets/images/11.jpg",
  "ratio": 1.13507378,
}, {
  "src": "assets/images/12.jpg",
  "ratio": 1.13250283,
}, {
  "src": "assets/images/13.jpg",
  "ratio": 1.32802125,
}, {
  "src": "assets/images/14.jpg",
  "ratio": 0.66666667,
}, {
  "src": "assets/images/15.jpg",
  "ratio": 1.43061516,
}];

let photoData = [];
let index = 0;

module.exports = function(app) {
  const globSync = require('glob').sync;
  const mocks = globSync('./mocks/**/*.js', {
    cwd: __dirname
  }).map(require);
  const proxies = globSync('./proxies/**/*.js', {
    cwd: __dirname
  }).map(require);

  // Log proxy requests
  const morgan = require('morgan');
  app.use(morgan('dev'));

  initPhotoData();

  app.get('/photos', function(req, res) {
    res.json({
      data: photoData
    });
  });

  app.get('/add-photo', function(req, res) {
    photoData.push({
      type: 'photo',
      id: photoData.length,
      attributes: {
        src: photoSeedData[index].src,
        ratio: photoSeedData[index].ratio,
        href: photoSeedData[index].href
      }
    });

    index++;
    if(index === photoSeedData.length) {
      index = 0;
    }

    res.send();
  });

  mocks.forEach(route => route(app));
  proxies.forEach(route => route(app));
};

function initPhotoData() {
  photoSeedData.forEach((photoSeed) => {
    photoData.push({
      type: 'photo',
      id: photoData.length,
      attributes: {
        src: photoSeed.src,
        ratio: photoSeed.ratio,
        href: photoSeed.href
      }
    });
  });
}
