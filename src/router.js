/**
 * @method setup
 * @param  {Function}   setTitle    setTitle callback
 * @param  {Object}     options     { router: RouterInstance }
 * @return {void}
 */
const setup = (setTitle, setPrefix, setSuffix, { router }) => {
  router.afterEach((to, from) => {
    const { meta } = to

    // if has meta
    if (meta) {
      // if has title
      if (meta.title) {
        setTitle(meta.title)
      }

      // if has titlePrefix
      if (meta.titlePrefix) {
        setPrefix(meta.titlePrefix)
      }

      // if has titleSuffix
      if (meta.titleSuffix) {
        setSuffix(meta.titleSuffix)
      }
    }
  })
}

export { setup }
