'use strict';

const path = require('path');

//页面模块路径
const NORMAL_PAGE_PATH = path.resolve(__dirname, '../src/views');

// 页面逻辑名称 默认index.js
const STATIC_JS_NAME = 'index';

const BUILD_PATH = '/';

/**
 * 页面输出html文件夹命名
 */
const OUT_PUT_HTML_FOLDER = 'html';

/**
 * 打包输出文件夹名 默认dist 不建议修改
 */
const OUT_PUT_FOLDER_NAME = 'dist';

module.exports = {
    NORMAL_PAGE_PATH,
    STATIC_JS_NAME,
    BUILD_PATH,
    OUT_PUT_HTML_FOLDER,
    OUT_PUT_FOLDER_NAME,
    dev: {

    },
    prod: {

    }
};