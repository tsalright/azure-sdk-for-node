// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '38b598fc-e57a-423f-b2e7-dc0ddb631f1f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/testg102?api-version=2018-05-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '262ee8d1-9e43-4f0f-81c1-de03d9f8be5e',
  'x-ms-correlation-request-id': '262ee8d1-9e43-4f0f-81c1-de03d9f8be5e',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014710Z:262ee8d1-9e43-4f0f-81c1-de03d9f8be5e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:47:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/testg102?api-version=2018-05-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '262ee8d1-9e43-4f0f-81c1-de03d9f8be5e',
  'x-ms-correlation-request-id': '262ee8d1-9e43-4f0f-81c1-de03d9f8be5e',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014710Z:262ee8d1-9e43-4f0f-81c1-de03d9f8be5e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:47:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/testg102?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '88c9cc87-a44d-48cd-8fb8-6800d7a9faac',
  'x-ms-correlation-request-id': '88c9cc87-a44d-48cd-8fb8-6800d7a9faac',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014710Z:88c9cc87-a44d-48cd-8fb8-6800d7a9faac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:47:09 GMT',
  connection: 'close',
  'content-length': '206' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/testg102?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '88c9cc87-a44d-48cd-8fb8-6800d7a9faac',
  'x-ms-correlation-request-id': '88c9cc87-a44d-48cd-8fb8-6800d7a9faac',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014710Z:88c9cc87-a44d-48cd-8fb8-6800d7a9faac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:47:09 GMT',
  connection: 'close',
  'content-length': '206' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups?api-version=2018-05-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/ARMDash\",\"name\":\"ARMDash\",\"location\":\"southcentralus\",\"tags\":{\"Environment\":\"Test\",\"Dept\":\"IT\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/Default-ApplicationInsights-CentralUS\",\"name\":\"Default-ApplicationInsights-CentralUS\",\"location\":\"centralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/Default-Storage-WestUS\",\"name\":\"Default-Storage-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/onesdk2851\",\"name\":\"onesdk2851\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/vtest\",\"name\":\"vtest\",\"location\":\"southcentralus\",\"tags\":{\"Value\":\"testval\",\"Name\":\"testtag\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/vtest8\",\"name\":\"vtest8\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xTestResource3432\",\"name\":\"xTestResource3432\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '6e15c0d5-3b30-4a5e-8728-80e80e4be5bf',
  'x-ms-correlation-request-id': '6e15c0d5-3b30-4a5e-8728-80e80e4be5bf',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014710Z:6e15c0d5-3b30-4a5e-8728-80e80e4be5bf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:47:10 GMT',
  connection: 'close',
  'content-length': '1619' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups?api-version=2018-05-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/ARMDash\",\"name\":\"ARMDash\",\"location\":\"southcentralus\",\"tags\":{\"Environment\":\"Test\",\"Dept\":\"IT\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/Default-ApplicationInsights-CentralUS\",\"name\":\"Default-ApplicationInsights-CentralUS\",\"location\":\"centralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/Default-Storage-WestUS\",\"name\":\"Default-Storage-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/onesdk2851\",\"name\":\"onesdk2851\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/vtest\",\"name\":\"vtest\",\"location\":\"southcentralus\",\"tags\":{\"Value\":\"testval\",\"Name\":\"testtag\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/vtest8\",\"name\":\"vtest8\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xTestResource3432\",\"name\":\"xTestResource3432\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '6e15c0d5-3b30-4a5e-8728-80e80e4be5bf',
  'x-ms-correlation-request-id': '6e15c0d5-3b30-4a5e-8728-80e80e4be5bf',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014710Z:6e15c0d5-3b30-4a5e-8728-80e80e4be5bf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:47:10 GMT',
  connection: 'close',
  'content-length': '1619' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/testg102?api-version=2018-05-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2017-05-10',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'd14199ae-d067-47ef-8f16-ffb094864b77',
  'x-ms-correlation-request-id': 'd14199ae-d067-47ef-8f16-ffb094864b77',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014711Z:d14199ae-d067-47ef-8f16-ffb094864b77',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:47:10 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/testg102?api-version=2018-05-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2017-05-10',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'd14199ae-d067-47ef-8f16-ffb094864b77',
  'x-ms-correlation-request-id': 'd14199ae-d067-47ef-8f16-ffb094864b77',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014711Z:d14199ae-d067-47ef-8f16-ffb094864b77',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:47:10 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2017-05-10')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2017-05-10',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': '6f56fe0d-98ca-4915-98ac-7c0f828f4848',
  'x-ms-correlation-request-id': '6f56fe0d-98ca-4915-98ac-7c0f828f4848',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014741Z:6f56fe0d-98ca-4915-98ac-7c0f828f4848',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:47:41 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2017-05-10')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2017-05-10',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': '6f56fe0d-98ca-4915-98ac-7c0f828f4848',
  'x-ms-correlation-request-id': '6f56fe0d-98ca-4915-98ac-7c0f828f4848',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014741Z:6f56fe0d-98ca-4915-98ac-7c0f828f4848',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:47:41 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2017-05-10')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '979dea0d-017e-49a0-b29e-6fde0902005d',
  'x-ms-correlation-request-id': '979dea0d-017e-49a0-b29e-6fde0902005d',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014811Z:979dea0d-017e-49a0-b29e-6fde0902005d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:48:10 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2017-05-10')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '979dea0d-017e-49a0-b29e-6fde0902005d',
  'x-ms-correlation-request-id': '979dea0d-017e-49a0-b29e-6fde0902005d',
  'x-ms-routing-request-id': 'WESTUS2:20161124T014811Z:979dea0d-017e-49a0-b29e-6fde0902005d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Nov 2016 01:48:10 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];