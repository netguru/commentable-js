import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-933c991d.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["ct-comment",[[1,"ct-comment"]]],["ct-commentable",[[1,"ct-commentable",{"commentableId":[1,"commentable-id"],"googleIdToken":[1,"google-id-token"],"apiUrl":[1,"api-url"],"config":[8]}]]]], options);
});
