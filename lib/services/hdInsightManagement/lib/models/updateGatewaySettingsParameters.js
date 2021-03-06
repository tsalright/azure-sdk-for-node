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
 * The update gateway settings request parameters.
 *
 */
class UpdateGatewaySettingsParameters {
  /**
   * Create a UpdateGatewaySettingsParameters.
   * @property {boolean} [isCredentialEnabled] Indicates whether or not the
   * gateway settings based authorization is enabled. Default value: true .
   * @property {string} [userName] The gateway settings user name.
   * @property {string} [password] The gateway settings user password.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateGatewaySettingsParameters
   *
   * @returns {object} metadata of UpdateGatewaySettingsParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateGatewaySettingsParameters',
      type: {
        name: 'Composite',
        className: 'UpdateGatewaySettingsParameters',
        modelProperties: {
          isCredentialEnabled: {
            required: false,
            serializedName: 'restAuthCredential\\.isEnabled',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          },
          userName: {
            required: false,
            serializedName: 'restAuthCredential\\.username',
            type: {
              name: 'String'
            }
          },
          password: {
            required: false,
            serializedName: 'restAuthCredential\\.password',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateGatewaySettingsParameters;
