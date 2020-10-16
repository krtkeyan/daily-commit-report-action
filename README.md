# Daily Leaderboard - Github commits

>Motivate ourselves to do more actionable items and healthy competition boosts our productivity while we pursue a common goal as a team. 

### Day 01,02,03 of #100DaysOfCode
This project was implemented as part of #100DaysOfCode with an end goal to strengthen the serverless design concepts.

![](https://res.cloudinary.com/dojgeix1u/image/upload/v1602834142/Twitter_Post_-_4_2_gymoru.png)
## Steps to see it in action

1. Clone this repository and run `npm install` to install dependencies.
2. Run `wrangler secret put SLACK_WEBHOOK_URL`, it will prompt you for slack webhook url, configure it in your slack apps section, paste it here.
3. Replace `account_id` in wrangler.toml with your cloudflare account id.
4. Run `wrangler publish` to deploy the worker, it will return the deployed url if succeed. 
5. Configure your repository with github actions, by placing the .github folder content inside your repo.
6. Go to repository settings and secrets tab. Add `WEBHOOK_URL` as the secret name and deployed cloudflare url as value.
7. That's it, get your repo author's commit count for the day with leaderboard will be delivered to your slack channel.

---

## References 



#### 1. Cloudflare workers

Cloudflare workers is easily a best choice if you want to run your functions in edge locations. Suitable for simple low-latency functions. It's free to start with, all you have to do is signup and grab the account id for configuration.

To get start, generate the template using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/cloudflare/worker-template
```

#### 2. Github actions
Github actions let you write automations for your workflow.

To get start, create a folder `.github/workflows` and add `[branch'.yml` that defines the job and steps for your workflow. [Quick start with github actions](https://docs.github.com/en/free-pro-team@latest/actions/quickstart)

#### 3. Slackbot
Go to your slack apps page, create a bot and under incoming section - create a webhook trigger that notifies your specified channel. [Create a basic slack bot - freecodecamp](https://www.freecodecamp.org/news/how-to-build-a-basic-slackbot-a-beginners-guide-6b40507db5c5/)


---

### Day 01

Planned to learn clouflare workers as initial challenge and thought to do something cool for us, just had the base idea about building slackbot to measure and track our progress, haven't decided about what. Started with cloudflare configuration, their documentation guides me to setup a simple trigger to slack easier.

### Day 02

Thought to learn github actions ( inspired by automations in [actionsflow](https://actionsflow.github.io/)) by the way decided to improve our productivity we can try our way to focus on action items daily. We just thought out our assumption, let's start with who makes more commits ( Need to form some rules, not to cheat our way :P ).
At first haven't explored much, thought need to track each commits separately. Later, came to know about `actions/checkout` action step, that clones the repo into the runner and `git` cmd is accessible. That took a lot more time, actually.

### Day 03
Integrated the cloudflare worker with the github actions by means of webhook-action, Thanks to Joel for making this action available in store. After integration, workflow keeps on failing with 500 status code. Cloudflare doesn't support native logger, that makes harder to find what causes the issue. At last, found out the root cause and got our slack message.


