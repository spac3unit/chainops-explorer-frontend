export const governanceData = [
  {
    id: '62',
    tx_hash: 'C911318311953C0F000E84DC9A22F58682ABB1C18AD306F41F6F49FAD3E6B426',
    proposer: 'cosmos10e4vsut6suau8tk9m6dnrm0slgd6npe3hjqndl',
    title: 'Signal Proposal: Migration of Gravity DEX to a Separate Cosmos Chain',
    description:
      'This governance proposal is to request approval from the Cosmos Hub community for the migration of Gravity DEX from Cosmos Hub to a separate Cosmos chain. By voting yes to this proposal, you agree that the Gravity DEX on Cosmos Hub should be migrated to a separate chain. When and if the proposal passes, another governance proposal will be submitted in near future to allow only withdrawal of funds from Gravity DEX.  Details of the proposal can be found at IPFS link.  https://ipfs.io/ipfs/QmecqvwJFPZ4E8jMGvrQweX6jguLkvhWKPBtTPhZJDBMbq',
    proposal_type: 'Text',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '80204792323107',
    no: '336589424212',
    no_with_veto: '31497751098',
    abstain: '9567599427631',
    submit_time: '2022-03-14T09:43:54.403Z',
    voting_start_time: '2022-03-14T09:43:54.403Z',
    voting_end_time: '2022-03-28T09:43:54.403Z',
    deposit_end_time: '2022-03-28T09:43:54.403Z',
    notification_status: 'VotingNotified',
    initial_deposit: {
      denom: 'uatom',
      amount: '64000000',
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '64000000',
      },
    ],
    moniker: 'B-Harvest',
  },
  {
    id: '32',
    tx_hash: null,
    proposer: null,
    title: 'Funding for Development of Governance Split Votes',
    description:
      'Sikka is requesting 1776 ATOMs from the community pool to architect and implement the Governance Split Votes feature proposed in Cosmos Hub Proposal #31. This community fund proposal is dependent on the passing of Proposal #31 and thus should only be approved if Proposal #31 is approved. We request 1776 ATOMs, valuing each atom at $5.1 \n\nSikka has already begun the design of this feature and submitted it as ADR 037 to the Cosmos Hub: https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-037-gov-split-vote.md \n\n As past contributors to the codebase that runs the Cosmos Hub, we are familiar with the security and code quality requirements to be included in the Cosmos Hub.  Sikka will implement & test this feature and will work with the maintainers of the github.com/cosmos/cosmos-sdk repo to get it merged into the x/gov module.',
    proposal_type: 'CommunityPoolSpend',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '76951560777331',
    no: '63568377574',
    no_with_veto: '0',
    abstain: '14188515730075',
    submit_time: '2020-11-24T17:22:36.584Z',
    voting_start_time: '2020-11-24T19:05:51.541Z',
    voting_end_time: '2020-12-08T19:05:51.541Z',
    deposit_end_time: '2020-12-08T17:22:36.584Z',
    notification_status: null,
    initial_deposit: {
      denom: null,
      amount: null,
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '514000000',
      },
    ],
    moniker: '',
  },
  {
    id: '63',
    tx_hash: '99CA985295052F6EB41DC61D44B56AAA8951A8BACBFA760E6D1BBA6D8043BA52',
    proposer: 'cosmos1cc5mtuje84sx5dsqw4gtr4w8lthpzw02rjjnew',
    title: 'Activate governance discussions on the Discourse forum using community pool funds',
    description:
      "## Summary\nProposal to request for 1000 ATOM from the community spending pool to be sent to a multisig who will put funds towards stewardship of the Discourse forum to make it an authoritative record of governance decisions as well as a vibrant space to draft and discuss proposals.\n## Details\nWe are requesting 1000 ATOM from the community spending pool to activate and steward the Cosmos Hub (Discourse) forum for the next six months.\n\nOff-chain governance conversations are currently highly fragmented, with no shared public venue for discussing proposals as they proceed through the process of being drafted and voted on. It means there is no record of discussion that voters can confidently point to for context, potentially leading to governance decisions becoming delegitimized by stakeholders.\n\nThe requested amount will be sent to a multisig comprising individuals (members listed below) who can ensure that the tokens are spent judiciously. We believe stewardship of the forum requires:\n\n* **Moderation**: Format, edit, and categorize posts; Standardize titles and tags; Monitor and approve new posts; Archive posts.\n* **Facilitation**: Ask clarifying questions in post threads; Summarize discussions; Provide historical precedence to discussions.\n* **Engagement**: Circulate important posts on other social channels to increase community participation; Solicit input from key stakeholders.\n* **Guidance**: Orient and assist newcomers; Guide proposers through governance process; Answer questions regarding the forum or Cosmos ecosystem.\nThe work to steward the forum will be carried out by members of [Hypha Worker Co-op](https://hypha.coop/) and individuals selected from the community to carry out scoped tasks in exchange for ATOM from this budget.\n## Multisig Members\n* Hypha: Mai Ishikawa Sutton (Hypha Co-op)\n* Validator: Daniel Hwang (Stakefish)\n* Cosmos Hub developer: Lauren Gallinaro (Interchain Berlin)\n\nWe feel the membership of the multisig should be rotated following the six-month pilot period to preserve insight from the distinct specializations (i.e., Cosmos Hub validators and developers).\n## Timeline and Deliverables\nWe estimate the total work to take 250-300 hours over six months where we hope to produce:\n* **Moving summaries:** Provide succinct summaries of the proposals and include all publicly stated reasons why various entities are choosing to vote for/against a given proposal. These summaries will be written objectively, not siding with any one entity.\n* **Validator platforms:** Create a section of the Forum where we collate all validators' visions for Cosmos Hub governance to allow them to state their positions publicly. We will work with the smaller validators to ensure they are equally represented.\n* **Regular check-ins with the Cosmonaut DAO:** Collaborate with the future Cosmonaut DAO to ensure maximal accessibility and engagement. Community management is a critical, complementary aspect of increasing participation in governance.\n* **Announcement channel:** Create a read-only announcement channel in the Cosmos Community Discord, so that new proposals and major discussions can be easily followed.\n* **Tooling friendly posts:** Tag and categorize posts so that they can be easily ingested into existing tooling that validators have setup.\n* **Neutral moderation framework:** Document and follow transparent standards for how the forum is moderated.\n\nAt the end of the period, we will produce a report reflecting on our successes and failures, and recommendations for how the work of maintaining a governance venue can be continuously sustained (e.g., through a DAO). We see this initiative as a process of discovery, where we are learning by doing.\n\nFor more context, you can read through the discussions on this [proposal on the Discourse forum](https://forum.cosmos.network/t/proposal-draft-activate-governance-discussions-on-the-discourse-forum-using-community-pool-funds/5833).\n\n## Governance Votes\nThe following items summarize the voting options and what it means for this proposal:\n**YES** - You approve this community spend proposal to deposit 1000 ATOM to a multisig that will spend them to improve governance discussions in the Discourse forum.\n**NO** - You disapprove of this community spend proposal in its current form (please indicate why in the Cosmos Forum).\n**NO WITH VETO** - You are strongly opposed to this change and will exit the network if passed.\n**ABSTAIN** - You are impartial to the outcome of the proposal.\n## Recipient\ncosmos1xf2qwf6g6xvuttpf37xwrgp08qq984244952ze\n## Amount\n1000 ATOM\n\n***Disclosure**: Hypha has an existing contract with the Interchain Foundation focused on the testnet program and improving documentation. This work is beyond the scope of that contract and is focused on engaging the community in governance.*\n\nIPFS pin of proposal on-forum: (https://ipfs.io/ipfs/Qmaq7ftqWccgYCo8U1KZfEnjvjUDzSEGpMxcRy61u8gf2Y)",
    proposal_type: 'CommunityPoolSpend',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '74061187070793',
    no: '2941925509648',
    no_with_veto: '111198597416',
    abstain: '16675925841105',
    submit_time: '2022-03-15T20:05:19.867Z',
    voting_start_time: '2022-03-16T00:15:13.284Z',
    voting_end_time: '2022-03-30T00:15:13.284Z',
    deposit_end_time: '2022-03-29T20:05:19.867Z',
    notification_status: 'VotingNotified',
    initial_deposit: {
      denom: 'uatom',
      amount: '1000000',
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '64000000',
      },
    ],
    moniker: '',
  },
  {
    id: '19',
    tx_hash: null,
    proposer: null,
    title: 'Cosmos Hub 3 Upgrade Proposal E',
    description:
      'Figment Networks (https://figment.network)\n\n-=-=-\n\nFull proposal:\nhttps://ipfs.io/ipfs/QmfJyd64srJSX824WoNnF6BbvF4wvPGqVBynZeN98C7ygq\n\n-=-=-\n\n_Decision_\n\nWe are signalling that:\n\n1. The Gaia 2.0.3 implementation is aligned with the list of high-level changes approved in Cosmos Hub 3 Upgrade Proposal A.\n\n2. We are prepared to upgrade the Cosmos Hub to cosmoshub-3 based upon\n\ta. Commit hash: 2f6783e298f25ff4e12cb84549777053ab88749a;\n\tb. The state export from cosmoshub-2 at Block Height 2902000;\n\tc. Genesis time: 60 minutes after the timestamp at Block Height 2902000.\n\n3. We are prepared to relaunch cosmoshub-2\n\ta. In the event of:\n\t\ti. A non-trivial error in the migration procedure and/or\n\t\tii. A need for ad-hoc genesis file changes\n\t\tiii. The failure of cosmoshub-3 to produce two (2) blocks by 180 minutes after the timestamp of Block Height 2902000;\n\tb. Using:\n\t\ti. The starting block height: 2902000\n\t\tii. Software version: Cosmos SDK v0.34.6+ https://github.com/cosmos/cosmos-sdk/releases/tag/v0.34.10\n\t\tiii. The full data snapshot at export Block Height 2902000;\n\tc. And will consider the relaunch complete after cosmoshub-2 has reached consensus on Block 2902001.\n\n4. The upgrade will be considered complete after cosmoshub-3 has reached consensus on Block Height 2 within 120 minutes of genesis time.\n\n5. This proposal is void if the voting period has not concluded by Block Height 2852202.\n\n-=-=-\n\n_Context_\nThis proposal follows Cosmos Hub 3 Upgrade Proposal D (https://hubble.figment.network/cosmos/chains/cosmoshub-2/governance/proposals/16) aka Prop 16, which passed in vote, but failed in execution (https://forum.cosmos.network/t/cosmos-hub-3-upgrade-post-mortem/2772). This proposal is intended to succeed where Prop 16 failed.\n\nThis proposal is intended to signal acceptance/rejection of the precise software release that will contain the changes to be included in the Cosmos Hub 3 upgrade. A high level overview of these changes was successfully approved by the voters signalling via Cosmos Hub 3 Upgrade Proposal A:\nhttps://hubble.figment.network/cosmos/chains/cosmoshub-2/governance/proposals/13\n\nWe are proposing to use this code https://github.com/cosmos/gaia/releases/tag/v2.0.3 to upgrade the Cosmos Hub.\nWe are proposing to export the ledger’s state at Block Height 2,902,000, which we expect to occur on December 11, 2019 at or around 14:27 UTC assuming an average of 6.94 seconds per block. Please note that there will likely be a variance from this target time, due to deviations in block time.\n\nWe are proposing that the Cosmos Hub 3 genesis time be set to 60 minutes after Block Height 2,902,000.\n\n-=-=-\n\nCo-ordination in case of failure will happen in this channel: https://riot.im/app/#/room/#cosmos_validators_technical_updates:matrix.org',
    proposal_type: 'Text',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '154154642304501',
    no: '525588663406',
    no_with_veto: '0',
    abstain: '0',
    submit_time: '2019-11-14T17:13:31.985Z',
    voting_start_time: '2019-11-15T05:57:10.911Z',
    voting_end_time: '2019-11-29T05:57:10.911Z',
    deposit_end_time: '2019-11-28T17:13:31.985Z',
    notification_status: null,
    initial_deposit: {
      denom: null,
      amount: null,
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '513000000',
      },
    ],
    moniker: '',
  },
  {
    id: '6',
    tx_hash: null,
    proposer: null,
    title: "Don't Burn Deposits for Rejected Governance Proposals Unless Vetoed",
    description:
      "Read here, or on https://ipfs.ink/e/QmRtR7qkeaZCpCzHDwHgJeJAZdTrbmHLxFDYXhw7RoF1pp\n\nThe Cosmos Hub's state machine handles spam prevention of governance proposals by means of a deposit system. A governance proposal is only considered eligible for voting by the whole validator set if a certain amount of staking token is deposited on the proposal. The intention is that the deposit will be burned if a proposal is spam or has caused a negative externality to the Cosmos community (such as wasting stakeholders’ time having to review the proposal).\n\nIn the current implementation of the governance module used in the Cosmos Hub, the deposit is burned if a proposal does not pass, regardless of how close the final tally result may have been. For example, if 49% of stake votes in favor of a proposal while 51% votes against it, the deposit will still be burned. This seems to be an undesirable behavior as it disincentivizes anyone from creating or depositing on a proposal that might be slightly contentious but not spam, due to fear of losing the deposit minimum (currently 512 atoms). This will especially be the case as TextProposals will be used for signaling purposes, to gauge the sentiment of staked Atom holders. Disincentivizing proposals for which the outcome is uncertain would undermine that effort.\n\nWe instead propose that the deposit be returned on failed votes, and that the deposit only be burned on vetoed votes. If a proposal seems to be spam or is deemed to have caused a negative externality to Cosmos communninty, voters should vote NoWithVeto on the proposal. If >33% of the stake chooses to Veto a proposal, the deposits will then be burned. However, if a proposal gets rejected without being vetoed, the deposits should be returned to the depositors.  This proposal does not make any change to the current behavior for proposals that fail to meet quorum; if a proposal fails to meet quorum its deposit will be burned.",
    proposal_type: 'Text',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '110522077231139',
    no: '4000000',
    no_with_veto: '0',
    abstain: '11773440000',
    submit_time: '2019-05-03T18:14:33.209Z',
    voting_start_time: '2019-05-03T19:50:58.076Z',
    voting_end_time: '2019-05-17T19:50:58.076Z',
    deposit_end_time: '2019-05-17T18:14:33.209Z',
    notification_status: null,
    initial_deposit: {
      denom: null,
      amount: null,
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '516000000',
      },
    ],
    moniker: '',
  },
  {
    id: '64',
    tx_hash: '6038CACE73447529B3024633289D6AD7A7E71B7AAE5517B1F1BE5CCCFF7FAE0B',
    proposer: 'cosmos1ydc5fy9fjdygvgw36u49yj39fr67pd9m0f224r',
    title: 'Update expired client between Cosmoshub and Bostrom',
    description:
      'This proposal will update the expired client on channel-240 between cosmoshub-4 and the bostrom networks. In turn, this will let users transfer  from bostrom, and to transfer  from cosmoshub back to bostrom.\\n\\nBy voting **YES**, the Cosmoshub stakers, voice their support to unfreeze IBC channel-240 between Cosmoshub and Bostrom.\\n\\nBy voting **NO**, the Cosmoshub stakers voice their dissent to unfreeze IBC channel-240 between Cosmoshub and Bostrom network.\\n\\n**Details:**\\n\\nMost IBC connections between Bostrom and other Cosmos chains have been relayed, to a large extent, only by the Bro_n_Bro validator.\\n\\nOriginally, channel-240 was created with a very short trusting period of 2 days. Alas, the lack of monitoring from our side caused the expiration of client 07-tendermint-497, which in turn, led to the impossibility to transfer tokens using channel-240. Currently, there are around 710 ATOM stuck on the bostrom chain, belonging to about 20 different accounts.\\n\\nAs this might be the first case, when a channel renewal on cosmoshub-4, happens via a governance proposal, we have set up prior testing to ensure that everything will work smoothly. We also modified test-suite https://github.com/bro-n-bro/ibc-testbed (thanks to the Lum devs for the awesome repo), so everyone could simulate the client renewal using governance with this test suite.\\n\\nIn the case that this proposal goes through, client 07-tendermint-497 state will be substituted by the state of client 07-tendermint-643.\\nAlso if passed - channels 240-5 (cosmoshub-4 - bostrom) would be used, only, to recover the stuck funds. New channels would be created with a longer trusting period to ensure further stability.\\n\\nWe will be happy to answer any questions at our [Telegram community group](https://t.me/bro_n_bro_community) or on our [Discord](https://discord.com/channels/868962876721860638/870738846772514826).',
    proposal_type: 'ClientUpdate',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '90585034601586',
    no: '80364438695',
    no_with_veto: '4257019787',
    abstain: '3090556663341',
    submit_time: '2022-03-23T14:11:38.078Z',
    voting_start_time: '2022-03-23T15:34:59.226Z',
    voting_end_time: '2022-04-06T15:34:59.226Z',
    deposit_end_time: '2022-04-06T14:11:38.078Z',
    notification_status: 'VotingNotified',
    initial_deposit: {
      denom: 'uatom',
      amount: '1000000',
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '65000000',
      },
    ],
    moniker: '',
  },
  {
    id: '23',
    tx_hash: null,
    proposer: null,
    title: 'Cosmos Governance Working Group - Q1 2020',
    description:
      'Cosmos Governance Working Group - Q1 2020 funding\n\nCommunity-spend proposal submitted by Gavin Birch (https://twitter.com/Ether_Gavin) of Figment Networks (https://figment.network)\n\n-=-=-\n\nFull proposal: https://ipfs.io/ipfs/QmSMGEoY2dfxADPfgoAsJxjjC6hwpSNx1dXAqePiCEMCbY\n\n-=-=-\n\nAmount to spend from the community pool: 5250 ATOMs\n\nTimeline: Q1 2020\n\nDeliverables:\n1. A governance working group community & charter\n2. A template for community spend proposals\n3. A best-practices document for community spend proposals\n4. An educational wiki for the Cosmos Hub parameters\n5. A best-practices document for parameter changes\n6. Monthly governance working group community calls (three)\n7. Monthly GWG articles (three)\n8. One Q2 2020 GWG recommendations article\n\nMilestones:\nBy end of Month 1, the Cosmos Governance Working Group (GWG) should have been initiated and led by Gavin Birch of Figment Networks.\nBy end of Month 2, Gavin Birch is to have initiated and led GWG’s education, best practices, and Q2 recommendations.\nBy end of Month 3, Gavin Birch is to have led and published initial governance education, best practices, and Q2 recommendations.\n\nDetailed milestones and funding:\nhttps://docs.google.com/spreadsheets/d/1mFEvMSLbiHoVAYqBq8lo3qQw3KtPMEqDFz47ESf6HEg/edit?usp=sharing\n\nBeyond the milestones, Gavin will lead the GWG to engage in and answer governance-related questions on the Cosmos Discourse forum, Twitter, the private Cosmos VIP Telegram channel, and the Cosmos subreddit. The GWG will engage with stake-holders to lower the barriers to governance participation with the aim of empowering the Cosmos Hub’s stakeholders. The GWG will use this engagement to guide recommendations for future GWG planning.\n\nRead more about the our efforts to launch the Cosmos GWG here: https://figment.network/resources/introducing-the-cosmos-governance-working-group/\n\n-=-=-\n\n_Problem_\nPerhaps the most difficult barrier to effective governance is that it demands one of our most valuable and scarce resources: our attention. Stakeholders may be disadvantaged by informational or resource-based asymmetries, while other entities may exploit these same asymmetries to capture value controlled by the Cosmos Hub’s governance mechanisms.\n\nWe’re concerned that without establishing community standards, processes, and driving decentralized delegator-based participation, the Cosmos Hub governance mechanism could be co-opted by a centralized power. As governance functionality develops, potential participants will need to understand how to assess proposals by knowing what to pay attention to.\n\n_Solution_\nWe’re forming a focused, diverse group that’s capable of assessing and synthesizing the key parts of a proposal so that the voting community can get a fair summary of what they need to know before voting.\n\nOur solution is to initiate a Cosmos governance working group that develops decentralized community governance efforts alongside the Hub’s development. We will develop and document governance features and practices, and then communicate these to the broader Cosmos community.\n\n_Future_\nAt the end of Q1, we’ll publish recommendations for the future of the Cosmos GWG, and ideally we’ll be prepared to submit a proposal based upon those recommendations for Q2 2020. We plan to continue our work in blockchain governance, regardless of whether the Hub passes our proposals.\n\n-=-=-\n\nCosmos forum: https://forum.cosmos.network/c/governance\nCosmos GWG Telegram channel: https://t.me/hubgov\nTwitter: https://twitter.com/CosmosGov',
    proposal_type: 'CommunityPoolSpend',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '132707314781653',
    no: '6583520449408',
    no_with_veto: '1204049999',
    abstain: '6792152705214',
    submit_time: '2020-01-15T06:51:48.001Z',
    voting_start_time: '2020-01-15T19:16:08.573Z',
    voting_end_time: '2020-01-29T19:16:08.573Z',
    deposit_end_time: '2020-01-29T06:51:48.001Z',
    notification_status: null,
    initial_deposit: {
      denom: null,
      amount: null,
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '512000000',
      },
    ],
    moniker: '',
  },
  {
    id: '30',
    tx_hash: null,
    proposer: null,
    title: 'Adjust Blocks Per Year to 4.36M',
    description:
      'While the current inflation rate is set at 7%, the effective inflation rate is more like ~6.29%. This is because blocks have slowed down somewhat from ~6.5s to ~7.24s per block, and thus the current blocks per year value of 4855015 is too high. Here we propose to adjust the blocks per year value from 4855015 to 4360000 to bring it in line with current block times, which should realign the effective inflation rate. More details were drafted on Github (https://github.com/cosmos/governance/tree/master/proposals/2020-10-blocks-per-year) and are available on IPFS (https://ipfs.io/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/example#/ipfs/QmTZ3R4W2odBsx6hpt7awfRTfZA67x5eQaoL6ctxBr6NyN)',
    proposal_type: 'ParameterChange',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '107762154303102',
    no: '32749535328',
    no_with_veto: '5093003292',
    abstain: '3288804088',
    submit_time: '2020-11-03T02:35:05.578Z',
    voting_start_time: '2020-11-04T10:15:16.314Z',
    voting_end_time: '2020-11-18T10:15:16.314Z',
    deposit_end_time: '2020-11-17T02:35:05.578Z',
    notification_status: null,
    initial_deposit: {
      denom: null,
      amount: null,
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '512006000',
      },
    ],
    moniker: '',
  },
  {
    id: '66',
    tx_hash: '0AD744C23DA1FEF5F61EFCFD32337557E9904590525841280E9BC22BAAA9DE7D',
    proposer: 'cosmos15ytx6mflyrxynjerqlud6w646v6u3qvthlagl2',
    title: 'Staking Param Change',
    description:
      'Update max validator set, \n As discussed in the form thread https://forum.cosmos.network/t/proposal-draft-increase-active-validator-spots-to-175/6118 this param change will increase the active set from 150 to 175.',
    proposal_type: 'ParameterChange',
    proposal_status: 'PROPOSAL_STATUS_VOTING_PERIOD',
    yes: '63248567262642',
    no: '562018863864',
    no_with_veto: '69715259020',
    abstain: '16127589980635',
    submit_time: '2022-03-29T23:02:01.265Z',
    voting_start_time: '2022-03-29T23:53:08.106Z',
    voting_end_time: '2022-04-12T23:53:08.106Z',
    deposit_end_time: '2022-04-12T23:02:01.265Z',
    notification_status: 'VotingNotified',
    initial_deposit: {
      denom: 'uatom',
      amount: '1000000',
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '65000000',
      },
    ],
    moniker: 'securesecrets',
  },
  {
    id: '65',
    tx_hash: 'D5B63321D746F65AEE2DD347532551ADC5B8207D6F2C3CB83F643014D01EC7A0',
    proposer: 'cosmos1hxv7mpztvln45eghez6evw2ypcw4vjmsmr8cdx',
    title: 'v7-Theta',
    description:
      'This on-chain upgrade governance proposal is to adopt gaia v7.0.0 which includes a number of updates and fixes. By voting YES to this proposal, you approve of adding these \r\n\r\nFor instructions on performing the upgrade see https://hub.cosmos.network/main/hub-tutorials/upgrade-node.html\r\n\r\n# Background\r\n\r\nSince the last v6-Vega upgrade at height 86950000 there have been a number of updates, fixes and new modules added to the Cosmos SDK, IBC and Tendermint.\r\n\r\nThis is a proposal to adopt the first release for the [v7-Theta](https://github.com/cosmos/gaia/blob/main/docs/roadmap/cosmos-hub-roadmap-2.0.md#v7-theta-upgrade-expected-q2-2022) upgrade the `cosmoshub-4` mainnet.\r\n\r\nIt contains the following changes:\r\n\r\n- (gaia) bump [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) to [v0.45.1](https://github.com/cosmos/cosmos-sdk/releases/tag/v0.45.1). See [CHANGELOG.md](https://github.com/cosmos/cosmos-sdk/blob/v0.45.1/CHANGELOG.md#v0451---2022-02-03) for details.\r\n- (gaia) bump [ibc-go](https://github.com/cosmos/ibc-go) module to [v3.0.0](https://github.com/cosmos/ibc-go/releases/tag/v3.0.0). See [CHANGELOG.md](https://github.com/cosmos/ibc-go/blob/v3.0.0/CHANGELOG.md#v300---2022-03-15) for details.\r\n- (gaia) add [interhcian account](https://github.com/cosmos/ibc-go/tree/main/modules/apps/27-interchain-accounts) module (interhchain-account module is part of ibc-go module).\r\n- (gaia) bump [liquidity](github.com/gravity-devs/liquidity/x/liquidity) module to [v1.5.0](https://github.com/Gravity-Devs/liquidity/releases/tag/v1.5.0). See [CHANGELOG.md](https://github.com/Gravity-Devs/liquidity/blob/v1.5.0/CHANGELOG.md#v150---20220223) for details.\r\n- (gaia) bump [packet-forward-middleware](https://github.com/strangelove-ventures/packet-forward-middleware) module to [v2.1.1](https://github.com/strangelove-ventures/packet-forward-middleware/releases/tag/v2.1.1).\r\n- (gaia) add migration logs for upgrade process.\r\n\r\n# On-Chain Upgrade Process\r\nWhen the network reaches the halt height, the state machine program of the Cosmos Hub will be halted. The classic method for upgrading requires all validators and node operators to manually substitute the existing state machine binary with the new binary. There is also a newer method that relies on Cosmovisor to swap the binaries automatically. Cosmovisor also includes the ability to download the binaries automatically before swapping them. To test a simulated local upgrade please see the local testnet documentation. Because it is an onchain upgrade process, the blockchain will be continued with all the accumulated history with continuous block height.\r\n\r\nFor full instructions please see https://hub.cosmos.network/main/hub-tutorials/upgrade-node.html\r\n\r### Potential Risk Factors\r\n\r\nAlthough very extensive testing and simulation has taken place there always still exists a risk that the Cosmos Hub might experience problems due to potential bugs or errors from the new features. In the case of serious problems, validators should stop operating the network immediately. Cosmos Core Contributors will coordinate with validators in the `#validators-verified channel` of the [Cosmos Developer Discord](https://discord.gg/cosmosnetwork) to create and execute a contingency plan. Likely this will be an emergency release with fixes or the recommendation to consider the upgrade aborted and revert back to the previous release of gaia (v6.0.x).',
    proposal_type: 'SoftwareUpgrade',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '100161246211456',
    no: '26625279503',
    no_with_veto: '3101185353',
    abstain: '566667839844',
    submit_time: '2022-03-25T09:49:43.275Z',
    voting_start_time: '2022-03-25T10:13:14.802Z',
    voting_end_time: '2022-04-08T10:13:14.802Z',
    deposit_end_time: '2022-04-08T09:49:43.275Z',
    notification_status: 'VotingNotified',
    initial_deposit: {
      denom: 'uatom',
      amount: '50000',
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '64050000',
      },
    ],
    moniker: '',
  },
  {
    id: '31',
    tx_hash: null,
    proposer: null,
    title: 'Governance Split Votes',
    description:
      "In the Cosmos Hub governance system, each address can only cast a vote for one option (Yes/No/Abstain/NoWithVeto) which uses their full voting power behind that choice.\n\nThis proposal proposes an upgrade to the Cosmos Hub governance module that would allow a staker to optionally split their votes into several voting options. For example, a single address could use 70% of its voting power to vote Yes and 30% of its voting power to vote No. Clients may opt into supporting this feature, as the existing UX of voting for a single option is preserved.\n\nThis is beneficial because oftentimes the entity owning that address might not be a single individual. For example, a company or organization that owns an address might have different stakeholders who want to vote differently, and so it makes sense to allow them to split their voting power.\n\nAnother example use case is exchanges and custodians. Many custodians and exchanges custody multiple customers’ ATOMs in the same address and use this address to stake on behalf of them. However, because of this, it makes it infeasible to do 'passthrough voting' and give their customers voting rights over their tokens, if different customers have different voting preferences. With this new proposal, custodians can use split votes to accurately reflect the preferences of their customers in on-chain governance.\n\nThe technical architecture for this feature can be seen in ADR 037 to the Cosmos SDK: https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-037-gov-split-vote.md \n\nAcceptance of this governance proposal is signalling approval to adopt this feature in a future upgrade of the Cosmos Hub.",
    proposal_type: 'Text',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '78243188462092',
    no: '60184365788',
    no_with_veto: '99',
    abstain: '2665118949431',
    submit_time: '2020-11-23T00:53:38.508Z',
    voting_start_time: '2020-11-23T01:03:57.407Z',
    voting_end_time: '2020-12-07T01:03:57.407Z',
    deposit_end_time: '2020-12-07T00:53:38.508Z',
    notification_status: null,
    initial_deposit: {
      denom: null,
      amount: null,
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '512000000',
      },
    ],
    moniker: '',
  },
  {
    id: '41',
    tx_hash: '5F942F0226AFFF1011D86480979A579563D504879778D8FC4A0F2BC36C50B206',
    proposer: 'cosmos1grgelyng2v6v3t8z87wu3sxgt9m5s03xvslewd',
    title: 'Enable IBC transfers',
    description:
      'The Proposal enables transferring and receiving assets using the ICS20 standard on the Cosmos Hub. If this proposal passes, there will be IBC assets available in the Bank module of the Hub and ATOM will be available on Zones connected over IBC.\n Iqlusion believes that the IBC software is sufficiently stable for small amounts of value transfer. We expect there to be issues with stuck funds and UX confusion but overcoming these issues will only happen once IBC is live.\n Security Model\n Tendermint full nodes produce agreement under the assumption that at most ⅓ of the voting power held by validators is Byzantine.\n IBC\nIBC is a protocol for authenticated message passing between heterogeneous sovereign blockchains. IBC requires trusting that chains on both sides of the connections operate within their security model.\n Incentive Security Extensions\n IBC has a facility to support freezing connections once a violation of the security model has occurred. The set of criteria for detecting such attacks continues to evolve and is a constant focus of research.',
    proposal_type: 'ParameterChange',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '111820292866240',
    no: '75097962',
    no_with_veto: '0',
    abstain: '175820327',
    submit_time: '2021-03-12T22:22:04.759Z',
    voting_start_time: '2021-03-15T08:45:34.255Z',
    voting_end_time: '2021-03-29T08:45:34.255Z',
    deposit_end_time: '2021-03-26T22:22:04.759Z',
    notification_status: null,
    initial_deposit: {
      denom: 'uatom',
      amount: '1000000',
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '554010000',
      },
    ],
    moniker: 'iqlusion',
  },
  {
    id: '44',
    tx_hash: '186D9E0E23CEBD5B02C9D10DBA278B0A7825115432D0A5632C1A1B55D00DFF95',
    proposer: 'cosmos1849m9wncrqp6v4tkss6a3j8uzvuv0cp7wcgvqa',
    title: 'Advancing Ethermint: GTM and Engineering Plan for the Ethermint Chain',
    description:
      'Tharsis is requesting 100,000 ATOMs from the Cosmos Hub community pool to fund, develop and advance the Ethermint project and launch an Ethermint Chain. n\n More details can be found in the long form proposal here: https://gateway.pinata.cloud/ipfs/QmWwJ63V4TuZkDfWoH66vxd6NK82g6rgPVnypESXBFRbws and https://github.com/cosmos/governance/pull/18 and https://forum.cosmos.network/t/advancing-ethermint-governance-proposal-gtm-and-engineering-plan-for-the-ethermint-chain/4554. \n\n The multisig administration includes:\n\t - @fedekunze (Federico Kunze Küllmer, Tharsis)\n\t - @zmanian (Zaki Manian, Iqlusion)\n\t - @marbar3778 (Marko Baricevic, Interchain GmbH)',
    proposal_type: 'CommunityPoolSpend',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '105057324638242',
    no: '696121432045',
    no_with_veto: '0',
    abstain: '1113172428987',
    submit_time: '2021-04-06T08:20:18.765Z',
    voting_start_time: '2021-04-06T21:05:10.487Z',
    voting_end_time: '2021-04-20T21:05:10.487Z',
    deposit_end_time: '2021-04-20T08:20:18.765Z',
    notification_status: null,
    initial_deposit: {
      denom: 'uatom',
      amount: '1000000',
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '512000000',
      },
    ],
    moniker: '',
  },
  {
    id: '34',
    tx_hash: null,
    proposer: null,
    title: 'Luna Mission - Funding $ATOM',
    description:
      'The Cosmos Hub (ATOM) community is requesting a community pool spend amount of 129,208 ATOM in order to implement a comprehensive ATOM marketing plan that will be executed in collaboration with AiB (Tendermint). The marketing efforts will be initiated immediately upon passing of proposal #34.\n\n The distribution of funds will be administered by 5 community members, that have been carefully selected by the community via the Cosmos governance working group to administer the marketing plan and release funds to either AiB that will act as a liaison between Cosmos Hub community and third parties or directly to parties that will be in charge of executing the marketing plan based on a majority multisignature approval. At least 3 members will have to approve each milestone-spend for it to be released to AiB based on the expected proposal scope &completion. \n\n More details can be found in the long form proposal here: https://cloudflare-ipfs.com/ipfs/QmWAxtxf7fUprPVWx1jWyxSKjBNqkcbA3FG6hRps7QTu3k and https://github.com/cosmos/governance/pull/10 and https://forum.cosmos.network/t/draft-governance-proposal-for-a-community-pool-spend-proposal-33-luna-mission-funding-atom/4244/15 \n\n The multisig administration includes: \n @johnniecosmos, @JoeDirtay, @jackzampolin (Jack Zampolin, Pylon Validator), @immasssi (SG-1 Validator), @zakimanian (Zaki Manian, Iqlusion Validator).',
    proposal_type: 'CommunityPoolSpend',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '84872217254701',
    no: '8164358907348',
    no_with_veto: '624894869',
    abstain: '21629199841870',
    submit_time: '2021-01-05T23:09:26.477Z',
    voting_start_time: '2021-01-06T17:09:48.361Z',
    voting_end_time: '2021-01-20T17:09:48.361Z',
    deposit_end_time: '2021-01-19T23:09:26.477Z',
    notification_status: null,
    initial_deposit: {
      denom: null,
      amount: null,
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '512000000',
      },
    ],
    moniker: '',
  },
  {
    id: '46',
    tx_hash: '9FAA853167450799C54BDA70DD765F5DFA0E960A321474C662FDF7F33186BC86',
    proposer: 'cosmos130mdu9a0etmeuw52qfxk73pn0ga6gawkryh2z6',
    title: 'Prop 34 Continuation Proposal',
    description:
      'The Cosmos community approved Proposal 34 on 2021-01-20 allocating 129,208 ATOM to implement a comprehensive ATOM marketing plan executed in collaboration with key community stakeholders. Proposal 46 is requesting an extension of the time allowed to spend the approved budget and allocate existing funds for additional ATOM-focused priorities.\\n Proposal details can be found on github: https://github.com/cosmos/governance/pull/22',
    proposal_type: 'Text',
    proposal_status: 'PROPOSAL_STATUS_PASSED',
    yes: '105500388617421',
    no: '326191895594',
    no_with_veto: '15339346647',
    abstain: '4376806090237',
    submit_time: '2021-04-23T14:27:12.684Z',
    voting_start_time: '2021-04-23T23:12:26.432Z',
    voting_end_time: '2021-05-07T23:12:26.432Z',
    deposit_end_time: '2021-05-07T14:27:12.684Z',
    notification_status: null,
    initial_deposit: {
      denom: 'uatom',
      amount: '100000000',
    },
    total_deposit: [
      {
        denom: 'uatom',
        amount: '512000000',
      },
    ],
    moniker: 'strangelove-ventures',
  },
];
