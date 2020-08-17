declare module '@jackalope/runtime'
declare module '@jackalope/serverless'
declare module '@jackalope/config-ssm'

interface Ctx {
  Logger: Bunyan,
  Config: convict.Schema,
}
