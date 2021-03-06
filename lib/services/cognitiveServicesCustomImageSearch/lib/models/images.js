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

const models = require('./index');

/**
 * Defines an image answer
 *
 * @extends models['SearchResultsAnswer']
 */
class Images extends models['SearchResultsAnswer'] {
  /**
   * Create a Images.
   * @property {number} [nextOffset] Used as part of deduping. Tells client the
   * next offset that client should use in the next pagination request
   * @property {array} value A list of image objects that are relevant to the
   * query. If there are no results, the List is empty.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Images
   *
   * @returns {object} metadata of Images
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Images',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'Images',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          readLink: {
            required: false,
            readOnly: true,
            serializedName: 'readLink',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          totalEstimatedMatches: {
            required: false,
            readOnly: true,
            serializedName: 'totalEstimatedMatches',
            type: {
              name: 'Number'
            }
          },
          nextOffset: {
            required: false,
            readOnly: true,
            serializedName: 'nextOffset',
            type: {
              name: 'Number'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageObjectElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'ImageObject'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Images;
