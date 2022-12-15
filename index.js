const Hapi = require("hapi"); 
const server = new Hapi.Server({ 
    port: 3101, 
}); 
const launch = async () => {
    try { 
        await server.start(); 
    } catch (err) { 
        console.error(err); 
        process.exit(1); 
    }; 
    console.log(`Server running at ${server.info.uri}`); 
}
launch();

server.route({   
    method: 'GET',   
    path: '/',   
    handler: (request, h) => {     
        return `
        I am the home routes!
        `  
    } 
});