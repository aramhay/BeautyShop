
module.exports = {
    sendemail: async (ctx) => {
        let options = ctx.request.body;
        try {
            await strapi.plugins['email'].services.email.send({
                to: options.to,
                from: 'mankuyanars@gmail.com',
                subject: options.subject,
                text:  `You still have products in your shopping cart.${options.text}`,
                html: options.html
            })
        }
        catch (err) {
            return ctx.badRequest(null, err);
        }
    }
}