
#  Dappify

  

Dappify is a Nextjs.13 dApp Development Kit, an advanced template designed to simplify the development of decentralized applications (dApps) using Next.js 13.

> **Info**
> If you are not comfortable with Next.js, consider exploring [Reactify](https://github.com/SrinivasJoshi/Reactify)

###  Why Use This :

  

- **Next.js 13 Advantage**: Stay ahead of the curve by utilizing the latest Next.js features.The integrated **App Router** simplifies navigation

  

- **Tailwind CSS Integration**: Enjoy the benefits of Tailwind CSS, a highly customizable utility-first CSS framework.

  

- **User-Friendly Wallet Access**: **RainbowKit** provides a fast, easy and highly customizable way for developers to add a great wallet experience to their application.

  

- **Effortless Contract Integration**: **Wagmi** simplifies smart contract integration, reducing the complexity of Ethereum interactions and allowing you to focus on building your dApp's core functionality.

  

- **Ethers.js Compatibility**: We employ Ethers for converting values from the blockchain, like BigInt, and parsing inputs.

  

- **TypeScript Support**: Take advantage of TypeScript for enhanced code quality, better tooling, and improved developer experience.

  

###  Setup and use

  

1. **Clone the Repository**:

  

		git clone https://github.com/SrinivasJoshi/Dappify.git

  

2. **Change Directory**:

  

		cd Dappify

  

3. **Install Dependencies**:

  

		npm install

  

4. **Configure WalletConnect Cloud**:

  

- Obtain a `projectId` from [WalletConnect Cloud](https://cloud.walletconnect.com/).

- Open `utils/providers.tsx` in your code editor.

- Add the obtained `projectId` and the desired `appName` in the provided space in the code.

- Optionally also configure the chain as shown in `utils/providers.tsx`.

  

5. **Start dev server** :

  

		npm run dev

  

6. **Format code** :

  

		npm run format

  

##  Folder structure

  

📁 root

├── 📁 app

├── 📁 components

├── 📁 contracts

├── 📁 utils

├── 📁 public

├── 📄 tailwind.config.js

├── 📄 tsconfig.js

├── 📄 package.json

├── 📄 package-lock.json

├── 📄 .gitignore

├── 📄 `README.md`

└── 📁 .husky

  

`app` : Next.js App router for web pages.

  

`components` : Reusable React components for the `app`.

  

`contracts` : Store for smart contract references.

  

`utils` : Utilities like contract info, client-side rendering, and app configuration

- `contractInfo.ts` : smart contract address and ABI

- `clientOnly.tsx` : help you work with client-side rendering components.

- `providers.tsx` : config (wallet, chains, wagmi, react-toast notifications).

  

`public` : assets folder.

  

###  Additional reads

If you're working with Next.js 13, you're likely to encounter various challenges. This template has been carefully crafted to help you navigate those hurdles based on my personal experience.

1. This article helped me a lot - [Link](https://codingwithmanny.medium.com/understanding-hydration-errors-in-nextjs-13-with-a-web3-wallet-connection-8155c340fbd5#:~:text=If%20the%20server%2Dside%20state,difference%20between%20the%20two%20DOM.).

2. Next.js (v13) docs - [Link](https://nextjs.org/docs/app/building-your-application)
