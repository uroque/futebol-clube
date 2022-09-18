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
    beforeEach(() => {
      sinon.stub(MatchesModel, 'findAll').resolves([]);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should return status 200', async () => {
      const response = await chai.request(app)
        .get('/matches');

      expect(response.status).to.be.equal(200);
    })

    it('should return matches', async () => {
      const response = await chai.request(app)
        .get('/matches');

      expect(response.body).to.be.deep.equal([]);  
    })
  })
});
