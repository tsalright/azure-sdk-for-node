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
 * The collection of build items.
 */
class BuildStepList extends Array {
  /**
   * Create a BuildStepList.
   * @member {string} [nextLink] The URI that can be used to request the next
   * set of paged results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BuildStepList
   *
   * @returns {object} metadata of BuildStepList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BuildStepList',
      type: {
        name: 'Composite',
        className: 'BuildStepList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BuildStepElementType',
                  type: {
                    name: 'Composite',
                    className: 'BuildStep'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BuildStepList;