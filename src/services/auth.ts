const signIn = (user: string, password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        if(user === 'user' && password === '123')
            return resolve('82PjfFuIi58gPSXwfR3cPBbvwXEwBWhLm1KS8Og8gSilOp0tD0XMijpcZlweSfEY')

        return reject('Invalid Credentials')
    })
}

export {signIn}