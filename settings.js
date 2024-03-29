exports.db_username = '';
exports.db_password = '';
exports.db_name = 'airpendb';

exports.admin_username = 'admin';
exports.admin_password = 'password';

exports.defaultroom = 'default';
exports.defaultcolumns = 5;

exports.app_port = 0;

if( process.env.VCAP_SERVICES ){
  var VCAP_SERVICES = JSON.parse( process.env.VCAP_SERVICES );
  if( VCAP_SERVICES && VCAP_SERVICES.cloudantNoSQLDB ){
    exports.db_username = VCAP_SERVICES.cloudantNoSQLDB[0].credentials.username;
    exports.db_password = VCAP_SERVICES.cloudantNoSQLDB[0].credentials.password;
  }
}
