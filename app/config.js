'use strict';

angular.module('config', [])
  .constant('config', {
    'endpoint'    : "http://"+window.location.hostname+":8080",
    'provider'    : "itsyouonline", // google, github, gitlab, keycloak, saml2 or basic
    'client_id'   : "<client_id>",
    'github_url'  : null,  // replace with your enterprise github server
    'gitlab_url'  : "https://gitlab.com",  // replace with your gitlab server
    'keycloak_url': "https://keycloak.example.org",  // replace with your keycloak server
    'keycloak_realm': "master",  // replace with your keycloak realm
    'colors'      : {
      'severity': {
        'ERROR'        : '#B22222',
        'WARNING'      : '#FF7F50',
        'OK'           : '#00AA5A',
        'unknown'      : '#A6ACA8'
      },
      'highlight': 'lightgray'
    },
    'severity'    : {}, // use default severity codes
    'audio'       : {}, // no audio
    'tracking_id' : ""  // Google Analytics tracking ID eg. UA-NNNNNN-N
  });
