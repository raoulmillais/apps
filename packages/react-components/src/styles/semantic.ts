// Copyright 2017-2020 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeDef } from '../types';

export default (theme: ThemeDef): string => `
  .ui.hidden.divider {
    margin: 0.5rem 0;
  }

  .ui.dropdown {
    display: block;
    min-width: 0;
    width: 100%;
  }

  .ui.dropdown,
  .ui.input {
    margin: 0.25rem 0;
  }

  .ui.selection.dropdown,
  .ui.input > input,
  .ui.selection.dropdown > input {
    background: ${theme.bgInput};
    color: ${theme.color};
    font: ${theme.fontSans};
    font-size: 1rem;

    &:focus {
      background: ${theme.bgInput};
      color: ${theme.color};
    }
  }

  .ui.action.input > .buttons {
    position: relative;
  }

  .ui.dropdown {
    &.disabled {
      background: transparent;
      border-style: dashed;
      opacity: 1;

      .dropdown.icon {
        opacity: 0;
      }
    }

    &.selection.visible {
      background: ${theme.bgInput};
      color: ${theme.color};
    }

    .menu {
      background: ${theme.bgInput};
      color: ${theme.color};

      > .item {
        border-color: transparent !important;
        color: ${theme.color} !important;

        &.header.disabled {
          margin: 1em 0 0 0;
          opacity: 1;

          &:hover,
          &.selected {
            background: ${theme.bgInput};
          }
        }
      }
    }

    > .text {
      min-height: 1em;

      &:not(.default) {
        color: ${theme.color} !important;
      }
    }
  }

  .ui.input {
    width: 100%;

    &.disabled:not(.retain-appearance) {
      opacity: 1;

      input {
        background: transparent;
        border-style: dashed;
      }

      .ui.primary.buttons .ui.button {
        background-color: #666;
        border-color: transparent;
        color: #f9f8f7;
        opacity: 0.5;

        .dropdown.icon {
          opacity: 0;
        }
      }
    }

    &.error input {
      background-color: ${theme.bgInputError};
      border-color: #e0b4b4;
    }

    > input {
      width: 0;
    }
  }

  .ui.label {
    background: transparent;
    font-weight: 400;
    position: relative;
    z-index: 1;
  }

  .ui.modal {
    background: ${theme.bgPage};
    box-shadow: none;
    color: ${theme.color};
    font: ${theme.fontSans};

    > .actions,
    > .content {
      background: transparent;
    }

    > .actions {
      border-top: none;
      text-align: right;
      padding: 0 1rem !important;
    }

    /* approx h1, color, size, font */
    > .header:not(.ui) {
      background: transparent;
      border-bottom: none;
      color: ${theme.colorSummary};
      font: ${theme.fontSans};
      font-size: 1.75rem;
      font-weight: 400;
      line-height: 1.25rem;
      padding: 1.5rem 1.75rem 0;
      text-transform: lowercase;

      > label {
        margin-top: 0.5rem;
      }
    }

    .description {
      margin: 1.5em 0;
      font-weight: 400;
    }
  }

  .ui.page.modals.transition.visible {
    display: flex !important;
  }

  .ui.popup {
    background: ${theme.bgMenu};
    color: ${theme.color};

    .ui.text.menu .item {
      color: ${theme.color};
    }
  }

  .ui.secondary.vertical.menu > .item {
    margin: 0;
  }

  .ui[class*="left icon"].input.left.icon > input {
    padding-left: 4rem !important;
  }

  .ui[class*="left icon"].input.left.icon > .ui--Icon.big {
    left: -7px;
    opacity: 1;
  }

  /* modals aligned to top, not center */
  .ui.dimmer {
    background-color: rgba(0,0,0,0.5);
    justify-content: flex-start;
  }

  /* remove the default white background, settings app has it as part of Tab */
  .ui.segment {
    background: transparent;
  }
`;
