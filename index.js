#!/usr/bin/env node

require('yargs').usage('$0 <cmd> <name> [options]')
  .group(['v', 'h', 'q'], 'Global Options')
  .option('v', {
    alias: 'verbose',
    describe: 'Display Debugging Output',
    type: 'boolean',
    global: true
  })
  .help('h', 'Show Help')
  .alias('h', 'help')
  .option('q', {
    alias: 'quiet',
    describe: 'Suppress Output',
    type: 'boolean',
    global: true
  })
  .command(require('./src/commands/publish'))
  .command(require('./src/commands/unpublish'))
  .demandCommand(1, 'You must specify a command to execute.').argv;