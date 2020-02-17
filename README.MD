<p align="center">
  <a href="https://www.learnwithjason.dev">
    <img src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,w_240/v1579281727/lwj/learnwithjason.png" alt="Learn With Jason" width="120" />
  </a>
</p>
<h1 align="center">
  Build a Cross-Platform Twitch Extension (with Darrik Moberg)
</h1>
<h3 align="center">
  This app was built live on <em>Learn With Jason</em> and it was super fun and I’m sad you weren’t there.
</h3>
<p align="center">
  But don’t worry! You can still: 
  <a href="https://www.learnwithjason.dev/build-a-cross-platform-twitch-extension"><strong>watch the video</strong></a> · 
  <a href="https://lwj-schedule-viewer.netlify.com"><strong>see the demo</strong></a> · 
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/jlengstorf/twitch-extension-stream-schedule-viewer&utm_source=learnwithjason&utm_medium=github&utm_campaign=devex"><strong>deploy this project</strong></a> · 
  <a href="https://jason.af/lwj/schedule"><strong>see upcoming episodes</strong></a>
</p>

&nbsp;

If you want to show specific information on a Twitch profile, how do you do that? In this episode, Learn With Jason moderator [Darrik Moberg](https://twitter.com/MDarrik) teaches us how to create custom extensions for Twitch that work on both the website and apps.

## This is a WIP!

This is very much a work-in-progress. It currently doesn’t twitch at all!

This extension lets users see upcoming stream event dates/times, as well as descriptions.

&nbsp;

## More Information

- [Watch this app get built live + see links and additional resources][episode]
- [Follow _Learn With Jason_ on Twitch][twitch] to watch future episodes live
- [Add the _Learn With Jason_ schedule to your Google Calendar][cal]

&nbsp;

<p align="center">
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/jlengstorf/twitch-extension-stream-schedule-viewer&utm_source=learnwithjason&utm_medium=github&utm_campaign=devex">
    <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy this project to Netlify" />
  </a>
</p>

[episode]: https://www.learnwithjason.dev/build-a-cross-platform-twitch-extension
[twitch]: https://jason.af/twitch
[cal]: https://jason.af/lwj/cal

## Development

For convenience, use Netlify Dev.

```
# install the Netlify CLI
yarn global add netlify-cli

# clone this repo
git clone git@github.com:jlengstorf/twitch-extension-stream-schedule-viewer.git

# move into the directory
cd twitch-extension-stream-schedule-viewer/

# install dependencies
yarn

# run Netlify Dev
netlify dev
```

The site + serverless functions will be running at `http://localhost:8888`.
