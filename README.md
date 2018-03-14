# ieupdate.js

## Usage

1. Download this plugin
2. Write the following code just before the`</body>`

```html
<!--[if lt IE 9.0]>
  <script type="text/javascript" src="ieupdate/src/js/ieupdate.min.js"></script>
  <script type="text/javascript">
    var __noconflict = true;
    (function(d) {
      if(typeof jQuery=='undefined'){
        var IEUPDATE_SCRIPT = d.createElement( 'script' );
        IEUPDATE_SCRIPT.type = 'text/javascript';
        IEUPDATE_SCRIPT.src = '//code.jquery.com/jquery-3.3.1.slim.js';
        IEUPDATE_SCRIPT.onload = _IEUPDATE_INIT;
        d.body.appendChild( IEUPDATE_SCRIPT );
      } else {
        _IEUPDATE_INIT();
      }
    })(document);
  </script>
<![endif]-->
```

minify code
```html
<!--[if lt IE 9.0]><script type="text/javascript" src="ieupdate/src/js/ieupdate.min.js"></script><script type="text/javascript">var __noconflict = true;(function(d) {if(typeof jQuery=='undefined'){var s=d.createElement('script');s.type='text/javascript';s.src='//code.jquery.com/jquery-3.3.1.slim.js';s.onload=_IEUPDATE_INIT;d.body.appendChild(s);}else{_IEUPDATE_INIT();}})(document);</script><![endif]-->
```

## OPTIONS
```javascript
var IEUPDATE_OPTIONS = {
  title:      'title text',
  message:    'message text',
};
```
