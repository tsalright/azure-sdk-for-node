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
 * Deployed Application Health Report Created event.
 *
 * @extends models['ApplicationEvent']
 */
class DeployedApplicationNewHealthReportEvent extends models['ApplicationEvent'] {
  /**
   * Create a DeployedApplicationNewHealthReportEvent.
   * @property {number} applicationInstanceId Id of Application instance.
   * @property {string} nodeName The name of a Service Fabric node.
   * @property {string} sourceId Id of report source.
   * @property {string} property Describes the property.
   * @property {string} healthState Describes the property health state.
   * @property {number} timeToLiveMs Time to live in milli-seconds.
   * @property {number} sequenceNumber Sequence number of report.
   * @property {string} description Description of report.
   * @property {boolean} removeWhenExpired Indicates the removal when it
   * expires.
   * @property {date} sourceUtcTimestamp Source time.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeployedApplicationNewHealthReportEvent
   *
   * @returns {object} metadata of DeployedApplicationNewHealthReportEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeployedApplicationNewHealthReport',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'FabricEvent',
        className: 'DeployedApplicationNewHealthReportEvent',
        modelProperties: {
          eventInstanceId: {
            required: true,
            serializedName: 'EventInstanceId',
            type: {
              name: 'String'
            }
          },
          category: {
            required: false,
            serializedName: 'Category',
            type: {
              name: 'String'
            }
          },
          timeStamp: {
            required: true,
            serializedName: 'TimeStamp',
            type: {
              name: 'DateTime'
            }
          },
          hasCorrelatedEvents: {
            required: false,
            serializedName: 'HasCorrelatedEvents',
            type: {
              name: 'Boolean'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          applicationId: {
            required: true,
            serializedName: 'ApplicationId',
            type: {
              name: 'String'
            }
          },
          applicationInstanceId: {
            required: true,
            serializedName: 'ApplicationInstanceId',
            type: {
              name: 'Number'
            }
          },
          nodeName: {
            required: true,
            serializedName: 'NodeName',
            type: {
              name: 'String'
            }
          },
          sourceId: {
            required: true,
            serializedName: 'SourceId',
            type: {
              name: 'String'
            }
          },
          property: {
            required: true,
            serializedName: 'Property',
            type: {
              name: 'String'
            }
          },
          healthState: {
            required: true,
            serializedName: 'HealthState',
            type: {
              name: 'String'
            }
          },
          timeToLiveMs: {
            required: true,
            serializedName: 'TimeToLiveMs',
            type: {
              name: 'Number'
            }
          },
          sequenceNumber: {
            required: true,
            serializedName: 'SequenceNumber',
            type: {
              name: 'Number'
            }
          },
          description: {
            required: true,
            serializedName: 'Description',
            type: {
              name: 'String'
            }
          },
          removeWhenExpired: {
            required: true,
            serializedName: 'RemoveWhenExpired',
            type: {
              name: 'Boolean'
            }
          },
          sourceUtcTimestamp: {
            required: true,
            serializedName: 'SourceUtcTimestamp',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = DeployedApplicationNewHealthReportEvent;
