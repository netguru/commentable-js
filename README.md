# Commentable.js

### What is it?

Commentable.js is the official client-side library for [Commentable.rs](https://github.com/netguru/commentable-rs).
It's implemented using WebComponents, which makes it lightweight and easy to embed on any website.
The styles are highly customizable and you can even provide your own set of reactions!

### Installation

The easiest way to install the Commentable components is by using CDN:

```html
<script src="https://unpkg.com/commentable@1.0.0/dist/commentable.js"></script>
```

Alternatively, if you're using Webpack or any other bundler you can install the library from NPM:

```shell
$> npm install commentable
```

but in this case you also have to initialize the components by including this script somewhere in the root of your application:

```javascript
import { applyPolyfills, defineCustomElements } from 'commentable/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

### Usage

You can embed Commentable simply by using the `<ct-commentable>` tag. Here's an example:

```html
<!-- ct-commentable will match the width and height of it's parent, so you can easily change it's size -->
<div class="container">
  <ct-commentable
    commentable-id="SOME_ID"
    api-url="https://rilv94av2j.execute-api.eu-central-1.amazonaws.com/Prod/"
    google-id-token="SOME_ID_TOKEN"
    config='{
      "reactions": [
        {
          "type": "like",
          "code": "👍"
        },
        {
          "type": "dislike",
          "code": "👎"
        }
      ]
    }'
  ></ct-commentable>
</div>
```

The `container` div is not necessary, but you will need to wrap `ct-commentable` in some parent element to define it's size.

### Attributes

- `commentable-id` - this is an arbitrary ID that identifies the entity owning the comments. For example, on a news website the commentable-id should be the article id. It can also be a name, as long as it's unique. In a SPA application you can dynamically change this attribute and the component will update it's contents.
- `api-url` - this is the URL of your [Commentable.rs](https://github.com/netguru/commentable-rs) instance. Refer to it's README for more information.
- `config` - You can specify the available reactions here. The `type` has to be a unique name of the reaction and `code` can be an emoji or other text. Since WebComponents don't support JSON attributes, the value needs to be a string, but it has to contain a valid JSON object.
- `google-id-token` - this attribute can be set when the user is authenticated. It needs to be the `id_token` from Google's Auth Response. See example below.

### Google Auth example

Here's a basic authentication example using the Google Sign In button:


Import the Google SDK first:
```html
...
<head>
  <meta name="google-signin-scope" content="profile email">
  <meta name="google-signin-client_id" content="YOUR_GOOGLE_CLIENT_ID_HERE">
  <script src="https://apis.google.com/js/platform.js" async defer></script>
</head
...
```

Now we can use the Sign In button:
```html
<body>
  <div className="g-signin2" data-onsuccess="onSignIn"></div> <!-- the value of data-onsuccess is a function name -->
</body>
```

And here's how we can handle the authentication event:
```html
<body>
  <script>
    function onSignIn(googleUser) {
      const commentable = document.querySelector('ct-commentable');
      const idToken = googleUser.getAuthResponse().id_token;
      commentable.setAttribute('google-id-token', idToken);
    }
  </script>
</body>
```

