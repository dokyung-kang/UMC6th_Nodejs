import SwaggerJsdoc from "swagger-jsdoc";

const options = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: 'API Swagger',
            description: "개발자용 스웨거",
        },
        basepath: '/',
        servers: [{
            description:"api",
            url: "localhost::3000"
        }],
        securityDefinitions: {
            Authorization: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
            }
        }
    },
    apis: ['./src/**/*.js', './swagger/*']
};

export const specs = SwaggerJsdoc(options);
