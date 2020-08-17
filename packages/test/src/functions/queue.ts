/**
 * @queue #{FoxFace::StageName}-queue
 * @description Queue test
 * @param {number.integer.required} id - Message id
 * @param {string.required} text - Message text ("Im feeling down today :(")
 */
export default (params: any, context: Ctx) => {
  return 'Hello world!';
};
