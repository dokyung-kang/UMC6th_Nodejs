import SwaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        info: {
            title: 'UMC Study API',
            version: '1.0.0',
            description: 'UMC Study API with express, API 설명'
        },
        host: 'Umc-cicd-env.eba-anwipirb.ap-northeast-2.elasticbeanstalk.com',
        basepath: '../'
    },
    apis: ['./src/routes/*.js', './swagger/*']
};

export const specs = SwaggerJsdoc(options);
