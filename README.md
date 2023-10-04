# Dappify

Dappify is a Nextjs.13 dApp Development Kit, an advanced template designed to simplify the development of decentralized applications (dApps) using Next.js 13.

### Why Use This :

- **Next.js 13 Advantage**: Stay ahead of the curve by utilizing the latest Next.js features.The integrated **App Router** simplifies navigation

- **Tailwind CSS Integration**: Enjoy the benefits of Tailwind CSS, a highly customizable utility-first CSS framework.

- **User-Friendly Wallet Access**: **RainbowKit** provides a fast, easy and highly customizable way for developers to add a great wallet experience to their application.

- **Effortless Contract Integration**: **Wagmi** simplifies smart contract integration, reducing the complexity of Ethereum interactions and allowing you to focus on building your dApp's core functionality.

-- **Ethers.js Compatibility**: I prefer using Ethers.js in some "write to chain" use cases and don't want to deal with Wagmi hooks.Ethers.js provides a powerful alternative for Ethereum interactions.

- **TypeScript Support**: Take advantage of TypeScript for enhanced code quality, better tooling, and improved developer experience.

### Setup and use

1.  **Clone the Repository**:

        git clone <repository_url>

2.  **Change Directory**:

        cd Dappify

3.  **Install Dependencies**:

        npm install

4.  **Configure WalletConnect Cloud**:

- Obtain a `projectId` from [WalletConnect Cloud](https://cloud.walletconnect.com/).

- Add the obtained `projectId` and the desired `appName` in the provided space in the code.
- Open `utils/providers.tsx` in your code editor.

- Optionally also configure the chain as shown in `utils/providers.tsx`.

5.  **Start dev server** :

        npm run dev

6.  **Format code** :

        npm run format
