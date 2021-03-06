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
 * Represents the error used to indicate why the target compute size is not
 * applicable.
 *
 */
class ComputeSizeErrorDetails {
  /**
   * Create a ComputeSizeErrorDetails.
   * @member {string} [message] The error message.
   * @member {string} [severity] The severity of the error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComputeSizeErrorDetails
   *
   * @returns {object} metadata of ComputeSizeErrorDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComputeSizeErrorDetails',
      type: {
        name: 'Composite',
        className: 'ComputeSizeErrorDetails',
        modelProperties: {
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          severity: {
            required: false,
            serializedName: 'severity',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ComputeSizeErrorDetails;
