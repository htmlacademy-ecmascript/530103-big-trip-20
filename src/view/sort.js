import {createElement} from '../render.js';

function createSortTemplate() {
  return (
    `<div class="trip-sort__item  trip-sort__item--price">
    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>
    <label class="trip-sort__btn" for="sort-price">Price</label>
  </div>`
  );
}

export default class SortView {
  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
