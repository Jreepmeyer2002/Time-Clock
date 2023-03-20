process.env.DEBUG = "true";
const queries = require("./queries")
const httpMocks = require('node-mocks-http');

describe("Test the queries", () => {
   test('test ping', () => {
      const response = httpMocks.createResponse();
      queries.ping({}, response);
      expect(response._getData()).toBe("<h1>TimeClock API</h1>");
   });

   test('test getUser', () => {
      const request = httpMocks.createRequest({
         method: 'GET',
         params: {id: 1}
      });
      const response = httpMocks.createResponse();
      queries.getUser(request, response);
      const user = {
         ID: 1,
         fname: 'john',
         lname: 'doe',
         username: 'johndoe10',
         companyID: '1',
         password: 'password'
      }
      expect(response._getJSONData()).toStrictEqual(user);
   });

   test('test getStatus', () => {
      const request = httpMocks.createRequest({
         method: 'GET',
         params: {id: 1, company: 1}
      });
      const response = httpMocks.createResponse();
      queries.getStatus(request, response);
      const status = {
         clockedIn: false
      }
      // console.log("foo", response._getData());
      expect(response._getJSONData()).toStrictEqual(status);
   });
});
