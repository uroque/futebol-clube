import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import MatchesModel from '../database/models/Matches.model';

chai.use(chaiHttp);

const { expect } = chai;

describe('Leaderboard', () => {
  describe('getLeaderboard', () => {
    // beforeEach(() => {
    //   sinon.stub(MatchesModel, 'findAll').resolves([]);
    // });

    // afterEach(() => {
    //   sinon.restore();
    // });

    it('should return status 200', async () => {
      const response = await chai.request(app)
        .get('/leaderboard/home');

      expect(response.status).to.be.equal(200);
    })

    it('should return leaderboard', async () => {
      const response = await chai.request(app)
        .get('/leaderboard');

      expect(response.body).to.be.deep.equal([]);  
    })
  })
});
