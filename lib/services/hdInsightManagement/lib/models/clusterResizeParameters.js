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
 * The Resize Cluster request parameters.
 *
 */
class ClusterResizeParameters {
  /**
   * Create a ClusterResizeParameters.
   * @property {number} [targetInstanceCount] The target instance count for the
   * operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ClusterResizeParameters
   *
   * @returns {object} metadata of ClusterResizeParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClusterResizeParameters',
      type: {
        name: 'Composite',
        className: 'ClusterResizeParameters',
        modelProperties: {
          targetInstanceCount: {
            required: false,
            serializedName: 'targetInstanceCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ClusterResizeParameters;
