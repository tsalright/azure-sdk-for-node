/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Namespaces
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the NotificationHubsManagementClient.
 */
export interface Namespaces {

    /**
     * Checks the availability of the given service namespace across all Azure
     * subscriptions. This is useful because the domain name is created based on
     * the service namespace name.
     *
     * @param {object} parameters The namespace name.
     * 
     * @param {boolean} [parameters.isAvailiable] True if the name is available
     * and can be used to create new Namespace/NotificationHub. Otherwise false.
     * 
     * @param {string} parameters.location Resource location
     * 
     * @param {object} [parameters.tags] Resource tags
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    checkAvailability(parameters: models.CheckAvailabilityParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CheckAvailabilityResult>): void;
    checkAvailability(parameters: models.CheckAvailabilityParameters, callback: ServiceCallback<models.CheckAvailabilityResult>): void;

    /**
     * Creates/Updates a service namespace. Once created, this namespace's
     * resource manifest is immutable. This operation is idempotent.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {object} parameters Parameters supplied to create a Namespace
     * Resource.
     * 
     * @param {string} [parameters.namespaceCreateOrUpdateParametersName] The name
     * of the namespace.
     * 
     * @param {string} [parameters.provisioningState] Provisioning state of the
     * Namespace.
     * 
     * @param {string} [parameters.region] Specifies the targeted region in which
     * the namespace should be created. It can be any of the following values:
     * Australia EastAustralia SoutheastCentral USEast USEast US 2West USNorth
     * Central USSouth Central USEast AsiaSoutheast AsiaBrazil SouthJapan
     * EastJapan WestNorth EuropeWest Europe
     * 
     * @param {string} [parameters.status] Status of the namespace. It can be any
     * of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
     * 
     * @param {date} [parameters.createdAt] The time the namespace was created.
     * 
     * @param {string} [parameters.serviceBusEndpoint] Endpoint you can use to
     * perform NotificationHub operations.
     * 
     * @param {string} [parameters.subscriptionId] The Id of the Azure
     * subscription associated with the namespace.
     * 
     * @param {string} [parameters.scaleUnit] ScaleUnit where the namespace gets
     * created
     * 
     * @param {boolean} [parameters.enabled] Whether or not the namespace is
     * currently enabled.
     * 
     * @param {boolean} [parameters.critical] Whether or not the namespace is set
     * as Critical.
     * 
     * @param {string} [parameters.namespaceType] The namespace type. Possible
     * values include: 'Messaging', 'NotificationHub'
     * 
     * @param {string} parameters.location Resource location
     * 
     * @param {object} [parameters.tags] Resource tags
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceGroupName: string, namespaceName: string, parameters: models.NamespaceCreateOrUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NamespaceResource>): void;
    createOrUpdate(resourceGroupName: string, namespaceName: string, parameters: models.NamespaceCreateOrUpdateParameters, callback: ServiceCallback<models.NamespaceResource>): void;

    /**
     * Deletes an existing namespace. This operation also removes all associated
     * notificationHubs under the namespace.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, namespaceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, namespaceName: string, callback: ServiceCallback<void>): void;

    /**
     * Deletes an existing namespace. This operation also removes all associated
     * notificationHubs under the namespace.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginDeleteMethod(resourceGroupName: string, namespaceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, namespaceName: string, callback: ServiceCallback<void>): void;

    /**
     * Returns the description for the specified namespace.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, namespaceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NamespaceResource>): void;
    get(resourceGroupName: string, namespaceName: string, callback: ServiceCallback<models.NamespaceResource>): void;

    /**
     * Creates an authorization rule for a namespace
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} authorizationRuleName Aauthorization Rule Name.
     * 
     * @param {object} parameters The shared access authorization rule.
     * 
     * @param {object} parameters.properties Properties of the Namespace
     * AuthorizationRules.
     * 
     * @param {array} [parameters.properties.rights] The rights associated with
     * the rule.
     * 
     * @param {string} parameters.location Resource location
     * 
     * @param {object} [parameters.tags] Resource tags
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, parameters: models.SharedAccessAuthorizationRuleCreateOrUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessAuthorizationRuleResource>): void;
    createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, parameters: models.SharedAccessAuthorizationRuleCreateOrUpdateParameters, callback: ServiceCallback<models.SharedAccessAuthorizationRuleResource>): void;

    /**
     * Deletes a namespace authorization rule
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} authorizationRuleName Authorization Rule Name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets an authorization rule for a namespace by name.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name
     * 
     * @param {string} authorizationRuleName Authorization rule name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessAuthorizationRuleResource>): void;
    getAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, callback: ServiceCallback<models.SharedAccessAuthorizationRuleResource>): void;

    /**
     * Lists the available namespaces within a resourceGroup.
     *
     * @param {string} resourceGroupName The name of the resource group. If
     * resourceGroupName value is null the method lists all the namespaces within
     * subscription
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NamespaceListResult>): void;
    list(resourceGroupName: string, callback: ServiceCallback<models.NamespaceListResult>): void;

    /**
     * Lists all the available namespaces within the subscription irrespective of
     * the resourceGroups.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAll(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NamespaceListResult>): void;
    listAll(callback: ServiceCallback<models.NamespaceListResult>): void;

    /**
     * Gets the authorization rules for a namespace.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAuthorizationRules(resourceGroupName: string, namespaceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessAuthorizationRuleListResult>): void;
    listAuthorizationRules(resourceGroupName: string, namespaceName: string, callback: ServiceCallback<models.SharedAccessAuthorizationRuleListResult>): void;

    /**
     * Gets the Primary and Secondary ConnectionStrings to the namespace
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} authorizationRuleName The connection string of the
     * namespace for the specified authorizationRule.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listKeys(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListKeys>): void;
    listKeys(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, callback: ServiceCallback<models.ResourceListKeys>): void;

    /**
     * Regenerates the Primary/Secondary Keys to the Namespace Authorization Rule
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} authorizationRuleName The connection string of the
     * namespace for the specified authorizationRule.
     * 
     * @param {object} parameters Parameters supplied to regenerate the Namespace
     * Authorization Rule Key.
     * 
     * @param {string} [parameters.policyKey] Name of the key that has to be
     * regenerated for the Namespace/Notification Hub Authorization Rule. The
     * value can be Primary Key/Secondary Key.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    regenerateKeys(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, parameters: models.PolicykeyResource, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListKeys>): void;
    regenerateKeys(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, parameters: models.PolicykeyResource, callback: ServiceCallback<models.ResourceListKeys>): void;

    /**
     * Lists the available namespaces within a resourceGroup.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NamespaceListResult>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.NamespaceListResult>): void;

    /**
     * Lists all the available namespaces within the subscription irrespective of
     * the resourceGroups.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAllNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NamespaceListResult>): void;
    listAllNext(nextPageLink: string, callback: ServiceCallback<models.NamespaceListResult>): void;

    /**
     * Gets the authorization rules for a namespace.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAuthorizationRulesNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessAuthorizationRuleListResult>): void;
    listAuthorizationRulesNext(nextPageLink: string, callback: ServiceCallback<models.SharedAccessAuthorizationRuleListResult>): void;
}

/**
 * @class
 * NotificationHubs
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the NotificationHubsManagementClient.
 */
export interface NotificationHubs {

    /**
     * Checks the availability of the given notificationHub in a namespace.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {object} parameters The notificationHub name.
     * 
     * @param {boolean} [parameters.isAvailiable] True if the name is available
     * and can be used to create new Namespace/NotificationHub. Otherwise false.
     * 
     * @param {string} parameters.location Resource location
     * 
     * @param {object} [parameters.tags] Resource tags
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    checkAvailability(resourceGroupName: string, namespaceName: string, parameters: models.CheckAvailabilityParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CheckAvailabilityResult>): void;
    checkAvailability(resourceGroupName: string, namespaceName: string, parameters: models.CheckAvailabilityParameters, callback: ServiceCallback<models.CheckAvailabilityResult>): void;

    /**
     * Creates/Update a NotificationHub in a namespace.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} notificationHubName The notification hub name.
     * 
     * @param {object} parameters Parameters supplied to the create/update a
     * NotificationHub Resource.
     * 
     * @param {string} [parameters.notificationHubCreateOrUpdateParametersName]
     * The NotificationHub name.
     * 
     * @param {string} [parameters.registrationTtl] The RegistrationTtl of the
     * created NotificationHub
     * 
     * @param {array} [parameters.authorizationRules] The AuthorizationRules of
     * the created NotificationHub
     * 
     * @param {object} [parameters.apnsCredential] The ApnsCredential of the
     * created NotificationHub
     * 
     * @param {string} [parameters.apnsCredential.apnsCertificate] The APNS
     * certificate.
     * 
     * @param {string} [parameters.apnsCredential.certificateKey] The certificate
     * key.
     * 
     * @param {string} [parameters.apnsCredential.endpoint] The endpoint of this
     * credential.
     * 
     * @param {string} [parameters.apnsCredential.thumbprint] The Apns certificate
     * Thumbprint
     * 
     * @param {object} [parameters.wnsCredential] The WnsCredential of the created
     * NotificationHub
     * 
     * @param {string} [parameters.wnsCredential.packageSid] The package ID for
     * this credential.
     * 
     * @param {string} [parameters.wnsCredential.secretKey] The secret key.
     * 
     * @param {string} [parameters.wnsCredential.windowsLiveEndpoint] The Windows
     * Live endpoint.
     * 
     * @param {object} [parameters.gcmCredential] The GcmCredential of the created
     * NotificationHub
     * 
     * @param {string} [parameters.gcmCredential.gcmEndpoint] The GCM endpoint.
     * 
     * @param {string} [parameters.gcmCredential.googleApiKey] The Google API key.
     * 
     * @param {object} [parameters.mpnsCredential] The MpnsCredential of the
     * created NotificationHub
     * 
     * @param {string} [parameters.mpnsCredential.mpnsCertificate] The MPNS
     * certificate.
     * 
     * @param {string} [parameters.mpnsCredential.certificateKey] The certificate
     * key for this credential.
     * 
     * @param {string} [parameters.mpnsCredential.thumbprint] The Mpns certificate
     * Thumbprint
     * 
     * @param {object} [parameters.admCredential] The AdmCredential of the created
     * NotificationHub
     * 
     * @param {string} [parameters.admCredential.clientId] The client identifier.
     * 
     * @param {string} [parameters.admCredential.clientSecret] The credential
     * secret access key.
     * 
     * @param {string} [parameters.admCredential.authTokenUrl] The URL of the
     * authorization token.
     * 
     * @param {object} [parameters.baiduCredential] The BaiduCredential of the
     * created NotificationHub
     * 
     * @param {string} [parameters.baiduCredential.baiduApiKey] Baidu Api Key.
     * 
     * @param {string} [parameters.baiduCredential.baiduEndPoint] Baidu Endpoint.
     * 
     * @param {string} [parameters.baiduCredential.baiduSecretKey] Baidu Secret Key
     * 
     * @param {string} parameters.location Resource location
     * 
     * @param {object} [parameters.tags] Resource tags
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceGroupName: string, namespaceName: string, notificationHubName: string, parameters: models.NotificationHubCreateOrUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NotificationHubResource>): void;
    createOrUpdate(resourceGroupName: string, namespaceName: string, notificationHubName: string, parameters: models.NotificationHubCreateOrUpdateParameters, callback: ServiceCallback<models.NotificationHubResource>): void;

    /**
     * Deletes a notification hub associated with a namespace.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} notificationHubName The notification hub name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, namespaceName: string, notificationHubName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, namespaceName: string, notificationHubName: string, callback: ServiceCallback<void>): void;

    /**
     * Lists the notification hubs associated with a namespace.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} notificationHubName The notification hub name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, namespaceName: string, notificationHubName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NotificationHubResource>): void;
    get(resourceGroupName: string, namespaceName: string, notificationHubName: string, callback: ServiceCallback<models.NotificationHubResource>): void;

    /**
     * Creates/Updates an authorization rule for a NotificationHub
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} notificationHubName The notification hub name.
     * 
     * @param {string} authorizationRuleName Authorization Rule Name.
     * 
     * @param {object} parameters The shared access authorization rule.
     * 
     * @param {object} parameters.properties Properties of the Namespace
     * AuthorizationRules.
     * 
     * @param {array} [parameters.properties.rights] The rights associated with
     * the rule.
     * 
     * @param {string} parameters.location Resource location
     * 
     * @param {object} [parameters.tags] Resource tags
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, parameters: models.SharedAccessAuthorizationRuleCreateOrUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessAuthorizationRuleResource>): void;
    createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, parameters: models.SharedAccessAuthorizationRuleCreateOrUpdateParameters, callback: ServiceCallback<models.SharedAccessAuthorizationRuleResource>): void;

    /**
     * Deletes a notificationHub authorization rule
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} notificationHubName The notification hub name.
     * 
     * @param {string} authorizationRuleName Authorization Rule Name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets an authorization rule for a NotificationHub by name.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name
     * 
     * @param {string} notificationHubName The notification hub name.
     * 
     * @param {string} authorizationRuleName authorization rule name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getAuthorizationRule(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessAuthorizationRuleResource>): void;
    getAuthorizationRule(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, callback: ServiceCallback<models.SharedAccessAuthorizationRuleResource>): void;

    /**
     * Lists the notification hubs associated with a namespace.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(resourceGroupName: string, namespaceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NotificationHubListResult>): void;
    list(resourceGroupName: string, namespaceName: string, callback: ServiceCallback<models.NotificationHubListResult>): void;

    /**
     * Gets the authorization rules for a NotificationHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name
     * 
     * @param {string} notificationHubName The notification hub name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAuthorizationRules(resourceGroupName: string, namespaceName: string, notificationHubName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessAuthorizationRuleListResult>): void;
    listAuthorizationRules(resourceGroupName: string, namespaceName: string, notificationHubName: string, callback: ServiceCallback<models.SharedAccessAuthorizationRuleListResult>): void;

    /**
     * Gets the Primary and Secondary ConnectionStrings to the NotificationHub
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} notificationHubName The notification hub name.
     * 
     * @param {string} authorizationRuleName The connection string of the
     * NotificationHub for the specified authorizationRule.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listKeys(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListKeys>): void;
    listKeys(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, callback: ServiceCallback<models.ResourceListKeys>): void;

    /**
     * Regenerates the Primary/Secondary Keys to the NotificationHub Authorization
     * Rule
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} notificationHubName The notification hub name.
     * 
     * @param {string} authorizationRuleName The connection string of the
     * NotificationHub for the specified authorizationRule.
     * 
     * @param {object} parameters Parameters supplied to regenerate the
     * NotificationHub Authorization Rule Key.
     * 
     * @param {string} [parameters.policyKey] Name of the key that has to be
     * regenerated for the Namespace/Notification Hub Authorization Rule. The
     * value can be Primary Key/Secondary Key.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    regenerateKeys(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, parameters: models.PolicykeyResource, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListKeys>): void;
    regenerateKeys(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, parameters: models.PolicykeyResource, callback: ServiceCallback<models.ResourceListKeys>): void;

    /**
     * Lists the PNS Credentials associated with a notification hub .
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} namespaceName The namespace name.
     * 
     * @param {string} notificationHubName The notification hub name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getPnsCredentials(resourceGroupName: string, namespaceName: string, notificationHubName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PnsCredentialsResource>): void;
    getPnsCredentials(resourceGroupName: string, namespaceName: string, notificationHubName: string, callback: ServiceCallback<models.PnsCredentialsResource>): void;

    /**
     * Lists the notification hubs associated with a namespace.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NotificationHubListResult>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.NotificationHubListResult>): void;

    /**
     * Gets the authorization rules for a NotificationHub.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listAuthorizationRulesNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessAuthorizationRuleListResult>): void;
    listAuthorizationRulesNext(nextPageLink: string, callback: ServiceCallback<models.SharedAccessAuthorizationRuleListResult>): void;
}
