import {Element as PolymerElement} from '@polymer/polymer/polymer-element';
import view from './view404.template.ejs';
import style from './view404.style.scss';
import '../shared-styles';

export class MyView404 extends PolymerElement {
  $: any;

  static get is() {
    return 'my-view404';
  }

  static get template() {
    return `<style include="shared-styles">${style}</style>${view()}`;
  }
}

window.customElements.define(MyView404.is, MyView404);
