import addons from './fixtures/addons';
import categories from './fixtures/categories';

export const addonsGet = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(addons));
};

export const categoriesGet = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(categories));
};
