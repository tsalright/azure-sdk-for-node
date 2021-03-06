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
 * The File Share.
 *
 * @extends models['BaseModel']
 */
class FileShare extends models['BaseModel'] {
  /**
   * Create a FileShare.
   * @member {string} [description] Description for file share
   * @member {string} shareStatus The Share Status. Possible values include:
   * 'Online', 'Offline'
   * @member {string} dataPolicy The data policy. Possible values include:
   * 'Invalid', 'Local', 'Tiered', 'Cloud'
   * @member {string} adminUser The user/group who will have full permission in
   * this share. Active directory email address. Example: xyz@contoso.com or
   * Contoso\xyz.
   * @member {number} provisionedCapacityInBytes The total provisioned capacity
   * in Bytes
   * @member {number} [usedCapacityInBytes] The used capacity in Bytes.
   * @member {number} [localUsedCapacityInBytes] The local used capacity in
   * Bytes.
   * @member {string} monitoringStatus The monitoring status. Possible values
   * include: 'Enabled', 'Disabled'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of FileShare
   *
   * @returns {object} metadata of FileShare
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FileShare',
      type: {
        name: 'Composite',
        className: 'FileShare',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          shareStatus: {
            required: true,
            serializedName: 'properties.shareStatus',
            type: {
              name: 'Enum',
              allowedValues: [ 'Online', 'Offline' ]
            }
          },
          dataPolicy: {
            required: true,
            serializedName: 'properties.dataPolicy',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'Local', 'Tiered', 'Cloud' ]
            }
          },
          adminUser: {
            required: true,
            serializedName: 'properties.adminUser',
            type: {
              name: 'String'
            }
          },
          provisionedCapacityInBytes: {
            required: true,
            serializedName: 'properties.provisionedCapacityInBytes',
            type: {
              name: 'Number'
            }
          },
          usedCapacityInBytes: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usedCapacityInBytes',
            type: {
              name: 'Number'
            }
          },
          localUsedCapacityInBytes: {
            required: false,
            readOnly: true,
            serializedName: 'properties.localUsedCapacityInBytes',
            type: {
              name: 'Number'
            }
          },
          monitoringStatus: {
            required: true,
            serializedName: 'properties.monitoringStatus',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          }
        }
      }
    };
  }
}

module.exports = FileShare;
