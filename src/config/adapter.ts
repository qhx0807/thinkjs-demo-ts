const fileCache = require('think-cache-file')
const nunjucks = require('think-view-nunjucks')
const fileSession = require('think-session-file')
const mysql = require('think-model-mysql')
const path = require('path')
const ws = require('think-websocket-ws')
import { think } from 'thinkjs'
const isDev = think.env === 'development'

/**
 * cache adapter config
 * @type {Object}
 */
exports.cache = {
  type: 'file',
  common: {
    timeout: 24 * 60 * 60 * 1000 // millisecond
  },
  file: {
    handle: fileCache,
    cachePath: path.join(think.ROOT_PATH, 'runtime/cache'), // absoulte path is necessarily required
    pathDepth: 1,
    gcInterval: 24 * 60 * 60 * 1000 // gc interval
  }
}

/**
 * model adapter config
 * @type {Object}
 */
exports.model = {
  type: 'mysql',
  common: {
    logConnect: isDev,
    logSql: isDev,
    logger: (msg: string) => think.logger.info(msg)
  },
  mysql: {
    handle: mysql,
    database: 'bing',
    prefix: '',
    encoding: 'utf8',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'qhx0807',
    dateStrings: true
  }
}

/**
 * session adapter config
 * @type {Object}
 */
exports.session = {
  type: 'file',
  common: {
    cookie: {
      name: 'thinkjs'
      // keys: ['werwer', 'werwer'],
      // signed: true
    }
  },
  file: {
    handle: fileSession,
    sessionPath: path.join(think.ROOT_PATH, 'runtime/session')
  }
}

/**
 * view adapter config
 * @type {Object}
 */
exports.view = {
  type: 'nunjucks',
  common: {
    viewPath: path.join(think.ROOT_PATH, 'view'),
    sep: '_',
    extname: '.html'
  },
  nunjucks: {
    handle: nunjucks
  }
}

/**
 * webscoket adapter config
 * @type {Object}
 */
exports.websocket = {
  type: 'ws',
  common: {
    // common config
  },
  ws: {
    handle: ws,
    path: '/ws',
    messages: [
      {
        close: '/ws/close',
        open: '/ws/open',
        addUser: '/ws/addUser'
      }
    ]
  }
}
