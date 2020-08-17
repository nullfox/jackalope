/**
 * @method
 * @description RPC test
 * @auth false
 * @param {string.email.required} email - Coach email address
 */
export default (event: any, context: any) => {
  console.log(context);

  return 'Hello world!';
};
