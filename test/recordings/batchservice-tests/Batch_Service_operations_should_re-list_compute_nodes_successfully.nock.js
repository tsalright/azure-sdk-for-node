// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-3850571994_2-20160729t163835z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3850571994_2-20160729t163835z\",\"state\":\"reimaging\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-07-29T16:47:24.8267064Z\",\"lastBootTime\":\"2016-07-29T16:42:18.7992411Z\",\"allocationTime\":\"2016-07-29T16:38:35.0971844Z\",\"ipAddress\":\"100.73.164.54\",\"affinityId\":\"TVM:tvm-3850571994_2-20160729t163835z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    },{\r\n      \"id\":\"tvm-3850571994_3-20160729t163835z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3850571994_3-20160729t163835z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-07-29T16:42:21.2057825Z\",\"lastBootTime\":\"2016-07-29T16:42:20.1587828Z\",\"allocationTime\":\"2016-07-29T16:38:35.0971844Z\",\"ipAddress\":\"100.73.210.20\",\"affinityId\":\"TVM:tvm-3850571994_3-20160729t163835z\",\"vmSize\":\"small\",\"totalTasksRun\":2,\"totalTasksSucceeded\":1,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/helloworldnodesdktesttask\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"helloworldnodesdktesttask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-07-29T16:47:35.7829423Z\",\"endTime\":\"2016-07-29T16:47:37.798772Z\",\"schedulingError\":{\r\n              \"category\":\"UserError\",\"code\":\"TaskEnded\",\"message\":\"Task Was Ended by User Request\"\r\n            },\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/helloworldnodesdktesttask2\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"helloworldnodesdktesttask2\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-07-29T16:47:40.718548Z\",\"endTime\":\"2016-07-29T16:47:40.8235441Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e6ddf28-7cac-4c01-9536-cbec42f019d3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:49:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-3850571994_2-20160729t163835z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3850571994_2-20160729t163835z\",\"state\":\"reimaging\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-07-29T16:47:24.8267064Z\",\"lastBootTime\":\"2016-07-29T16:42:18.7992411Z\",\"allocationTime\":\"2016-07-29T16:38:35.0971844Z\",\"ipAddress\":\"100.73.164.54\",\"affinityId\":\"TVM:tvm-3850571994_2-20160729t163835z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    },{\r\n      \"id\":\"tvm-3850571994_3-20160729t163835z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3850571994_3-20160729t163835z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-07-29T16:42:21.2057825Z\",\"lastBootTime\":\"2016-07-29T16:42:20.1587828Z\",\"allocationTime\":\"2016-07-29T16:38:35.0971844Z\",\"ipAddress\":\"100.73.210.20\",\"affinityId\":\"TVM:tvm-3850571994_3-20160729t163835z\",\"vmSize\":\"small\",\"totalTasksRun\":2,\"totalTasksSucceeded\":1,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/helloworldnodesdktesttask\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"helloworldnodesdktesttask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-07-29T16:47:35.7829423Z\",\"endTime\":\"2016-07-29T16:47:37.798772Z\",\"schedulingError\":{\r\n              \"category\":\"UserError\",\"code\":\"TaskEnded\",\"message\":\"Task Was Ended by User Request\"\r\n            },\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/helloworldnodesdktesttask2\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"helloworldnodesdktesttask2\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-07-29T16:47:40.718548Z\",\"endTime\":\"2016-07-29T16:47:40.8235441Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e6ddf28-7cac-4c01-9536-cbec42f019d3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:49:22 GMT',
  connection: 'close' });
 return result; }]];