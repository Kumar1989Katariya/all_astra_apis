const cassandra = require('cassandra-driver')
const DefaultTableMappings = cassandra.mapping.DefaultTableMappings
const mappings = new DefaultTableMappings

/** globally shared configuration values **/

const baseURL = "1727450a-d92a-421c-9d6c-09635101f646-europe-west1.db.astra.datastax.com"
const restURL = baseURL + "https://1727450a-d92a-421c-9d6c-09635101f646-europe-west1.apps.astra.datastax.com/api/rest"
const gqlURL =  baseURL + "https://1727450a-d92a-421c-9d6c-09635101f646-europe-west1.apps.astra.datastax.com/api/graphql"
const secure_bundle_path = "/path/to/secure-connect-bundle.zip"

const keyspace = "Keyspacetest"
const username = "Katarirv"
const password = "Jetking@321"


// this is consumed by the Mapper in utility.js
// See https://docs.datastax.com/en/developer/nodejs-driver/4.5/features/mapper/
// for complete information on how to use the mapper in Node.js
const mapper_model = {
  models: {
    'users':        { tables: ['users'], keyspace, mappings },
    'user_devices': { tables: ['user_devices'], keyspace, mappings },
    'activity_log': { tables: ['activity_log'], keyspace, mappings }
  }
}

config = { baseURL, restURL, gqlURL, keyspace, username, password, secure_bundle_path, mapper_model }
module.exports = config
