import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { BEM, hostClasses, ComponentName } from '../../utils';

@Component({
  tag: 'other-component',
  styleUrl: 'other-component.scss',
  shadow: false,
})
export class OtherComponent {
  @ComponentName() componentName;

  /** First Prop */
  @Prop() first: string = 'Sner';

  /** Middle Prop */
  @Prop() middle: string;

  /** Last Prop */
  @Prop() last: string;

  /** Modifier Prop */
  @Prop() modifier: string = '';

  /**
   * Specify size limit in Kb
   * */
  @Prop() maxFileSize;

  /**
   * Yo im a multiline
   * can you see me?
   * */
  @Prop() multilineShizzle: boolean;

  /** Prevent */
  @Event() removeButtonResponse!: EventEmitter;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    const cssClasses = hostClasses({
      componentName: this.componentName,
      modifier: this.modifier,
    });

    return (
      <Host
        class={`${cssClasses} dasdsa---dddsd container`}
        onClick={() => this.removeButtonResponse.emit({ test: 'test' })}
      >
        Other Component <span class={BEM(this, 'name')}> {this.getText()}</span>

        <my-component
            first="inner"
            middle="test"
            last="component"
        />

        <slot />
        <slot name="right" />
      </Host>
    );
  }
}
