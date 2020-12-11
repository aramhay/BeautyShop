module.exports = ({env}) =>({
    email:{
        provider:"sendgrid",
        providerOptions:{
            apiKey:env
        }

    }
})