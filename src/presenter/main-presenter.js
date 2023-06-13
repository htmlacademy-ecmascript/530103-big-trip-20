import SortPointView from '../view/sort-point-view.js';
import PointEditView from '../view/edit-point-view.js';
import FilterPointView from '../view/edit-point-view.js';
import NewPointView from '../view/new-point-view.js';

import {render} from '../render.js';

export default class mainPresenter {
  sortPointComponent = new SortPointView();
  pointEditComponent = new PointEditView();
  filterPointComponent = new FilterPointView();
  newPointComponent = new NewPointView();


  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new SortPointView(), this.boardComponent.getElement());
    render(this.taskListComponent, this.boardComponent.getElement());
    render(new PointEditView(), this.taskListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewPointView(), this.taskListComponent.getElement());
    }

    render(new PointEditView(), this.boardComponent.getElement());
  }
}
