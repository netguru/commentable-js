/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CtAvatar {
    'user': any;
  }
  interface CtComment {
    'comment': any;
    'commentableId': string;
    'config': any;
  }
  interface CtCommentable {
    'apiUrl': string;
    'commentableId': string;
    'config': any;
    'googleIdToken': string;
  }
}

declare global {


  interface HTMLCtAvatarElement extends Components.CtAvatar, HTMLStencilElement {}
  var HTMLCtAvatarElement: {
    prototype: HTMLCtAvatarElement;
    new (): HTMLCtAvatarElement;
  };

  interface HTMLCtCommentElement extends Components.CtComment, HTMLStencilElement {}
  var HTMLCtCommentElement: {
    prototype: HTMLCtCommentElement;
    new (): HTMLCtCommentElement;
  };

  interface HTMLCtCommentableElement extends Components.CtCommentable, HTMLStencilElement {}
  var HTMLCtCommentableElement: {
    prototype: HTMLCtCommentableElement;
    new (): HTMLCtCommentableElement;
  };
  interface HTMLElementTagNameMap {
    'ct-avatar': HTMLCtAvatarElement;
    'ct-comment': HTMLCtCommentElement;
    'ct-commentable': HTMLCtCommentableElement;
  }
}

declare namespace LocalJSX {
  interface CtAvatar {
    'user'?: any;
  }
  interface CtComment {
    'comment'?: any;
    'commentableId'?: string;
    'config'?: any;
  }
  interface CtCommentable {
    'apiUrl'?: string;
    'commentableId'?: string;
    'config'?: any;
    'googleIdToken'?: string;
  }

  interface IntrinsicElements {
    'ct-avatar': CtAvatar;
    'ct-comment': CtComment;
    'ct-commentable': CtCommentable;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ct-avatar': LocalJSX.CtAvatar & JSXBase.HTMLAttributes<HTMLCtAvatarElement>;
      'ct-comment': LocalJSX.CtComment & JSXBase.HTMLAttributes<HTMLCtCommentElement>;
      'ct-commentable': LocalJSX.CtCommentable & JSXBase.HTMLAttributes<HTMLCtCommentableElement>;
    }
  }
}


