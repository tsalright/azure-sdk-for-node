// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v2.0?api-version=2020-03-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '0dbe678a-c791-4b35-9fe0-05b11baee5e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-deletes': '14998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'caf63a05-09c8-469f-8c21-730aa6ba5dd2',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072216Z:caf63a05-09c8-469f-8c21-730aa6ba5dd2',
  date: 'Sat, 02 May 2020 07:22:15 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];