const code = 'supersecret';

const isLoggedIn = async (resolve, parent, args, ctx, info) => {
    // Include your agent code as Authorization: <token> header.
    console.log('inside middleware')
    const permit = ctx.request.get('Authorization') === code
  
    if (!permit) {
      throw new Error(`Not authorised!`)
    }
  
    return resolve()
  }

const permissionsMiddleware = {
    Query: {
      me: isLoggedIn,
    }
  }

  export default permissionsMiddleware;