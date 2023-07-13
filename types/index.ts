export { }

declare global {

  interface Sorter {
    title: string;
    type: string;
    criteria: string[];
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