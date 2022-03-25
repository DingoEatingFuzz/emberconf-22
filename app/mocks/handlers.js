import { rest } from 'msw';
import * as api from './api';

const p = (path) => `/api/v2/${path}`;

export const handlers = [
  rest.get(p('addons'), api.addonsGet),
  rest.get(p('categories'), api.categoriesGet),
];
