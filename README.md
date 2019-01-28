# DigitalServicesCoalition.Org

## Project setup
Install dependencies:
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Circle CI and Github Pages

### 1. Register
Register using your GitHub account: https://circleci.com
(_if you haven't already_)

![circle-login-with-github](https://user-images.githubusercontent.com/194400/41608075-87c753b6-73df-11e8-910d-8ab2ebc2d21b.png)

### 2. Add Project
Click the "add project" `+` button from the left-hand side menu.
Then select the project you want Circle-CI to test for you,
and click the "**Setup Project**" button:

![circle-add-project](https://user-images.githubusercontent.com/194400/41619549-950824e6-73fe-11e8-80de-390d56c90aff.png)

You should see something like this now: <br />

![circle-ci-setup-project](https://user-images.githubusercontent.com/194400/41620063-77108e54-7400-11e8-88c5-e434c7cb6474.png)

### 3. Configure Circle CI variable environment
The script also seems to require you to init the git user and email. To hide this information, the script will grab the information from circleci environment variable. You will need to configure environment variables GH_NAME (GitHub Name) and GH_EMAIL (GitHub Email).
- Really simple just go to [CircleCi](https://circleci.com)
- Click on project settings => Build Settings => Environment Variables
- Add 2 new environment variables:
    * GH_NAME (GitHub Name) .
    * GH_EMAIL (GitHub Email).

![Enviroment Variable](https://cdn-images-1.medium.com/max/800/0*75feLThKpIfxkGc0.)

### 4. Add GitHub Delivery Integration
+ Add a deploy key
+ Add a user key
![Checkout SSH keys](https://cdn-images-1.medium.com/max/800/0*vkMdyUwvzhsNqvIB.)

### 5. CircleCI configuration
Next, follow the on-screen instructions to create a `config.yml` folder and setup your `.circleci/config.yml` file.
You can configurate the config.yml file to you needs, in this [link](https://circleci.com/docs/2.0/configuration-reference/).

+++ You can create deploy.sh script for automated deploy(https://github.com/DSCoalition/digitalservicescoalition.org/blob/master/.circleci/deploy-github.sh)

### Conclusion
That’s it, from now on when you commit to develop branch it will automatically run its tests and on success, it will deploy your website to GitHub Pages!
