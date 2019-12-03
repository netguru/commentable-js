/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CtActions {}
  interface CtAvatar {
    'nested': boolean;
    'user': any;
  }
  interface CtButton {
    'small': boolean;
  }
  interface CtComment {
    'comment': any;
    'commentableId': string;
    'config': any;
    'level': number;
    'nested': boolean;
  }
  interface CtCommentable {
    'apiUrl': string;
    'commentableId': string;
    'config': any;
    'googleIdToken': string;
  }
}

declare global {


  interface HTMLCtActionsElement extends Components.CtActions, HTMLStencilElement {}
  var HTMLCtActionsElement: {
    prototype: HTMLCtActionsElement;
    new (): HTMLCtActionsElement;
  };

  interface HTMLCtAvatarElement extends Components.CtAvatar, HTMLStencilElement {}
  var HTMLCtAvatarElement: {
    prototype: HTMLCtAvatarElement;
    new (): HTMLCtAvatarElement;
  };

  interface HTMLCtButtonElement extends Components.CtButton, HTMLStencilElement {}
  var HTMLCtButtonElement: {
    prototype: HTMLCtButtonElement;
    new (): HTMLCtButtonElement;
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
    'ct-actions': HTMLCtActionsElement;
    'ct-avatar': HTMLCtAvatarElement;
    'ct-button': HTMLCtButtonElement;
    'ct-comment': HTMLCtCommentElement;
    'ct-commentable': HTMLCtCommentableElement;
  }
}

declare namespace LocalJSX {
  interface CtActions {}
  interface CtAvatar {
    'nested'?: boolean;
    'user'?: any;
  }
  interface CtButton {
    'small'?: boolean;
  }
  interface CtComment {
    'comment'?: any;
    'commentableId'?: string;
    'config'?: any;
    'level'?: number;
    'nested'?: boolean;
  }
  interface CtCommentable {
    'apiUrl'?: string;
    'commentableId'?: string;
    'config'?: any;
    'googleIdToken'?: string;
  }

  interface IntrinsicElements {
    'ct-actions': CtActions;
    'ct-avatar': CtAvatar;
    'ct-button': CtButton;
    'ct-comment': CtComment;
    'ct-commentable': CtCommentable;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ct-actions': LocalJSX.CtActions & JSXBase.HTMLAttributes<HTMLCtActionsElement>;
      'ct-avatar': LocalJSX.CtAvatar & JSXBase.HTMLAttributes<HTMLCtAvatarElement>;
      'ct-button': LocalJSX.CtButton & JSXBase.HTMLAttributes<HTMLCtButtonElement>;
      'ct-comment': LocalJSX.CtComment & JSXBase.HTMLAttributes<HTMLCtCommentElement>;
      'ct-commentable': LocalJSX.CtCommentable & JSXBase.HTMLAttributes<HTMLCtCommentableElement>;
    }
  }
}


