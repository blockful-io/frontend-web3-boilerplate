## Hi! This is [Blockful's](https://blockful.io/) web3 frontEnd boilerplate

This boilerplate is a WIP and, will still be till the end of the days, since we understand technology evolves through time and we aim to never stop innovating and growing towards DevEx maturity 🌐👨🏼‍💻👩🏻‍💻👨🏽‍💻👩🏾‍💻

To install the project in your personal computer, open your terminal command line and type:

`git clone https://github.com/blockful-io/frontend-web3-boilerplate.git`

## TLDR;

In this Readme you will learn how to install our boilerplate in your local development environment, how to reuse it according to your project needs and how to best extract value of these tools we researched on, puzzled-in and found as the best tools of the current worldwide tech context for building and scaling ideas in the web3 eco-system through users interactivity. For more information on the backEnd and smartContract pieces of the cake that makes a great product please refer to our other repos that are also available in our organization GitHub account 🛜💻

## Running the dApp

Simple like doing a banana pancake in sunday's morning: if have done it in the past, you know how to do it, if you do it frequently, you do it quickly and with joy 🥞⬇️

```bash
npm install
# or
yarn add
# or
pnpm install
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

You know can access our pre-definition of a nice product set of features in port 3000, a.k.a. [http://localhost:3000](http://localhost:3000)

If you know Next.js you will understand our routing system!

P.S.: if you have never used Next pages, here is a quick win you can do for code and interface changes visualizing (it is always fun to see a first step of progress before trying to be a master in some kind of art, isn't it?):

You can start editing the HTML of the file `src/pages/index.tsx` 🔧👷🏽‍♀️

OK, amazing! Let's step forward! 🫱🏻‍🫲🏾

Need more Next.js [context](https://nextjs.org/docs) or need to learn it from [scratch](https://nextjs.org/learn)? ⬅️ Click

## Deep diving into architectural decisions

A good software is a well organized software: this is one of the principals of a valuable creation and one of the virtues of a well-recognized developer, thus, navigate with us through our dApp architectural decisions:

`/public`:
In the root directory in can find a public folder which should contain all different images or static content you want to include in your creation: this guarantees optimized builds for that peaceful user experience because Next.js deals [well](https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets) with these assets serving to the browser.

`/src`:
The parent of a huge application purpose... Storing the app!

`/src/components`:
Atomic-design teaches us that we best build huge things if we modularize responsibilities for the sake of a good generic creation. Components are separed in performance oriented way, this provides code reusability (less files, less processing time needed and lighter). Learn more about Atomic-design frontEnd components architecture [here](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c).

`/src/config/wallet.ts`:
Wallet configuration... You, that is building in web3, should know that dApps should count on user's wallet connections: this provides a way (the browser interface) for the user to do actions in the blockchain. This config file guides you through the settings of a testing and production-readiness oriented wallet connection template. P.S.: you can use any network you desire, here 🚀

`/src/context/theme-config.ts`:
Wanna styling features patternized to be reused across your whole application? Provide the styles you need such as font colors, background colors, etc. via this file!

This context permits you use dark or light themes, and even, a loading theme that server for the use of splash screens and application initialization styling! Whenever a user visits one website that uses this code-base, a cookie is given to the browser and from then on, the user preference around themes is saved and reused in any visitor future visit.

The default themes can be changed as you want, no need to give dark and light mode support as a requirement.

Take a look into the space of theme definition at `/src/lib/client/theme.ts`

`/lib`:
This folder will contain every piece of the backEnd of the frontEnd. This is a scalable thing: add folders as `services`, `shared` or `server` in this root 𑗋. Initial folders include:

`/lib/blockchain`:
Blockchain related dApp logics have a confortable space to live in here: put contract ABIs and addresses in here (as mentioned, for further smartContract or backEnd related code settings, consider visiting our other boilerplates).

`/lib/client`:
Need a space to put React or Ui related code... You found it!

`/pages/`:
As mentioned in the introduction of this repo, this is the Next.js routing architecture. Please study [Next.js](https://nextjs.org/docs) and keep-on going, this is good not only for a good usage of this template but also for your career in web development

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Environment musts

First must is to create a .env file just like the .env.example

Second must is to use node v18 (how to [manage](https://github.com/nvm-sh/nvm) node version locally)

## To create a component, do this

1. Create the component inside the Atomic design folder that best fits;
2. To style a component use TailwindCSS classes or the application's global theme;
3. Include the component in the folder's `index.ts`

## Next steps

Given the introduction to this frontEnd developer toolkit we, then, deliver this to your hands now. Feel free to contribute to this template through a PR, we will surely evaluate the inclusion of new increments to the ever growing code-base 🛠️
