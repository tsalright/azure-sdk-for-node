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
 * @summary A network security group rule to apply to an inbound endpoint.
  *
 */
class NetworkSecurityGroupRule {
  /**
   * Create a NetworkSecurityGroupRule.
   * @member {number} priority The priority for this rule. Priorities within a
   * pool must be unique and are evaluated in order of priority. The lower the
   * number the higher the priority. For example, rules could be specified with
   * order numbers of 150, 250, and 350. The rule with the order number of 150
   * takes precedence over the rule that has an order of 250. Allowed
   * priorities are 150 to 3500. If any reserved or duplicate values are
   * provided the request fails with HTTP status code 400.
   * @member {string} access The action that should be taken for a specified IP
   * address, subnet range or tag. Possible values include: 'Allow', 'Deny'
   * @member {string} sourceAddressPrefix The source address prefix or tag to
   * match for the rule. Valid values are a single IP address (i.e.
   * 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all
   * addresses).  If any other values are provided the request fails with HTTP
   * status code 400.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NetworkSecurityGroupRule
   *
   * @returns {object} metadata of NetworkSecurityGroupRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkSecurityGroupRule',
      type: {
        name: 'Composite',
        className: 'NetworkSecurityGroupRule',
        modelProperties: {
          priority: {
            required: true,
            serializedName: 'priority',
            type: {
              name: 'Number'
            }
          },
          access: {
            required: true,
            serializedName: 'access',
            type: {
              name: 'Enum',
              allowedValues: [ 'Allow', 'Deny' ]
            }
          },
          sourceAddressPrefix: {
            required: true,
            serializedName: 'sourceAddressPrefix',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkSecurityGroupRule;