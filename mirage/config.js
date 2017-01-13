export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  this.namespace = '/api';    // make this `api`, for example, if your API is namespaced

  // This can be: this.get('/scientists');
  this.get('/scientists', (schema) => {
    return schema.scientists.all();
  });
}
