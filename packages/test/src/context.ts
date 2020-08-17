import {
  Context,
} from '@jackalope/runtime';

import Config, { Client } from '@jackalope/config-ssm';

import convict from 'convict';

export default Context.factory(
  'test',
  {},
)
  .inject(
    'Config',
    async () => {
      const secrets = await Config.factory(
          new Client({ region: 'us-east-1' })
        )
        .fetch('/olympus/staging');

      const config = convict({
        common: {
          database: {
            host: {
              format: 'string',
            },
          },
        },
      });

      return config.load(secrets);
    },
  );
