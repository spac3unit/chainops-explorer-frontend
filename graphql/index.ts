import { gql } from '@apollo/client';

export const LatestBlockHeightQuery = gql`
  query LatestBlockHeightListener($offset: Int = 0) {
    height: archway_block(order_by: { height: desc }, limit: 1, offset: $offset) {
      height
    }
  }
`;

export const TxCountSubscription = gql`
  subscription TxCountListener {
    tx: archway_transaction_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export const TxPerMinuteSubscription = gql`
  subscription TxPerMinute {
    txPerMin: archway_average_block_time_per_minute {
      average_time
    }
  }
`;

export const BlockHeightCountSubscription = gql`
  subscription BlockHeightSubscription {
    archway_block(order_by: { height: desc }, limit: 1) {
      height
    }
  }
`;

export const BlocksQuery = gql`
  query Blocks {
    archway_block(limit: 10, order_by: { height: desc }) {
      hash
      height
      num_txs
      timestamp
      total_gas
      validator {
        consensus_address
        validator_info {
          operator_address
          self_delegate_address
        }
        validator_description {
          avatar_url
          details
          identity
          height
          moniker
        }
      }
    }
  }
`;

export const ValidatorsQuery = gql`
  query Validators($activeStatus: Int = 3) {
    archway_validator(
      where: { validator_status: { status: { _eq: $activeStatus } } }
      order_by: { validator_voting_power: { voting_power: desc } }
    ) {
      validator_status {
        jailed
        status
        tombstoned
      }
      validator_info {
        max_rate
        max_change_rate
        operator_address
        self_delegate_address
        height
      }
      validator_description {
        avatar_url
        details
        moniker
        website
      }
      validator_voting_power {
        voting_power
      }
    }
  }
`;

export const ActiveValidatorsQuery = gql`
  query ActiveValidators {
    active: archway_validator_aggregate(where: { validator_status: { status: { _eq: 3 } } }) {
      aggregate {
        count
      }
    }
    inactive: archway_validator_aggregate(where: { validator_status: { status: { _eq: 1 } } }) {
      aggregate {
        count
      }
    }
  }
`;

export const ValidatorDetailsQuery = gql`
  query ActiveValidators($operator_address: String!) {
    archway_validator(where: { validator_info: { operator_address: { _eq: $operator_address } } }) {
      validator_description {
        avatar_url
        details
        height
        identity
        moniker
        security_contact
        validator_address
        website
      }
      validator_info {
        max_change_rate
        max_rate
        consensus_address
        operator_address
        self_delegate_address
        account {
          address
        }
      }
      blocks(limit: 20) {
        height
        num_txs
      }
    }
  }
`;

export const TxByHashQuery = gql`
  query txByHash($hash: String!) {
    archway_transaction(where: { hash: { _eq: $hash } }) {
      hash
      height
      messages
    }
  }
`;

export const BlockByHeightQuery = gql`
  query blockByHeight($height: bigint!) {
    archway_block(where: { height: { _eq: $height } }) {
      height
    }
  }
`;

export const ValidatorByAddressQuery = gql`
  query validatorByAddress($address: String!) {
    archway_validator_info(where: { operator_address: { _eq: $address } }) {
      operator_address
    }
  }
`;

export const TokenomicsQuery = gql`
  query BondedTokens {
    archway_staking_pool {
      bonded_tokens
      not_bonded_tokens
    }
    archway_supply {
      coins
    }
  }
`;
