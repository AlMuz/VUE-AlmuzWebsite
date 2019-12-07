module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/contact',
        '/work'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
