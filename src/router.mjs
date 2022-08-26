/**
 * @method setup
 * @param  {Function}   setTitle    setTitle callback
 * @param  {Object}     options     { router: RouterInstance }
 * @return {void}
 */
const setup = (setTitle, { router }) => {
  router.afterEach((to, from) => {
    const { meta } = to

    // if has meta and title
    if (meta && meta.title) {
      setTitle(meta.title)
    }
  })
}

export { setup }
