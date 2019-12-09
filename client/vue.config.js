module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/contact'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
