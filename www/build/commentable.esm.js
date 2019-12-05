import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-7fdcb187.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["ct-compose",[[1,"ct-compose",{"apiUrl":[1,"api-url"],"commentableId":[1,"commentable-id"],"comment":[8],"isExpanded":[32],"message":[32]}]]],["ct-button",[[1,"ct-button",{"small":[4],"active":[4]}]]],["ct-avatar",[[1,"ct-avatar",{"user":[8],"nested":[4]}]]],["ct-actions",[[1,"ct-actions",{"comment":[8],"reactionsExpanded":[32],"replyComposeVisible":[32]}]]],["ct-comment",[[1,"ct-comment",{"comment":[8],"nested":[4],"level":[2],"areRepliesVisible":[32]}]]],["ct-commentable",[[1,"ct-commentable",{"commentableId":[1,"commentable-id"],"googleIdToken":[1,"google-id-token"],"apiUrl":[1,"api-url"],"config":[8],"primaryColor":[1,"primary-color"],"currentUser":[32],"comments":[32],"isLoading":[32]}]]],["context-consumer",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]]], options);
});
