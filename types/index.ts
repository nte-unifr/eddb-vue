export { }

declare global {

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
    url: string;
    title?: string;
    description?: string;
  }

  interface Filter {
    id: number;
    title: string;
    type: string;
    criteria: string;
    data: MultiSelect;
  }

  interface MultiSelect {
    list: string[];
    activeList: string[];
  }

}