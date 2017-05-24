# ember-perfect-gallery

Beautifully positions a set of images in a responsive gallery.

Inspired by [perfect-layout](https://medium.com/swlh/in-search-of-the-perfect-image-gallery-34f46f7615a1) & [chromatic.io](www.chromatic.io).

### Full screen
![](docs/dummy_full_screen.jpg)

### Resized
![](docs/dummy_resized.jpg)

## Usage

`{{ember-perfect-gallery photos=model}}`

where photos is a JSON array of images with a _src_ and _ratio_ properties:

```
[{
  "src": "path/to/images/1.jpg",
  "ratio": 0.95907928388,
}, {
  "src": "path/to/images/2.jpg",
  "ratio": 1.49925037481,
},
...
]
```

## Installation

- `git clone https://github.com/myartsev/ember-perfect-gallery.git` this repository
- `cd ember-perfect-gallery`
- `npm install`
- `bower install`

## Running

- `ember serve`
- Visit the dummy test app (from ember-perfect-gallery/tests/dummy) at <http://localhost:4200>.

## Running Tests

**TODO:** [Need to write tests, help wanted if you can contribute](https://github.com/myartsev/ember-perfect-gallery/issues/1)

- `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
- `ember test`
- `ember test --server`

## Building

- `ember build`

For more information on using ember-cli, visit <https://ember-cli.com/>.
