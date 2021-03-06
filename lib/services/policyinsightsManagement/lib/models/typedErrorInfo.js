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
 * Scenario specific error details.
 *
 */
class TypedErrorInfo {
  /**
   * Create a TypedErrorInfo.
   * @property {string} [type] The type of included error details.
   * @property {object} [info] The scenario specific error details.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TypedErrorInfo
   *
   * @returns {object} metadata of TypedErrorInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TypedErrorInfo',
      type: {
        name: 'Composite',
        className: 'TypedErrorInfo',
        modelProperties: {
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          info: {
            required: false,
            readOnly: true,
            serializedName: 'info',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = TypedErrorInfo;
