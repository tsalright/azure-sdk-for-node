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
 * Properties of an artifact.
 *
 */
class ArtifactInstallPropertiesFragment {
  /**
   * Create a ArtifactInstallPropertiesFragment.
   * @member {string} [artifactId] The artifact's identifier.
   * @member {array} [parameters] The parameters of the artifact.
   * @member {string} [status] The status of the artifact.
   * @member {string} [deploymentStatusMessage] The status message from the
   * deployment.
   * @member {string} [vmExtensionStatusMessage] The status message from the
   * virtual machine extension.
   * @member {date} [installTime] The time that the artifact starts to install
   * on the virtual machine.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ArtifactInstallPropertiesFragment
   *
   * @returns {object} metadata of ArtifactInstallPropertiesFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ArtifactInstallPropertiesFragment',
      type: {
        name: 'Composite',
        className: 'ArtifactInstallPropertiesFragment',
        modelProperties: {
          artifactId: {
            required: false,
            serializedName: 'artifactId',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ArtifactParameterPropertiesFragmentElementType',
                  type: {
                    name: 'Composite',
                    className: 'ArtifactParameterPropertiesFragment'
                  }
              }
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          deploymentStatusMessage: {
            required: false,
            serializedName: 'deploymentStatusMessage',
            type: {
              name: 'String'
            }
          },
          vmExtensionStatusMessage: {
            required: false,
            serializedName: 'vmExtensionStatusMessage',
            type: {
              name: 'String'
            }
          },
          installTime: {
            required: false,
            serializedName: 'installTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = ArtifactInstallPropertiesFragment;