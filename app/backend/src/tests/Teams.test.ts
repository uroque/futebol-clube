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
    it('should return status 200', async () => {
      sinon.stub(TeamsModel, 'findAll').resolves([]);

      const response = await chai.request(app)
        .get('/teams');

      expect(response.status).to.be.equal(200);

      sinon.restore();
    })

    it('should return teams', async () => {
      sinon.stub(TeamsModel, 'findAll').resolves([]);

      const response = await chai.request(app)
        .get('/teams');

      expect(response.body).to.be.deep.equal([]);  

      sinon.restore();
    })
  })

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
