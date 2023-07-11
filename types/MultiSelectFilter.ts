import { BaseFilter } from '~/types/BaseFilter'

export class MultiSelectFilter extends BaseFilter {
  list: string[];
  activeList: string[];

  constructor(id: number, title: string, type: string, criteria: string, list: string[]) {
    super(id, title, type, criteria);
    this.list = list;
    this.activeList = [];
  }

  getFilterValue() {
    return this.activeList.length > 0
      ? { [this.criteria]: { _in: this.activeList } }
      : { "_or": [ { [this.criteria]: { _in: this.list } }, { [this.criteria]: { _null: true } } ] };
  }
}
