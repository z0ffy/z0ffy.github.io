import cli from './cli'

import type {User} from 'gossip'

// fetch the user info
const fetchUser = async () => {
  const {data} = await cli.rest.users.getByUsername({
    username: process.env.OWNER!,
  })

  const user: User = {
    login: data.login,
    nick_name: data.name || data.login,
    avatar_url: data.avatar_url,
    bio: data.bio ?? 'No fear of words, no fear of years.',
  }

  return user
}

export {fetchUser}
