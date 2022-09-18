import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import TeamsModel from '../database/models/Teams.model';


chai.use(chaiHttp);

const { expect } = chai;

describe('Teams', () => {
  describe('getAll', () => {
    beforeEach(() => {
      sinon.stub(TeamsModel, 'findAll').resolves([]);
    });

    afterEach(() => {
      sinon.restore();
    })

    it('should return status 200', async () => {
      const response = await chai.request(app)
        .get('/teams');

      expect(response.status).to.be.equal(200);      
    })

    it('should return teams', async () => {
      const response = await chai.request(app)
        .get('/teams');

      expect(response.body).to.be.deep.equal([]);
    })
  })
});
