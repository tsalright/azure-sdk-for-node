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
 * The parameters used to create a new trusted identity provider while creating
 * a new Data Lake Store account.
 *
 */
class CreateTrustedIdProviderWithAccountParameters {
  /**
   * Create a CreateTrustedIdProviderWithAccountParameters.
   * @property {string} name The unique name of the trusted identity provider
   * to create.
   * @property {string} idProvider The URL of this trusted identity provider.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateTrustedIdProviderWithAccountParameters
   *
   * @returns {object} metadata of CreateTrustedIdProviderWithAccountParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateTrustedIdProviderWithAccountParameters',
      type: {
        name: 'Composite',
        className: 'CreateTrustedIdProviderWithAccountParameters',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          idProvider: {
            required: true,
            serializedName: 'properties.idProvider',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateTrustedIdProviderWithAccountParameters;