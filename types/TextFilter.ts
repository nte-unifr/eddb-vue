import { BaseFilter } from '~/types/BaseFilter'

export class TextFilter extends BaseFilter {
  search: string;
  placeholder: string;

  constructor(id: number, title: string, type: string, criteria: string, placeholder: string) {
    super(id, title, type, criteria);
    this.search = '';
    this.placeholder = placeholder;
  }

  reset() {
    this.search = ''
  }

  getFilterValue() {
    return this.search != ''
      ? { [this.criteria]: { _contains: this.search } }
      : null
  }
}
