import path from 'path';
import { defineConfig } from 'vocs';

export const bundlerSidebar = [
  {
    text: 'Overview',
    link: '/bundler',
  },
  {
    text: 'How-to Guides',
    items: [
      { text: "How to Bundle a User Operation", link: "/bundler/how-to/bundle-a-user-operation" },
      { text: "How to Estimate the Gas Limits for a User Operation", link: "/bundler/how-to/estimate-user-operation-gas-limits" },
    ]
  },
  {
    text: "Reference",
    items: [
      { text: "Supported Chains", link: "/bundler/reference/supported-chains" },
      { text: "FAQs", link: "/bundler/reference/faqs" },
      { 
        text: "Endpoints", 
        collapsed: false,
        items: [
          { text: "eth_sendUserOperation", link: "/bundler/reference/endpoints/eth_sendUserOperation" },
          { text: "eth_estimateUserOperationGas", link: "/bundler/reference/endpoints/eth_estimateUserOperationGas" },
          { text: "eth_getUserOperationReceipt", link: "/bundler/reference/endpoints/eth_getUserOperationReceipt" },
          { text: "eth_getUserOperationByHash", link: "/bundler/reference/endpoints/eth_getUserOperationByHash" },
          { text: "eth_supportedEntryPoints", link: "/bundler/reference/endpoints/eth_supportedEntryPoints" },
          { text: "pimlico_getUserOperationGasPrice", link: "/bundler/reference/endpoints/pimlico_getUserOperationGasPrice" },
          { text: "pimlico_getUserOperationStatus", link: "/bundler/reference/endpoints/pimlico_getUserOperationStatus" },
        ]
      },
      { 
        text: "Bundler Errors", 
        items: [
          { text: "Invalid 'apikey' query parameter", link: "/bundler/reference/bundler-errors/invalid-api-key" },
          { text: "Chain is not supported", link: "/bundler/reference/bundler-errors/chain-not-supported" },
          { text: "Unknown error from alto bundler", link: "/bundler/reference/bundler-errors/unknown-error" },
        ]
      },
      { 
        text: "EntryPoint Errors", 
        collapsed: false,
        items: [
          { text: "AA10 sender already constructed", link: "/bundler/reference/entrypoint-errors/aa10" },
          { text: "AA13 initCode failed or OOG", link: "/bundler/reference/entrypoint-errors/aa13" },
          { text: "AA14 initCode must return sender", link: "/bundler/reference/entrypoint-errors/aa14" },
          { text: "AA15 initCode must create sender", link: "/bundler/reference/entrypoint-errors/aa15" },
          { text: "AA20 account not deployed", link: "/bundler/reference/entrypoint-errors/aa20" },
          { text: "AA21 didn't pay prefund", link: "/bundler/reference/entrypoint-errors/aa21" },
          { text: "AA22 expired or not due", link: "/bundler/reference/entrypoint-errors/aa22" },
          { text: "AA23 reverted", link: "/bundler/reference/entrypoint-errors/aa23" },
          { text: "AA24 signature error", link: "/bundler/reference/entrypoint-errors/aa24" },
          { text: "AA25 invalid account nonce", link: "/bundler/reference/entrypoint-errors/aa25" },
          { text: "AA30 paymaster not deployed", link: "/bundler/reference/entrypoint-errors/aa30" },
          { text: "AA31 paymaster deposit too low", link: "/bundler/reference/entrypoint-errors/aa31" },
          { text: "AA32 paymaster expired or not due", link: "/bundler/reference/entrypoint-errors/aa32" },
          { text: "AA33 reverted", link: "/bundler/reference/entrypoint-errors/aa33" },
          { text: "AA34 signature error", link: "/bundler/reference/entrypoint-errors/aa34" },
          { text: "AA40 over verificationGasLimit", link: "/bundler/reference/entrypoint-errors/aa40" },
          { text: "AA41 too little verificationGas", link: "/bundler/reference/entrypoint-errors/aa41" },
          { text: "AA50 postOp reverted", link: "/bundler/reference/entrypoint-errors/aa50" },
          { text: "AA51 prefund below actualGasCost", link: "/bundler/reference/entrypoint-errors/aa51" },
          { text: "AA90 invalid beneficiary", link: "/bundler/reference/entrypoint-errors/aa90" },
          { text: "AA91 failed send to beneficiary", link: "/bundler/reference/entrypoint-errors/aa91" },
          { text: "AA92 internal call only", link: "/bundler/reference/entrypoint-errors/aa92" },
          { text: "AA93 invalid paymasterAndData", link: "/bundler/reference/entrypoint-errors/aa93" },
          { text: "AA94 gas values overflow", link: "/bundler/reference/entrypoint-errors/aa94" },
          { text: "AA95 out of gas", link: "/bundler/reference/entrypoint-errors/aa95" },
          { text: "AA96 invalid aggregator", link: "/bundler/reference/entrypoint-errors/aa96" },
        ]
      },
    ]
  }
]

// AA10 sender already constructed
// AA13 initCode failed or OOG
// AA14 initCode must return sender
// AA15 initCode must create sender

// AA20 account not deployed
// AA21 didn't pay prefund
// AA22 expired or not due
// AA23 reverted
// AA24 signature error
// AA25 invalid account nonce

// AA30 paymaster not deployeda
// AA31 paymaster deposit too low
// AA32 paymaster expired or not due
// AA33 reverted
// AA34 signature error

// AA40 over verificationGasLimit

// AA51 prefund below actualGasCost

// AA90 invalid beneficiary
// AA91 failed send to beneficiary
// AA92 internal call only
// AA93 invalid paymasterAndData
// AA95 out of gas
// AA96 invalid aggregator

export const paymasterSidebar = [
  {
    text: 'Overview',
    link: '/paymaster',
  },
  {
    text: "Verifying Paymaster",
    items: [
      { 
        text: "How-to Guides", 
        items: [
          { text: "How to sponsor a User Operation", link: "/paymaster/verifying-paymaster/how-to/sponsor-a-user-operation" },
          { text: "How to use sponsorship policies", link: "/paymaster/verifying-paymaster/how-to/use-sponsorship-policies" },
        ]
      },
      {
        text: "Reference",
        items: [
          { text: "Supported Chains", link: "/paymaster/verifying-paymaster/reference/supported-chains" },
          { text: "Endpoints", link: "/paymaster/verifying-paymaster/reference/endpoints" },
          { text: "FAQs", link: "/paymaster/verifying-paymaster/reference/faqs" },
          { text: "Common Errors", link: "/paymaster/verifying-paymaster/reference/common-errors" },
        ]
      }
    ]
  },
  {
    text: "ERC-20 Paymaster",
    items: [
      { text: "Overview", link: "/paymaster/erc20-paymaster" },
      { text: "Contract Addresses", link: "/paymaster/erc20-paymaster/contract-addresses" },
      { text: "Architecture", link: "/paymaster/erc20-paymaster/architecture" },
      { text: "FAQs", link: "/paymaster/erc20-paymaster/faqs" },
    ]
  }
]

export const permissionlessSidebar = [
  {
    text: 'Overview',
    link: '/permissionless',
  },
  {
    text: "Tutorials",
    link: "/permissionless/tutorial",
    items: [
      { text: "1. Submit a User Operation with a Verifying Paymaster", link: "/permissionless/tutorial/tutorial-1" },
      { text: "2. Submit a User Operation with an ERC-20 Paymaster", link: "/permissionless/tutorial/tutorial-2" },
    ]
  },
  {
    text: "How-to Guides",
    items: [
      {
        text: "Accounts",
        items: [
          { text: "How to use a Kernel account", link: "/permissionless/how-to/accounts/use-kernel-account" },
          { text: "How to use a Safe account", link: "/permissionless/how-to/accounts/use-safe-account" },
          { text: "How to use a SimpleAccount", link: "/permissionless/how-to/accounts/use-simple-account" },
        ]
      },
      {
        text: "Paymasters",
        items: [
          { text: "How to use a custom Paymaster", link: "/permissionless/how-to/paymasters/use-custom-paymaster" },
        ]
      },
      {
        text: "Signers",
        items: [
          { text: "How to use a Dynamic signer", link: "/permissionless/how-to/signers/dynamic" },
          { text: "How to use a Privy signer", link: "/permissionless/how-to/signers/privy" },
        ]
      }
    ]
  },
  { 
    text: "Reference",
    link: "/permissionless/reference",
    items: [
      { 
        text: "Clients",
        collapsed: false,
        items: [
          { text: "Bundler Client", link: "/permissionless/reference/clients/bundlerClient" },
          { text: "Pimlico Bundler Client", link: "/permissionless/reference/clients/pimlicoBundlerClient" },
          { text: "Pimlico Paymaster Client", link: "/permissionless/reference/clients/pimlicoPaymasterClient" },
          { text: "Smart Account Client", link: "/permissionless/reference/clients/smartAccountClient" },
        ]
      },
      {
        text: "Bundler Actions",
        collapsed: false,
        items: [
          { text: "sendUserOperation", link: "/permissionless/reference/bundler-actions/sendUserOperation" },
          { text: "estimateUserOperationGas", link: "/permissionless/reference/bundler-actions/estimateUserOperationGas" },
          { text: "getUserOperationReceipt", link: "/permissionless/reference/bundler-actions/getUserOperationReceipt" },
          { text: "waitForUserOperationReceipt", link: "/permissionless/reference/bundler-actions/waitForUserOperationReceipt" },
          { text: "getUserOperationByHash", link: "/permissionless/reference/bundler-actions/getUserOperationByHash" },
          { text: "supportedEntryPoints", link: "/permissionless/reference/bundler-actions/supportedEntryPoints" },
        ]
      },
      {
        text: "Pimlico Bundler Actions",
        collapsed: false,
        items: [
          { text: "getUserOperationGasPrice", link: "/permissionless/reference/pimlico-bundler-actions/getUserOperationGasPrice" },
          { text: "getUserOperationStatus", link: "/permissionless/reference/pimlico-bundler-actions/getUserOperationStatus" },
        ]
      },
      {
        text: "Pimlico Paymaster Actions",
        collapsed: false,
        items: [
          { text: "sponsorUserOperation", link: "/permissionless/reference/pimlico-paymaster-actions/sponsorUserOperation" },
          { text: "validateSponsorshipPolicies", link: "/permissionless/reference/pimlico-paymaster-actions/validateSponsorshipPolicies" },
        ]
      },
      {
        text: "Public Actions",
        collapsed: false,
        items: [
          { text: "getSenderAddress", link: "/permissionless/reference/public-actions/getSenderAddress" },
          { text: "getAccountNonce", link: "/permissionless/reference/public-actions/getAccountNonce" },
        ]
      },
      {
        text: "Utilities",
        collapsed: false,
        items: [
          { text: "getUserOperationHash", link: "/permissionless/reference/utils/getUserOperationHash" },
          { text: "signUserOperationHashWithECDSA", link: "/permissionless/reference/utils/signUserOperationHashWithECDSA" },
          { text: "getRequiredPrefund", link: "/permissionless/reference/utils/getRequiredPrefund" },
          { text: "walletClientToCustomSigner", link: "/permissionless/reference/utils/walletClientToCustomSigner" },
        ]
      }
    ]
  },
]


export default defineConfig({
  title: 'Pimlico',
  logoUrl: { light: '/pimlico-purple.svg', dark: '/pimlico-white.svg' },
  iconUrl: '/favicons/favicon.svg',
  titleTemplate: '%s – Pimlico',
  editLink: {
    pattern: 'https://github.com/pimlicolabs/docs/edit/main/docs/pages/:path',
    text: 'Edit on GitHub',
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './docs'),
      },
    },
  },
  sidebar: {
    '/permissionless': permissionlessSidebar,
    '/bundler': bundlerSidebar,
    '/paymaster': paymasterSidebar,
    '/conceptual': [
      { text: "Overview", link: "/conceptual" },
      { text: "Account Abstraction", link: "/conceptual/account-abstraction" }
    ]
  },
  ogImageUrl: {
    "/": "https://docs-og-pimlico.vercel.app/api/og?logo=%logo&title=%title&description=%description"
  },
  theme: {
    accentColor: { light: "#7115AA", dark: "#a66cc9"},
  },
  socials: [ 
    { 
      icon: 'github', 
      link: 'https://github.com/pimlicolabs', 
    }, 
    {
      icon: "telegram",
      link: "https://t.me/pimlicoHQ"
    },
    { 
      icon: 'x', 
      link: 'https://twitter.com/pimlicoHQ', 
    }
  ], 
  topNav: [
    {
      text: 'permissionless.js',
      link: '/permissionless',
    },
    {
      text: 'Bundler',
      link: '/bundler',
    },
    {
      text: 'Paymasters',
      link: '/paymaster'
    },
    {
      text: 'Conceptual Guides',
      link: '/conceptual'
    },
    {
      text: "Dashboard",
      link: "https://dashboard.pimlico.io"
    }
  ]
})
