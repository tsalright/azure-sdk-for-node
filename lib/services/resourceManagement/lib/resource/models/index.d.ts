/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";

export {

  BaseResource,
  CloudError
};

/**
 * Deployment filter.
 */
export interface DeploymentExtendedFilter {
  /**
   * The provisioning state.
   */
  provisioningState?: string;
}

/**
 * Resource filter.
 */
export interface GenericResourceFilter {
  /**
   * The resource type.
   */
  resourceType?: string;
  /**
   * The tag name.
   */
  tagname?: string;
  /**
   * The tag value.
   */
  tagvalue?: string;
}

/**
 * Resource group filter.
 */
export interface ResourceGroupFilter {
  /**
   * The tag name.
   */
  tagName?: string;
  /**
   * The tag value.
   */
  tagValue?: string;
}

/**
 * Entity representing the reference to the template.
 */
export interface TemplateLink {
  /**
   * The URI of the template to deploy.
   */
  uri: string;
  /**
   * If included, must match the ContentVersion in the template.
   */
  contentVersion?: string;
}

/**
 * Entity representing the reference to the deployment parameters.
 */
export interface ParametersLink {
  /**
   * The URI of the parameters file.
   */
  uri: string;
  /**
   * If included, must match the ContentVersion in the template.
   */
  contentVersion?: string;
}

export interface DebugSetting {
  /**
   * Specifies the type of information to log for debugging. The permitted values are none,
   * requestContent, responseContent, or both requestContent and responseContent separated by a
   * comma. The default is none. When setting this value, carefully consider the type of
   * information you are passing in during deployment. By logging information about the request or
   * response, you could potentially expose sensitive data that is retrieved through the deployment
   * operations.
  */
  detailLevel?: string;
}

/**
 * Deployment on error behavior.
*/
export interface OnErrorDeployment {
  /**
   * The deployment on error behavior type. Possible values are LastSuccessful and
   * SpecificDeployment. Possible values include: 'LastSuccessful', 'SpecificDeployment'
  */
  type?: string;
  /**
   * The deployment to be used on error case.
  */
  deploymentName?: string;
}

/**
 * Deployment properties.
*/
export interface DeploymentProperties {
  /**
   * The template content. You use this element when you want to pass the template syntax directly
   * in the request rather than link to an existing template. It can be a JObject or well-formed
   * JSON string. Use either the templateLink property or the template property, but not both.
  */
  template?: any;
  /**
   * The URI of the template. Use either the templateLink property or the template property, but
   * not both.
  */
  templateLink?: TemplateLink;
  /**
   * Name and value pairs that define the deployment parameters for the template. You use this
   * element when you want to provide the parameter values directly in the request rather than link
   * to an existing parameter file. Use either the parametersLink property or the parameters
   * property, but not both. It can be a JObject or a well formed JSON string.
  */
  parameters?: any;
  /**
   * The URI of parameters file. You use this element to link to an existing parameters file. Use
   * either the parametersLink property or the parameters property, but not both.
  */
  parametersLink?: ParametersLink;
  /**
   * The mode that is used to deploy resources. This value can be either Incremental or Complete.
   * In Incremental mode, resources are deployed without deleting existing resources that are not
   * included in the template. In Complete mode, resources are deployed and existing resources in
   * the resource group that are not included in the template are deleted. Be careful when using
   * Complete mode as you may unintentionally delete resources. Possible values include:
   * 'Incremental', 'Complete'
  */
  mode: string;
  /**
   * The debug setting of the deployment.
  */
  debugSetting?: DebugSetting;
  /**
   * The deployment on error behavior.
  */
  onErrorDeployment?: OnErrorDeployment;
}

/**
 * Deployment operation parameters.
*/
export interface Deployment {
  /**
   * The location to store the deployment data.
  */
  location?: string;
  /**
   * The deployment properties.
  */
  properties: DeploymentProperties;
}

/**
 * The deployment export result.
*/
export interface DeploymentExportResult {
  /**
   * The template content.
  */
  template?: any;
}

/**
 * The detailed error message of resource management.
*/
export interface ResourceManagementErrorWithDetails {
  /**
   * The error code returned when exporting the template.
  */
  readonly code?: string;
  /**
   * The error message describing the export error.
  */
  readonly message?: string;
  /**
   * The target of the error.
  */
  readonly target?: string;
  /**
   * Validation error.
  */
  readonly details?: ResourceManagementErrorWithDetails[];
}

/**
 * The type of the paths for alias.
*/
export interface AliasPathType {
  /**
   * The path of an alias.
  */
  path?: string;
  /**
   * The API versions.
  */
  apiVersions?: string[];
}

/**
 * The alias type.
*/
export interface AliasType {
  /**
   * The alias name.
  */
  name?: string;
  /**
   * The paths for an alias.
  */
  paths?: AliasPathType[];
}

/**
 * Resource type managed by the resource provider.
*/
export interface ProviderResourceType {
  /**
   * The resource type.
  */
  resourceType?: string;
  /**
   * The collection of locations where this resource type can be created.
  */
  locations?: string[];
  /**
   * The aliases that are supported by this resource type.
  */
  aliases?: AliasType[];
  /**
   * The API version.
  */
  apiVersions?: string[];
  /**
   * The properties.
  */
  properties?: { [propertyName: string]: string };
}

/**
 * Resource provider information.
*/
export interface Provider {
  /**
   * The provider ID.
  */
  readonly id?: string;
  /**
   * The namespace of the resource provider.
  */
  namespace?: string;
  /**
   * The registration state of the provider.
  */
  readonly registrationState?: string;
  /**
   * The collection of provider resource types.
  */
  readonly resourceTypes?: ProviderResourceType[];
}

/**
 * Deployment dependency information.
*/
export interface BasicDependency {
  /**
   * The ID of the dependency.
  */
  id?: string;
  /**
   * The dependency resource type.
  */
  resourceType?: string;
  /**
   * The dependency resource name.
  */
  resourceName?: string;
}

/**
 * Deployment dependency information.
*/
export interface Dependency {
  /**
   * The list of dependencies.
  */
  dependsOn?: BasicDependency[];
  /**
   * The ID of the dependency.
  */
  id?: string;
  /**
   * The dependency resource type.
  */
  resourceType?: string;
  /**
   * The dependency resource name.
  */
  resourceName?: string;
}

/**
 * Deployment on error behavior with additional details.
*/
export interface OnErrorDeploymentExtended {
  /**
   * The state of the provisioning for the on error deployment.
  */
  readonly provisioningState?: string;
  /**
   * The deployment on error behavior type. Possible values are LastSuccessful and
   * SpecificDeployment. Possible values include: 'LastSuccessful', 'SpecificDeployment'
  */
  type?: string;
  /**
   * The deployment to be used on error case.
  */
  deploymentName?: string;
}

/**
 * Deployment properties with additional details.
*/
export interface DeploymentPropertiesExtended {
  /**
   * The state of the provisioning.
  */
  readonly provisioningState?: string;
  /**
   * The correlation ID of the deployment.
  */
  readonly correlationId?: string;
  /**
   * The timestamp of the template deployment.
  */
  readonly timestamp?: Date;
  /**
   * Key/value pairs that represent deployment output.
  */
  outputs?: any;
  /**
   * The list of resource providers needed for the deployment.
  */
  providers?: Provider[];
  /**
   * The list of deployment dependencies.
  */
  dependencies?: Dependency[];
  /**
   * The template content. Use only one of Template or TemplateLink.
  */
  template?: any;
  /**
   * The URI referencing the template. Use only one of Template or TemplateLink.
  */
  templateLink?: TemplateLink;
  /**
   * Deployment parameters. Use only one of Parameters or ParametersLink.
  */
  parameters?: any;
  /**
   * The URI referencing the parameters. Use only one of Parameters or ParametersLink.
  */
  parametersLink?: ParametersLink;
  /**
   * The deployment mode. Possible values are Incremental and Complete. Possible values include:
   * 'Incremental', 'Complete'
  */
  mode?: string;
  /**
   * The debug setting of the deployment.
  */
  debugSetting?: DebugSetting;
  /**
   * The deployment on error behavior.
  */
  onErrorDeployment?: OnErrorDeploymentExtended;
}

/**
 * Information from validate template deployment response.
*/
export interface DeploymentValidateResult {
  /**
   * Validation error.
  */
  error?: ResourceManagementErrorWithDetails;
  /**
   * The template deployment properties.
  */
  properties?: DeploymentPropertiesExtended;
}

/**
 * Deployment information.
*/
export interface DeploymentExtended extends BaseResource {
  /**
   * The ID of the deployment.
  */
  readonly id?: string;
  /**
   * The name of the deployment.
  */
  readonly name?: string;
  /**
   * The type of the deployment.
  */
  readonly type?: string;
  /**
   * the location of the deployment.
  */
  location?: string;
  /**
   * Deployment properties.
  */
  properties?: DeploymentPropertiesExtended;
}

/**
 * Plan for the resource.
*/
export interface Plan {
  /**
   * The plan ID.
  */
  name?: string;
  /**
   * The publisher ID.
  */
  publisher?: string;
  /**
   * The offer ID.
  */
  product?: string;
  /**
   * The promotion code.
  */
  promotionCode?: string;
  /**
   * The plan's version.
  */
  version?: string;
}

/**
 * SKU for the resource.
*/
export interface Sku {
  /**
   * The SKU name.
  */
  name?: string;
  /**
   * The SKU tier.
  */
  tier?: string;
  /**
   * The SKU size.
  */
  size?: string;
  /**
   * The SKU family.
  */
  family?: string;
  /**
   * The SKU model.
  */
  model?: string;
  /**
   * The SKU capacity.
  */
  capacity?: number;
}

export interface IdentityUserAssignedIdentitiesValue {
  /**
   * The principal id of user assigned identity.
  */
  readonly principalId?: string;
  /**
   * The client id of user assigned identity.
  */
  readonly clientId?: string;
}

/**
 * Identity for the resource.
*/
export interface Identity {
  /**
   * The principal ID of resource identity.
  */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
  */
  readonly tenantId?: string;
  /**
   * The identity type. Possible values include: 'SystemAssigned', 'UserAssigned', 'SystemAssigned,
   * UserAssigned', 'None'
  */
  type?: string;
  /**
   * The list of user identities associated with the resource. The user identity dictionary key
   * references will be ARM resource ids in the form:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
  */
  userAssignedIdentities?: { [propertyName: string]: IdentityUserAssignedIdentitiesValue };
}

/**
 * Specified resource.
*/
export interface Resource extends BaseResource {
  /**
   * Resource ID
  */
  readonly id?: string;
  /**
   * Resource name
  */
  readonly name?: string;
  /**
   * Resource type
  */
  readonly type?: string;
  /**
   * Resource location
  */
  location?: string;
  /**
   * Resource tags
  */
  tags?: { [propertyName: string]: string };
}

/**
 * Resource information.
*/
export interface GenericResource extends Resource {
  /**
   * The plan of the resource.
  */
  plan?: Plan;
  /**
   * The resource properties.
  */
  properties?: any;
  /**
   * The kind of the resource.
  */
  kind?: string;
  /**
   * ID of the resource that manages this resource.
  */
  managedBy?: string;
  /**
   * The SKU of the resource.
  */
  sku?: Sku;
  /**
   * The identity of the resource.
  */
  identity?: Identity;
}

/**
 * The resource group properties.
*/
export interface ResourceGroupProperties {
  /**
   * The provisioning state.
  */
  readonly provisioningState?: string;
}

/**
 * Resource group information.
*/
export interface ResourceGroup extends BaseResource {
  /**
   * The ID of the resource group.
  */
  readonly id?: string;
  /**
   * The name of the resource group.
  */
  readonly name?: string;
  /**
   * The type of the resource group.
  */
  readonly type?: string;
  properties?: ResourceGroupProperties;
  /**
   * The location of the resource group. It cannot be changed after the resource group has been
   * created. It must be one of the supported Azure locations.
  */
  location: string;
  /**
   * The ID of the resource that manages this resource group.
  */
  managedBy?: string;
  /**
   * The tags attached to the resource group.
  */
  tags?: { [propertyName: string]: string };
}

/**
 * Resource group information.
*/
export interface ResourceGroupPatchable {
  /**
   * The name of the resource group.
  */
  name?: string;
  properties?: ResourceGroupProperties;
  /**
   * The ID of the resource that manages this resource group.
  */
  managedBy?: string;
  /**
   * The tags attached to the resource group.
  */
  tags?: { [propertyName: string]: string };
}

/**
 * Parameters of move resources.
*/
export interface ResourcesMoveInfo {
  /**
   * The IDs of the resources.
  */
  resources?: string[];
  /**
   * The target resource group.
  */
  targetResourceGroup?: string;
}

/**
 * Export resource group template request parameters.
*/
export interface ExportTemplateRequest {
  /**
   * The IDs of the resources. The only supported string currently is '*' (all resources). Future
   * updates will support exporting specific resources.
  */
  resources?: string[];
  /**
   * The export template options. Supported values include 'IncludeParameterDefaultValue',
   * 'IncludeComments' or 'IncludeParameterDefaultValue, IncludeComments
  */
  options?: string;
}

/**
 * Tag count.
*/
export interface TagCount {
  /**
   * Type of count.
  */
  type?: string;
  /**
   * Value of count.
  */
  value?: number;
}

/**
 * Tag information.
*/
export interface TagValue extends BaseResource {
  /**
   * The tag ID.
  */
  readonly id?: string;
  /**
   * The tag value.
  */
  tagValue?: string;
  /**
   * The tag value count.
  */
  count?: TagCount;
}

/**
 * Tag details.
*/
export interface TagDetails {
  /**
   * The tag ID.
  */
  readonly id?: string;
  /**
   * The tag name.
  */
  tagName?: string;
  /**
   * The total number of resources that use the resource tag. When a tag is initially created and
   * has no associated resources, the value is 0.
  */
  count?: TagCount;
  /**
   * The list of tag values.
  */
  values?: TagValue[];
}

/**
 * Target resource.
*/
export interface TargetResource {
  /**
   * The ID of the resource.
  */
  id?: string;
  /**
   * The name of the resource.
  */
  resourceName?: string;
  /**
   * The type of the resource.
  */
  resourceType?: string;
}

/**
 * HTTP message.
*/
export interface HttpMessage {
  /**
   * HTTP message content.
  */
  content?: any;
}

/**
 * Deployment operation properties.
*/
export interface DeploymentOperationProperties {
  /**
   * The state of the provisioning.
  */
  readonly provisioningState?: string;
  /**
   * The date and time of the operation.
  */
  readonly timestamp?: Date;
  /**
   * Deployment operation service request id.
  */
  readonly serviceRequestId?: string;
  /**
   * Operation status code.
  */
  readonly statusCode?: string;
  /**
   * Operation status message.
  */
  readonly statusMessage?: any;
  /**
   * The target resource.
  */
  readonly targetResource?: TargetResource;
  /**
   * The HTTP request message.
  */
  readonly request?: HttpMessage;
  /**
   * The HTTP response message.
  */
  readonly response?: HttpMessage;
}

/**
 * Deployment operation information.
*/
export interface DeploymentOperation {
  /**
   * Full deployment operation ID.
  */
  readonly id?: string;
  /**
   * Deployment operation ID.
  */
  readonly operationId?: string;
  /**
   * Deployment properties.
  */
  properties?: DeploymentOperationProperties;
}

/**
 * Resource provider operation's display properties.
*/
export interface ResourceProviderOperationDisplayProperties {
  /**
   * Operation description.
  */
  publisher?: string;
  /**
   * Operation provider.
  */
  provider?: string;
  /**
   * Operation resource.
  */
  resource?: string;
  /**
   * Resource provider operation.
  */
  operation?: string;
  /**
   * Operation description.
  */
  description?: string;
}

/**
 * Sub-resource.
*/
export interface SubResource extends BaseResource {
  /**
   * Resource ID
  */
  id?: string;
}

/**
 * Resource group export result.
*/
export interface ResourceGroupExportResult {
  /**
   * The template content.
  */
  template?: any;
  /**
   * The error.
  */
  error?: ResourceManagementErrorWithDetails;
}

/**
 * The object that represents the operation.
*/
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Resources
  */
  provider?: string;
  /**
   * Resource on which the operation is performed: Profile, endpoint, etc.
  */
  resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
  */
  operation?: string;
  /**
   * Description of the operation.
  */
  description?: string;
}

/**
 * Microsoft.Resources operation
*/
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
  */
  name?: string;
  /**
   * The object that represents the operation.
  */
  display?: OperationDisplay;
}

/**
 * Result of the request to list Microsoft.Resources operations. It contains a list of operations
 * and a URL link to get the next set of results.
*/
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
  */
  nextLink?: string;
}

/**
 * List of deployments.
*/
export interface DeploymentListResult extends Array<DeploymentExtended> {
  /**
   * The URL to use for getting the next set of results.
  */
  readonly nextLink?: string;
}

/**
 * List of resource providers.
*/
export interface ProviderListResult extends Array<Provider> {
  /**
   * The URL to use for getting the next set of results.
  */
  readonly nextLink?: string;
}

/**
 * List of resource groups.
*/
export interface ResourceListResult extends Array<GenericResource> {
  /**
   * The URL to use for getting the next set of results.
  */
  readonly nextLink?: string;
}

/**
 * List of resource groups.
*/
export interface ResourceGroupListResult extends Array<ResourceGroup> {
  /**
   * The URL to use for getting the next set of results.
  */
  readonly nextLink?: string;
}

/**
 * List of subscription tags.
*/
export interface TagsListResult extends Array<TagDetails> {
  /**
   * The URL to use for getting the next set of results.
  */
  readonly nextLink?: string;
}

/**
 * List of deployment operations.
*/
export interface DeploymentOperationsListResult extends Array<DeploymentOperation> {
  /**
   * The URL to use for getting the next set of results.
  */
  readonly nextLink?: string;
}
