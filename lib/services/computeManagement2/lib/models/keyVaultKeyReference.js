/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the KeyVaultKeyReference class.
 * @constructor
 * Describes a reference to Key Vault Key
 * @member {string} keyUrl Gets or sets the URL referencing a key in a Key
 * Vault.
 * 
 * @member {object} sourceVault Gets or sets the Relative URL of the Key Vault
 * containing the key
 * 
 * @member {string} [sourceVault.id] Resource Id
 * 
 */
function KeyVaultKeyReference(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.keyUrl !== undefined) {
      this.keyUrl = parameters.keyUrl;
    }
    if (parameters.sourceVault) {
      this.sourceVault = new models['SubResource'](parameters.sourceVault);
    }
  }    
}


/**
 * Validate the payload against the KeyVaultKeyReference schema
 *
 * @param {JSON} payload
 *
 */
KeyVaultKeyReference.prototype.serialize = function () {
  var payload = {};
  if (this['keyUrl'] === null || this['keyUrl'] === undefined || typeof this['keyUrl'].valueOf() !== 'string') {
    throw new Error('this[\'keyUrl\'] cannot be null or undefined and it must be of type string.');
  }
  payload['keyUrl'] = this['keyUrl'];

  if (this['sourceVault']) {
    payload['sourceVault'] = this['sourceVault'].serialize();
  }
   else {  throw new Error('this[\'sourceVault\'] cannot be null or undefined.');
  }

  return payload;
};

/**
 * Deserialize the instance to KeyVaultKeyReference schema
 *
 * @param {JSON} instance
 *
 */
KeyVaultKeyReference.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['keyUrl'] !== undefined) {
      this['keyUrl'] = instance['keyUrl'];
    }

    if (instance['sourceVault']) {
      this['sourceVault'] = new models['SubResource']().deserialize(instance['sourceVault']);
    }
  }

  return this;
};

module.exports = KeyVaultKeyReference;