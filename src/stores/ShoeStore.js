
import { observable, action, computed } from 'mobx';


class ShoeStore {
 
  @observable shoes = [];


  @action addShoe = (shoe) => {
    this.shoes.push(shoe);
  }


  @computed get shoesCount() {
    return this.shoes.length;
  }
}

const shoeStore = new ShoeStore();

export default shoeStore;
