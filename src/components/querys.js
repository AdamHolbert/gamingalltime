import {gql} from 'react-apollo';

export const GET_INFO_QUERY = gql`
query getInfo($userId: ID!) {
    User(id: $userId) {
        id
        avatar
        name
        email
        bio
    }
}`;

export const CHANGE_BIO = gql`
mutation ChangeBio($id : ID!, $bio : String!){
  updateUser(id : $id, bio : $bio){
    id
  }
}
`;

export const CHANGE_AVATAR = gql`
mutation ChangeAvatar($id : ID!, $avatar : String!){
  updateUser(id : $id, avatar : $avatar){
    name
  }
}
`;