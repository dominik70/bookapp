export interface ApiData {
  count: number;
  next: string;
  previous: string;
  results: Book[];
}

export interface Book {
  id: number;
  type: 'Sound' | 'Text';
  title: string;
  description: null | string;
  downloads: number;
  license: string;
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  agents: Agent[];
  resources: Resource[];
  detail: string;
}

export interface Resource {
  id: number;
  uri: string;
  type: string;
}

export interface Agent {
  id: number;
  person: string;
  type: string;
}
