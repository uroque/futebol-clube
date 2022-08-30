import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import MatchesModel from '../database/models/Matches.model';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches', () => {
  describe('getAll', () => {
    it('should return status 200', async () => {
      sinon.stub(MatchesModel, 'findAll').resolves([]);

      const response = await chai.request(app)
        .get('/matches');

      expect(response.status).to.be.equal(200);

      sinon.restore();
    })

    it('should return matches', async () => {
      sinon.stub(MatchesModel, 'findAll').resolves([]);

      const response = await chai.request(app)
        .get('matches');

      expect(response.body).to.be.deep.equal([]);  

      sinon.restore();
    })
  })

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
