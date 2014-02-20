*This repository is a mirror of the [component](http://component.io) module [jaycetde/form-disable](http://github.com/jaycetde/form-disable). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jaycetde-form-disable`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# form-disable

  Disable and enable all input inside a form

## Installation

    $ component install JayceTDE/form-disable

## API

```javascript
var disabler = require('form-disable')
  , form = document.querySelector('form')
;

disabler.disable(form);

disabler.enable(form);
```

## License

  MIT
