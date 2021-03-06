// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/listKeys?api-version=2020-03-01')
  .reply(200, "{\"accountName\":\"batchtestnodesdk\",\"primary\":\"efxG3ms22oXxLsNf3NdMDCkp+qDOIq0D6DjuIgivwDPV5a1UgU91+Kalnxd1KDT+ULQ6SvfG1wgwvdPTKr3pWw==\",\"secondary\":\"2z4SHXHtLUY+lGYa0yw23A1mxtDMqRY1QD9ZPW3OK2jMh8MIVJDS0cEpYgxAGWY3MaBOF8O4kFUaLYn9HpWQzw==\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '238',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': 'af00be5e-9f2a-44dd-9cc7-88d2d5cdb3ef',
  'x-ms-request-id': '3aed1553-7e19-4621-8a31-b1939fd3e5f5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072257Z:af00be5e-9f2a-44dd-9cc7-88d2d5cdb3ef',
  date: 'Sat, 02 May 2020 07:22:56 GMT',
  connection: 'close' });
 return result; }]];