// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '015b5c33-7725-4fc2-9c81-c9b07de44668';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/015b5c33-7725-4fc2-9c81-c9b07de44668/providers/Microsoft.Compute/disks?api-version=2018-06-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'a2422a3b-79e9-4585-a90f-501dfa20a913',
  'x-ms-correlation-request-id': 'a2422a3b-79e9-4585-a90f-501dfa20a913',
  'x-ms-routing-request-id': 'CENTRALUS:20170125T050949Z:a2422a3b-79e9-4585-a90f-501dfa20a913',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 25 Jan 2017 05:09:48 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/015b5c33-7725-4fc2-9c81-c9b07de44668/providers/Microsoft.Compute/disks?api-version=2018-06-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'a2422a3b-79e9-4585-a90f-501dfa20a913',
  'x-ms-correlation-request-id': 'a2422a3b-79e9-4585-a90f-501dfa20a913',
  'x-ms-routing-request-id': 'CENTRALUS:20170125T050949Z:a2422a3b-79e9-4585-a90f-501dfa20a913',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 25 Jan 2017 05:09:48 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; }]];