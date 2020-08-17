/**
 * @schedule rate(1 minute)
 * @description Cron test
 */
export default (params: any, context: Ctx) => {
  console.log('Running!', (new Date()).toUTCString());

  return 'Hello world!';
};
