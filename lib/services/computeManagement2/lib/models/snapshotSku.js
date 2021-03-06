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
 * The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS.
 *
 */
class SnapshotSku {
  /**
   * Create a SnapshotSku.
   * @property {string} [name] The sku name. Possible values include:
   * 'Standard_LRS', 'Premium_LRS', 'Standard_ZRS'
   * @property {string} [tier] The sku tier. Default value: 'Standard' .
   */
  constructor() {
  }

  /**
   * Defines the metadata of SnapshotSku
   *
   * @returns {object} metadata of SnapshotSku
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SnapshotSku',
      type: {
        name: 'Composite',
        className: 'SnapshotSku',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          tier: {
            required: false,
            readOnly: true,
            serializedName: 'tier',
            defaultValue: 'Standard',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SnapshotSku;
