// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6111?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4258\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4258\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":60,\"maxJobCount\":3,\"hiveMetastores\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6111.azuredatalakeanalytics.net\",\"accountId\":\"9afb5184-d98c-4c35-aa75-8b2ec79d2a73\",\"creationTime\":\"2016-07-01T19:03:07.497656Z\",\"lastModifiedTime\":\"2016-07-01T19:06:11.5107891Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6111\",\"name\":\"xplattestadla6111\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '840',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd1ddc814-2c1b-4039-8ef6-7b593a4457c7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '0228658f-0769-40d3-9ec9-315a9a58900d',
  'x-ms-routing-request-id': 'WESTUS:20160701T190612Z:0228658f-0769-40d3-9ec9-315a9a58900d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:06:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6111?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls4258\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4258\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":60,\"maxJobCount\":3,\"hiveMetastores\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6111.azuredatalakeanalytics.net\",\"accountId\":\"9afb5184-d98c-4c35-aa75-8b2ec79d2a73\",\"creationTime\":\"2016-07-01T19:03:07.497656Z\",\"lastModifiedTime\":\"2016-07-01T19:06:11.5107891Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6111\",\"name\":\"xplattestadla6111\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '840',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd1ddc814-2c1b-4039-8ef6-7b593a4457c7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '0228658f-0769-40d3-9ec9-315a9a58900d',
  'x-ms-routing-request-id': 'WESTUS:20160701T190612Z:0228658f-0769-40d3-9ec9-315a9a58900d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:06:12 GMT',
  connection: 'close' });
 return result; }]];