export { }

declare global {

  interface Sorter {
    title: string;
    type: string;
    criteria: string[];
  }

  interface Filter {
    order: number;
    title: string;
    type: string;
    criteria: string;
  }

  interface Option {
    title: string;
    active: boolean;
  }

  interface FilterMultiSelect extends Filter {
    list: Option[]
  }

  interface FilterText extends Filter {
    search: string;
    placeholder: string;
  }

  interface FilterRange extends Filter {
    criteria2: string;
    v1: string;
    v2: string;
    info?: string;
  }

  interface Item {
    id: number;
    title: string;
    subtitle: string;
    images: Image[];
    dates: number[];
    tags?: Tag[];
    properties?: Property[][];
  }

  interface Tag {
    title: string;
    value: string;
  }

  interface Property {
    title: string;
    value: string;
    emptyDisplay?: boolean;
    html?: boolean;
  }

  interface Image {
    url: ImageUrl;
    title?: string;
    description?: string;
  }

  interface  ImageUrl {
    thumb?: string;
    details?: string;
    full?: string;
  }

}