module.exports = (service) => {
service.on('UPDATE', 'tenant', async (req, next) => {
  const res = await next();     // first call default implementation which is doing the HDI container creation
  let url = 'https://112b32c5trial-dev-bookshop-srv.cfapps.eu10.hana.ondemand.com/admin';
  console.log('[INFO ][ON_UPDATE_TENANT] ' + 'Application URL is ' + url);
  return url;
} );
}

