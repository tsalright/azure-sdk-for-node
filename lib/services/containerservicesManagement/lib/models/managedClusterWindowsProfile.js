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
 * Profile for Windows VMs in the container service cluster.
 *
 */
class ManagedClusterWindowsProfile {
  /**
   * Create a ManagedClusterWindowsProfile.
   * @property {string} adminUsername The administrator username to use for
   * Windows VMs.
   * @property {string} [adminPassword] The administrator password to use for
   * Windows VMs.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ManagedClusterWindowsProfile
   *
   * @returns {object} metadata of ManagedClusterWindowsProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagedClusterWindowsProfile',
      type: {
        name: 'Composite',
        className: 'ManagedClusterWindowsProfile',
        modelProperties: {
          adminUsername: {
            required: true,
            serializedName: 'adminUsername',
            constraints: {
              Pattern: /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
            },
            type: {
              name: 'String'
            }
          },
          adminPassword: {
            required: false,
            serializedName: 'adminPassword',
            constraints: {
              Pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%\^&\*\(\)])[a-zA-Z\d!@#$%\^&\*\(\)]{12,123}$/
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ManagedClusterWindowsProfile;