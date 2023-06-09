import {createElement} from '../render.js';

function createNewPoint () {
  return (`<div class="event__type-item"><input id="event-type-new-point" class="event__type-input  visually-hidden" type="radio" name="event-type" value="new point">
  <label class="event__type-label  event__type-label--new-point" for="event-type-new-point">+New event</label>
</div>`);
}

export default class NewPointView {
  getTemplate() {
    return createNewPoint();
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
