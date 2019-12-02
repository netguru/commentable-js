import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-52e4c7ed.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["context-consumer",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]],["ct-commentable",[[1,"ct-commentable",{"commentableId":[1,"commentable-id"],"googleIdToken":[1,"google-id-token"],"apiUrl":[1,"api-url"],"config":[8],"currentUser":[32]}]]],["ct-comment",[[1,"ct-comment"]]]], options);
});
