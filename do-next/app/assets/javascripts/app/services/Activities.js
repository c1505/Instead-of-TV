function Activities($resource) {
  return $resource("/activities/:id", { id: "@id"},
  {
    'create':  { method: 'POST' },
    'index':   { method: 'GET', isArray: true },
    'show':    { method: 'GET', isArray: false },
    'update':  { method: 'PUT' },
    'destroy': { method: 'DELETE' }
  })
}

angular
  .module('app')
  .factory('Activities', Activities);

