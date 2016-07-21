import {
  variable as generateVar,
  cssBlock as genereteCSSBlock
} from '../../helpers/preprocessor';

function generateScaffold() {
  return `
  $bubble-spacing-in-row(size) {
    padding: size 0 0 size;
    > * {
      margin-right: size;
      margin-bottom: size;
    }
    &.only-children {
      padding: 0!important;
    }
  }

  $capture-spacing-in-row(size) {
    > * {
      margin: size size size 0;
      &:first-child {
        margin-left: size;
      }
    }
  }

  $bubble-spacing-in-col(size) {
    padding: size;
    > * {
      margin-bottom: size;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &.only-children {
      padding: 0!important;
    }
  }

  $capture-spacing-in-col(size) {
    > * {
      margin: 0 size size size;
      &:first-child {
        margin-top: size;
      }
    }
  }

  #mortgagelyfe-root {
    height: 100%;
  }

  .wrap {
    flex-wrap: wrap;
  }

  .fill {
    flex: 1;
  }

  .center {
    align-items: center;
  }

  .baseline {
    align-items: baseline;
  }

  .center-center {
    align-items: center;
    justify-content: center;
  }

  .stretch {
    width: 100%;
    height: 100%;
  }

  .stretch-row {
    align-items: stretch;
    height: 100%;
  }

  .stretch-col {
    width: 100%;
  }

  .space-between {
    justify-content: space-between;
  }

  .dead-center {
    justify-content: center;
    align-items: center;
  }

  .no-shrink {
    flex-shrink: 0;
  }

  .scaffold {
    display: flex;

    &.row {
      flex-direction: row;

      &.bubble-spacing-small {
        $bubble-spacing-in-row($spacing-small);
      }

      &.bubble-spacing-default {
        $bubble-spacing-in-row($spacing-default);
      }

      &.bubble-spacing-large {
        $bubble-spacing-in-row($spacing-large);
      }

      &.capture-spacing-small {
        $capture-spacing-in-row($spacing-small)
      }

      &.capture-spacing-default {
        $capture-spacing-in-row($spacing-default)
      }

      &.capture-spacing-large {
        $capture-spacing-in-row($spacing-large)
      }

      &.both-ends {
        justify-content: space-between;
      }
    }

    &.col {
      flex-direction: column;

      &.bubble-spacing-small {
        $bubble-spacing-in-col($spacing-small)
      }

      &.bubble-spacing-default {
        $bubble-spacing-in-col($spacing-default);
      }

      &.bubble-spacing-large {
        $bubble-spacing-in-col($spacing-large);
      }

      &.capture-spacing-small {
        $capture-spacing-in-col($spacing-small);
      }

      &.capture-spacing-default {
        $capture-spacing-in-col($spacing-default);
      }

      &.capture-spacing-large {
        $capture-spacing-in-col($spacing-large);
      }
    }
  }
  `
}

export default function generateSpacing(descriptor, { symbol }) {
  return descriptor.groups.map((group) => {
    return ''.concat(
      group.map((groupItem) => {
        return generateVar({
          name: `spacing-${groupItem.name}`,
          value: `${groupItem.value}px`,
          symbol
        });
      }).join('\n\n'),
      generateScaffold()
    );
  }).join('\n\n');
}
