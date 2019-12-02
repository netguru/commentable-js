import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-91da8f92.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["ct-avatar",[[1,"ct-avatar",{"user":[8]}]]],["ct-comment",[[1,"ct-comment",{"commentableId":[1,"commentable-id"],"config":[8],"comment":[8]}]]],["ct-commentable",[[1,"ct-commentable",{"commentableId":[1,"commentable-id"],"googleIdToken":[1,"google-id-token"],"apiUrl":[1,"api-url"],"config":[8],"currentUser":[32],"comments":[32],"isLoading":[32]}]]],["context-consumer",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]]], options);
});
