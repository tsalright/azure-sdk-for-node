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
 * The minimum per-database DTU capability.
 *
 */
class ElasticPoolPerDatabaseMinDtuCapability {
  /**
   * Create a ElasticPoolPerDatabaseMinDtuCapability.
   * @member {number} [limit] The maximum DTUs per database.
   * @member {string} [status] The status of the capability. Possible values
   * include: 'Visible', 'Available', 'Default', 'Disabled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ElasticPoolPerDatabaseMinDtuCapability
   *
   * @returns {object} metadata of ElasticPoolPerDatabaseMinDtuCapability
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ElasticPoolPerDatabaseMinDtuCapability',
      type: {
        name: 'Composite',
        className: 'ElasticPoolPerDatabaseMinDtuCapability',
        modelProperties: {
          limit: {
            required: false,
            readOnly: true,
            serializedName: 'limit',
            type: {
              name: 'Number'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Visible', 'Available', 'Default', 'Disabled' ]
            }
          }
        }
      }
    };
  }
}

module.exports = ElasticPoolPerDatabaseMinDtuCapability;
