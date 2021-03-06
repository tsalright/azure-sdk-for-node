/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The result of get log link operation.
 *
 */
class BuildGetLogResult {
  /**
   * Create a BuildGetLogResult.
   * @member {string} [logLink] The link to logs for a azure container registry
   * build.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BuildGetLogResult
   *
   * @returns {object} metadata of BuildGetLogResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BuildGetLogResult',
      type: {
        name: 'Composite',
        className: 'BuildGetLogResult',
        modelProperties: {
          logLink: {
            required: false,
            serializedName: 'logLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BuildGetLogResult;
