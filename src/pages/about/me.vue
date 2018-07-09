<script>
export default {
  name: 'me',
  avatar: process.env.VUE_APP_AVATAR
}
</script>

<template>
  <div class="box">
    <article class="media is-block-touch">
      <div class="media-left">
        <figure class="image is-120x120">
          <img :src="$options.avatar" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Vinicius Reis</strong>
            <small><a href="https://github.com/vinicius73">@vinicius73</a></small>
            <br>
            I am Full-Stack Severino-Developer, married and father a beautiful daughter. <br>
            I like movies, books, manga, comics, games... <br>
            That is, I like more things than I have time to do them. <br>
            I record videos for <a href="https://www.youtube.com/channel/UCTluPqMkm90zyw6mCde561A">CodeCasts</a> and work on <a href="https://decision6.com">Decision6</a> as an Application Engineer.
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="twitter" target="_blank" href="https://twitter.com/luizvinicius73">
              <span class="icon is-small">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="github" target="_blank" href="https://github.com/vinicius73">
              <span class="icon is-small">
                <i class="fab fa-github" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="youtube" target="_blank" href="https://www.youtube.com/channel/UCTluPqMkm90zyw6mCde561A">
              <span class="icon is-small">
                <i class="fab fa-youtube" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<style>
  @media screen and (max-width: 1023px) {
    .media-left {
      margin-right: 0;
      margin-bottom: 5px;
    }
  }
</style>
