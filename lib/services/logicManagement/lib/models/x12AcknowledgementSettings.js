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
 * The X12 agreement acknowledgement settings.
 *
 */
class X12AcknowledgementSettings {
  /**
   * Create a X12AcknowledgementSettings.
   * @property {boolean} needTechnicalAcknowledgement The value indicating
   * whether technical acknowledgement is needed.
   * @property {boolean} batchTechnicalAcknowledgements The value indicating
   * whether to batch the technical acknowledgements.
   * @property {boolean} needFunctionalAcknowledgement The value indicating
   * whether functional acknowledgement is needed.
   * @property {string} [functionalAcknowledgementVersion] The functional
   * acknowledgement version.
   * @property {boolean} batchFunctionalAcknowledgements The value indicating
   * whether to batch functional acknowledgements.
   * @property {boolean} needImplementationAcknowledgement The value indicating
   * whether implementation acknowledgement is needed.
   * @property {string} [implementationAcknowledgementVersion] The
   * implementation acknowledgement version.
   * @property {boolean} batchImplementationAcknowledgements The value
   * indicating whether to batch implementation acknowledgements.
   * @property {boolean} needLoopForValidMessages The value indicating whether
   * a loop is needed for valid messages.
   * @property {boolean} sendSynchronousAcknowledgement The value indicating
   * whether to send synchronous acknowledgement.
   * @property {string} [acknowledgementControlNumberPrefix] The
   * acknowledgement control number prefix.
   * @property {string} [acknowledgementControlNumberSuffix] The
   * acknowledgement control number suffix.
   * @property {number} acknowledgementControlNumberLowerBound The
   * acknowledgement control number lower bound.
   * @property {number} acknowledgementControlNumberUpperBound The
   * acknowledgement control number upper bound.
   * @property {boolean} rolloverAcknowledgementControlNumber The value
   * indicating whether to rollover acknowledgement control number.
   */
  constructor() {
  }

  /**
   * Defines the metadata of X12AcknowledgementSettings
   *
   * @returns {object} metadata of X12AcknowledgementSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'X12AcknowledgementSettings',
      type: {
        name: 'Composite',
        className: 'X12AcknowledgementSettings',
        modelProperties: {
          needTechnicalAcknowledgement: {
            required: true,
            serializedName: 'needTechnicalAcknowledgement',
            type: {
              name: 'Boolean'
            }
          },
          batchTechnicalAcknowledgements: {
            required: true,
            serializedName: 'batchTechnicalAcknowledgements',
            type: {
              name: 'Boolean'
            }
          },
          needFunctionalAcknowledgement: {
            required: true,
            serializedName: 'needFunctionalAcknowledgement',
            type: {
              name: 'Boolean'
            }
          },
          functionalAcknowledgementVersion: {
            required: false,
            serializedName: 'functionalAcknowledgementVersion',
            type: {
              name: 'String'
            }
          },
          batchFunctionalAcknowledgements: {
            required: true,
            serializedName: 'batchFunctionalAcknowledgements',
            type: {
              name: 'Boolean'
            }
          },
          needImplementationAcknowledgement: {
            required: true,
            serializedName: 'needImplementationAcknowledgement',
            type: {
              name: 'Boolean'
            }
          },
          implementationAcknowledgementVersion: {
            required: false,
            serializedName: 'implementationAcknowledgementVersion',
            type: {
              name: 'String'
            }
          },
          batchImplementationAcknowledgements: {
            required: true,
            serializedName: 'batchImplementationAcknowledgements',
            type: {
              name: 'Boolean'
            }
          },
          needLoopForValidMessages: {
            required: true,
            serializedName: 'needLoopForValidMessages',
            type: {
              name: 'Boolean'
            }
          },
          sendSynchronousAcknowledgement: {
            required: true,
            serializedName: 'sendSynchronousAcknowledgement',
            type: {
              name: 'Boolean'
            }
          },
          acknowledgementControlNumberPrefix: {
            required: false,
            serializedName: 'acknowledgementControlNumberPrefix',
            type: {
              name: 'String'
            }
          },
          acknowledgementControlNumberSuffix: {
            required: false,
            serializedName: 'acknowledgementControlNumberSuffix',
            type: {
              name: 'String'
            }
          },
          acknowledgementControlNumberLowerBound: {
            required: true,
            serializedName: 'acknowledgementControlNumberLowerBound',
            type: {
              name: 'Number'
            }
          },
          acknowledgementControlNumberUpperBound: {
            required: true,
            serializedName: 'acknowledgementControlNumberUpperBound',
            type: {
              name: 'Number'
            }
          },
          rolloverAcknowledgementControlNumber: {
            required: true,
            serializedName: 'rolloverAcknowledgementControlNumber',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = X12AcknowledgementSettings;
