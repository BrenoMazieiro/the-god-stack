/* eslint-disable max-len */
import { knex, knexnest } from './database/postgres.js'
import * as core from './core/index.js'

/**
 * @typedef {
 * {
 * core: {
 *  errorHandling?: function(*=, *=, *=): void,
 *  validation?: function(*=, *=): boolean,
 *  encrypt?: {
 *    random: function(): number,
 *    strong: {compare: function(*=, *=): void|Promise<never>|Promise<unknown>|*,
 *    encrypt: function(*=): *},
 *    randomDataForRefreshToken: function(*, *): *,
 *    weak: {encrypt: function(*=): string}
 *   },
 *   createToken?: function(*=): *|undefined,
 *   checkToken?: function(*, *=): (*),
 *   tokenVerifier?: function(*=): (*|undefined),
 *   authorization?: function(*, *, *=): boolean,
 *   workerErrorHandling?: function(*=, *=, *=): void,
 *   email?: {
 *     templates: {
 *       userRegistrationEmailTemplateText: function(*): string,
 *       userRegistrationEmailTemplateHtml: function(*): string,
 *       userRegistrationEmailTemplateSubject: function(): string
 *     },
 *     emailSender: function(*, *=): Promise<null|*|undefined>}
 *   },
 *   database: {knex: function(string): Knex, knexnest: ((function(*, *=): (Promise<never>))|*)},
 *   user: {id: string}}
 * } context
 */

export const shared = {
  core,
  database: {
    knex,
    knexnest,
  },
  user: {
    id: '',
  },
}
