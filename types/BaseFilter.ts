export abstract class BaseFilter {
  id: number;
  title: string;
  type: string;
  criteria: string;

  constructor(id: number, title: string, type: string, criteria: string) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.criteria = criteria;
  }

  abstract getFilterValue(): any;
}
